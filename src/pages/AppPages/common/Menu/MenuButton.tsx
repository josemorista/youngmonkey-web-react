import React, { FC, useRef, useEffect } from 'react';
import { MenuButton, MenuBar} from './styles';


const CustomMenuButton: FC<{menuOpen: boolean, toggleMenu: () => void, color? : string}> = (props) => {
  const bar1Ref = useRef<HTMLDivElement>(null);
  const bar2Ref = useRef<HTMLDivElement>(null);

  const changeMenuColor = (color: string) => {
     if (bar1Ref.current && bar2Ref.current) {
      bar1Ref.current.style.backgroundColor = color;
      bar2Ref.current.style.backgroundColor = color;
    }
  }

  useEffect(() => {
    if (props.menuOpen && bar1Ref.current && bar2Ref.current) {
      changeMenuColor('black')
      bar1Ref.current.style.transform = 'rotate(-45deg) translate(-4px, 3px)';
      bar2Ref.current.style.transform = 'rotate(45deg) translate(-3px, -4px)';
    } else if (bar1Ref.current && bar2Ref.current) {
      changeMenuColor(props.color || 'black')
      bar1Ref.current.style.transform = 'none';
      bar2Ref.current.style.transform = 'none';
    }
  }, [props.color, props.menuOpen, props.toggleMenu])

  useEffect(() => {
    if (props.color) {
      changeMenuColor(props.color);
    }
  }, [props.color])

  return (
      <MenuButton
        onClick={() => {
          props.toggleMenu();
        }}
      >
        <MenuBar ref={bar1Ref}></MenuBar>
        <MenuBar ref={bar2Ref}></MenuBar>
      </MenuButton>
  );
};

export default CustomMenuButton;
