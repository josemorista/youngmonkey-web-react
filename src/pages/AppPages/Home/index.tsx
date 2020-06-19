import React, { useEffect, useRef, FC } from 'react';
import styled, { keyframes } from 'styled-components';
import introVideo from '../../../assets/videos/intro.mp4';

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
const Intro = styled.video`
  animation-name: ${loadIntro};
  animation-duration: 1.2s;
  animation-timing-function: cubic-bezier(0, 0, 0.1, 1);
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
`;

const Home: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Intro loop muted id="myVideo" ref={videoRef}>
        <source src={introVideo} type="video/mp4" />
      </Intro>
    </>
  );
};

export default Home;
