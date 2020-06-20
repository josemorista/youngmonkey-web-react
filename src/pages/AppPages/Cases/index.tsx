import React, { FC, useRef, useEffect, useState } from 'react';
import bg from '../../../assets/imgs/BG.png';
import monkey from '../../../assets/imgs/monkey.png';
import transports from '../../../assets/imgs/transportes.png';
import buildings from '../../../assets/imgs/predios.png';
import {oapi, api} from '../../../services/api'
import Grid, { GridItem } from '../../../components/Grid';
import { Tile, Cases as CasesContainer, ParallaxElement } from './styles';
import Modal from '../../../components/Modal';

import intro from '../../../assets/videos/intro.mp4'

interface IDepths {
  [key: string] : number;
}

export interface ITile {
  _id: string;
  cols: number;
  img: string;
  video: string;
  position: number;
  names: {
    enUs: string;
    ptBr: string;
  };
  descriptions: {
    enUs: string;
    ptBr: string;
  };
}
const getMovement = (depth : number) => {
  const topDistance = window.pageYOffset;
  const movement = -(topDistance * depth);
  return movement;
}

const depths : IDepths = {
  monkey: 1.2,
  transports: 0.8,
  buildings: 0.1
};

const Cases: FC = () => {
  const transportsRef = useRef<HTMLDivElement>(null);
  const buildingsRef = useRef<HTMLDivElement>(null);
  const monkeyRef = useRef<HTMLDivElement>(null);
  const [tiles, setTiles] = useState<Array<ITile>>([])
  const [openTile, setOpenTile] = useState<ITile | null>(null)

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const {data} = await oapi.get('/tiles');
        setTiles(data);
      } catch (error) {
        console.log(error);
      }
    }

    window.addEventListener('scroll', () => {
      if (transportsRef.current) {
        transportsRef.current.style.transform = `translate3d(0, ${getMovement(depths['transports'])}px, 0)`;
      }

      if (buildingsRef.current) {
        buildingsRef.current.style.transform = `translate3d(0, ${getMovement(depths['buildings'])}px, 0)`;
      }

      if (monkeyRef.current) {
        monkeyRef.current.style.transform = `translate3d(0, ${getMovement(depths['monkey'])}px, 0)`;
      }  
    });
    fetchTiles();
  }, []);

  return (
    <CasesContainer
      img={`url(${bg})`}
    >
      <ParallaxElement
        ref={transportsRef}
        img={`url(${transports})`}
       />
       <ParallaxElement
        ref={buildingsRef}
        img={`url(${buildings})`}
        
      />
      <ParallaxElement
        ref={monkeyRef}
        img={`url(${monkey})`}
        
      />
      <div style={{zIndex: 15, position: 'relative'}}>
        <Grid style={{textAlign: 'center', color: 'white', fontSize: '100pt', paddingTop: '5%'}}>
          <GridItem xs={12} justify='center'>Cases</GridItem>
        </Grid>
        <Grid style={{padding: '10%', paddingTop: '35%'}} spacing={10}>
          {tiles?.sort((a: ITile, b: ITile) => a.position - b.position).map(tile => (<Tile onClick={() => {setOpenTile(tile)}} tileImg={tile.img} key={tile._id} lg={tile.cols}></Tile>))}
        </Grid>
      </div>
      {openTile ? 
      <Modal >
        <Grid align='center' style={{height: '100%'}}>
          <GridItem xs={1}/>
          <GridItem xs={10} justify='center' style={{position: 'relative'}}>
            <span style={{position: 'absolute', right: 0, top: '-30px', color: 'white', cursor: 'pointer'}} onClick={() => {
              setOpenTile(null);
            }}>Fechar</span>
            <video src={'http://localhost:3333/uploads/globo.mp4'} autoPlay muted style={{width: '100%', height: 'auto', padding: '5px', backgroundColor: 'white'}}/>
          </GridItem>
        </Grid>
      </Modal>
      : null }
    </CasesContainer>
  );
};

export default Cases;
