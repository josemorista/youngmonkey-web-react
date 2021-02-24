import React, { FC, useRef } from 'react';
import { Menu, MenuOptions, MenuOption, MenuIcon, ContactText, ContactNumberButton} from './styles';
import Grid, { GridItem } from '../../../../components/Grid';
import facebookIcon from '../../../../assets/icons/facebook.svg'
import whatsappIcon from '../../../../assets/icons/whatsapp.svg'
import instagramIcon from '../../../../assets/icons/instagram.svg'
import { Link } from 'react-router-dom';
import ClickAway from '../../../../components/ClickAway'

const openInNewTab = (url: string) : void => {
  var win = window.open(url, '_blank')
  
  if (win) {
    win.focus()
  }
}

const DrawerMenu: FC<{menuOpen: boolean, toggleMenu: () => void}> = ({menuOpen, toggleMenu}) => {
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);

  const changeMenuColor = (color: string) => {
     if (bar1Ref.current && bar2Ref.current) {
      bar1Ref.current.style.backgroundColor = color;
      bar2Ref.current.style.backgroundColor = color;
    }
  }

  return (
    <ClickAway onClose={() => {
      if (menuOpen) {
        toggleMenu();
      }
    }}>
      <Menu open={menuOpen}>
        <Grid style={{ height: '90%' }} align="center" spacing={20}>
          <GridItem xl={6} lg={8} sm={8} xs={10}>
            <MenuOptions>
              <Link to='/' onClick={toggleMenu}>
                <MenuOption style={{paddingLeft: '10%', marginBottom: '10px'}}>Home</MenuOption>
              </Link>
              <Link to='/cases' onClick={toggleMenu}>
                <MenuOption>Cases</MenuOption>
              </Link>
            </MenuOptions>
          </GridItem>
          <ContactText xl={6} lg={4} sm={4} xs={12} style={{paddingTop: '25px'}}>
            <p style={{ textAlign: 'right',  paddingRight: 'calc(2% + 15px)', lineHeight: 1.5 }}>
              <span style={{fontFamily: 'Uni Sans Bold'}}>Contato Brasil</span>
              <br/>
              Vitor Serra
              <br/>
              vitor.serra@ym.video
              <br/>
              <ContactNumberButton 
                
                onClick={() => {
                openInNewTab('https://api.whatsapp.com/send?phone=5521985715844&text=Olá,%20Gostaria%20de%20saber%20mais%20sobre%20o%20trabalho%20de%20vocês')
              }}>
              +55 21 985715844
              </ContactNumberButton>
            </p>
          </ContactText>
        </Grid>
        <Grid align='center' spacing={10}>
          <GridItem xs={12} justify='end' style={{display: 'inline', fontSize: '30pt', paddingRight: '2%'}}>
            <MenuIcon
              alt="whatsApp"
              src={whatsappIcon}
              onClick={() => {
                openInNewTab('https://api.whatsapp.com/send?phone=5521969306922&text=Olá,%20Gostaria%20de%20saber%20mais%20sobre%20o%20trabalho%20de%20vocês')
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
      </ClickAway>
  );
};

export default DrawerMenu;
