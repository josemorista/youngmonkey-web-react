import React, { FC, useRef, useEffect, useState, memo, useMemo } from 'react';
import bg from '../../../assets/imgs/BG.png';
import monkey from '../../../assets/imgs/monkey.png';
import transports from '../../../assets/imgs/transportes.png';
import buildings from '../../../assets/imgs/predios.png';
import {oapi} from '../../../services/api'
import CloseIcon from '../../../assets/icons/close.svg';
import Grid, { GridItem } from '../../../components/Grid';
import ClickAway from '../../../components/ClickAway';
import { Tile, Cases as CasesContainer, ParallaxElement, Label, CasesTitle } from './styles';
import Modal from '../../../components/Modal';
import Menu from '../common/Menu';
import MenuButton from '../common/Menu/MenuButton';

interface IDepths {
  [key: string] : number;
}

export interface ITile {
  _id: string;
  cols: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
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
  monkey: 0.8,
  transports: 0.4,
  buildings: 0.1,
};

const Cases: FC = () => {
  const transportsRef = useRef<HTMLDivElement>(null);
  const buildingsRef = useRef<HTMLDivElement>(null);
  const monkeyRef = useRef<HTMLDivElement>(null);
  const casesGridRef = useRef<HTMLDivElement>(null);
  const [tiles, setTiles] = useState<Array<ITile>>([])
  const [openTile, setOpenTile] = useState<ITile | null>(null)
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuColor, setMenuColor] = useState('white');

  const sortedTiles = useMemo<Array<ITile>>( () => {
    return tiles?.sort((a: ITile, b: ITile) => a.position - b.position);
  }, [tiles])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

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
      
      if(casesGridRef.current) {
        const y_scroll_pos = window.pageYOffset;  
        const scroll_pos_test = casesGridRef.current.offsetTop;
        if ( y_scroll_pos > scroll_pos_test) {
          setMenuColor('black')
        } else {
          setMenuColor('white')
        }
      }

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
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu}  />
      <MenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} color={menuColor} />
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
        <CasesTitle >
          <GridItem xs={12} justify='center'>Cases</GridItem>
        </CasesTitle>
        <Grid style={{padding: '10%', paddingTop: '35%'}} spacing={10}>
          {sortedTiles?.map((tile, index) => (<Tile ref={index === 0 ? casesGridRef : null} onClick={() => {setOpenTile(tile)}} tileImg={tile.img} key={tile._id} {...tile.cols}><Label align='center'><GridItem xs={1} /><GridItem justify='center' xs={10} style={{fontSize: '20pt', fontFamily: 'Uni Sans', textAlign: 'center'}}>{tile.descriptions?.ptBr || ''}</GridItem></Label></Tile>))}
        </Grid>
      </div>
      {openTile ? 
      <Modal >
        <Grid align='center' style={{height: '100%'}}>
          <GridItem xs={1}/>
          <GridItem xs={10} justify='center' style={{position: 'relative'}}>
            <span style={{position: 'absolute', right: '-10px', top: '-26px', color: 'white', cursor: 'pointer'}} onClick={() => {
              setOpenTile(null);
            }}><img src={CloseIcon} style={{width: '15px', height: '15px'}} alt='Close'/></span>
            <ClickAway onClose={() => {
              setOpenTile(null);
            }}>
              <video src={openTile.video} autoPlay controls loop style={{width: '100%', height: 'auto', padding: '5px', backgroundColor: 'white'}}/>
            </ClickAway>
          </GridItem>
        </Grid>
      </Modal>
      : null }
    </CasesContainer>
  );
};

export default memo(Cases);
