import React, { FC, useState, useRef } from 'react';
import { Menu, MenuBar, MenuButton, MenuOptions, MenuOption, MenuIcon } from './styles';
import Grid, { GridItem } from '../../components/Grid';
import Home from './Home';
import Cases from './Cases';

import facebookIcon from '../../assets/icons/facebook.svg'
import whatsappIcon from '../../assets/icons/whatsapp.svg'
import instagramIcon from '../../assets/icons/instagram.svg'


const openInNewTab = (url: string) : void => {
  var win = window.open(url, '_blank')
  
  if (win) {
    win.focus()
  }
}

const App: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (!menuOpen && bar1Ref.current && bar2Ref.current) {
      bar1Ref.current.style.transform = 'rotate(-45deg) translate(-4px, 3px)';
      bar2Ref.current.style.transform = 'rotate(45deg) translate(-3px, -4px)';
    } else if (bar1Ref.current && bar2Ref.current) {
      bar1Ref.current.style.transform = 'none';
      bar2Ref.current.style.transform = 'none';
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Menu open={menuOpen}>
        <Grid style={{ height: '92%' }} align="center" spacing={20}>
          <GridItem xl={6} lg={8} sm={8} xs={12}>
            <MenuOptions>
              <MenuOption>Cases</MenuOption>
            </MenuOptions>
          </GridItem>
          <GridItem xl={6} lg={4} sm={4} xs={12} align='center'>
            <p style={{ textAlign: 'center', fontSize: '13pt', paddingRight: '2px' }}>
              <b style={{fontFamily: 'Uni Sans Bold'}}>Contato</b>
              <br /> 
              youngmonkey@gmail.com
            </p>
          </GridItem>
        </Grid>
        <Grid align='center'>
          <GridItem xs={12} justify='end' style={{display: 'inline', fontSize: '30pt', paddingRight: '2%'}}>
            <MenuIcon
              alt="whatsApp"
              src={whatsappIcon}
              onClick={() => {
                openInNewTab('https://api.whatsapp.com/send?1=pt_BR&phone=5521983030579&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre')
              }}
            />
            <MenuIcon
              alt="facebook"
              src={facebookIcon}
              
              onClick={() => {
                openInNewTab('https://www.facebook.com/youngmonkeybrasil/')
              }}
            />
            <MenuIcon
              alt="instagram"
              src={instagramIcon}
              
              onClick={() => {
                openInNewTab('https://www.instagram.com/youngmonkeybrasil/')
              }}
            />
          </GridItem>
        </Grid>
      </Menu>
      <MenuButton
        onClick={() => {
          toggleMenu();
        }}
      >
        <MenuBar ref={bar1Ref}></MenuBar>
        <MenuBar ref={bar2Ref}></MenuBar>
      </MenuButton>
      <Cases />
    </div>
  );
};

export default App;
