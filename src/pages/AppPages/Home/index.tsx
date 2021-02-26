import React, { FC, useState } from 'react';
import styled, { keyframes } from 'styled-components';
//import introVideo from '../../../assets/videos/intro.mp4';
import bg from '../../../assets/imgs/BGHome.png';
import logo from '../../../assets/imgs/logo.png';
import { Link } from 'react-router-dom';
import Menu from '../common/Menu';
import MenuButton from '../common/Menu/MenuButton';

const loadIntro = keyframes`
  0% {
    transform: translate(100%, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;


const loadLetUsHelp = keyframes`
    0% {
      opacity: 0;
      transform: translate3d(0, -65%, 0);
    }
    84% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      word-spacing: 5px;
    }
    100% {
      word-spacing: 3px;
    }
`;

const Intro = styled.img`
  animation-name: ${loadIntro};
  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(0, 0, 0.1, 1);
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
`;

const LetUsHelp = styled.div`
  position: absolute;
  bottom: 8%;
  left: 5%;
  animation-name: ${loadLetUsHelp};
  animation-delay: 1.2s;
  animation-duration: 2s;
  animation-fill-mode: both;
  font-size: 40pt;
  color: white;
`

const Logo = styled.img`
  position: absolute;
  width: 110px;
  height: auto;
  top: 1%;
  left: 1%;
  cursor: pointer;
  animation-name: ${keyframes`
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  `};
  animation-fill-mode: backwards;
  animation-duration: 1s;
  animation-delay: 1.5s;
  z-index: 80
`


const Home: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  /*const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);*/

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} color={'white'} />
      <Link to={'/'}>
        <Logo src={logo} alt="Young Monkey" />
      </Link>
      {/*<Intro loop muted id="myVideo" ref={videoRef}>
        <source src={introVideo} type="video/mp4" />
      </Intro>*/}
      <Intro src={bg} alt='home' />
    </>
  );
};

export default Home;
