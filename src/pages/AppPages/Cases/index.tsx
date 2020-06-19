import React, { FC, useRef, useEffect } from 'react';
import bg from '../../../assets/imgs/BG.png';
import monkey from '../../../assets/imgs/monkey.png';
import transports from '../../../assets/imgs/transportes.png';

const Cases: FC = () => {
  const transportsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (transportsRef.current) {
        const topDistance = window.pageYOffset;
        const movement = -(topDistance * 0.8);
        transportsRef.current.style.transform = `translate3d(0, ${movement}px, 0)`;
      }
    });
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '150vh',
        height: '100%',
        width: '100%',
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        ref={transportsRef}
        style={{
          height: '80%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundImage: `url(${transports})`,
          backgroundPosition: 'top center',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '80%',
          width: '100%',
          backgroundImage: `url(${monkey})`,
          backgroundPosition: 'top center',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          zIndex: 10,
        }}
      ></div>
    </div>
  );
};

export default Cases;
