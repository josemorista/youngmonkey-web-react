import React, { FC, useState, useRef } from 'react';
import { Menu, MenuBar, MenuButton, MenuOptions, MenuOption } from './styles';
import Grid, { GridItem } from '../../components/Grid';
import Home from './Home';
import Cases from './Cases';

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
        <Grid style={{ height: '95%' }} align="center" spacing={20}>
          <GridItem xl={7} lg={8} sm={12} xs={10}>
            <MenuOptions>
              <MenuOption>Cases</MenuOption>
              <MenuOption>Serviços</MenuOption>
            </MenuOptions>
          </GridItem>
          <GridItem xl={5} lg={4} sm={12} xs={10}>
            <p style={{ textAlign: 'center' }}>youngmonkey@gmail.com</p>
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
