import React, { FC, useRef, useEffect } from 'react';
import bg from '../../../assets/imgs/BG.png';
import monkey from '../../../assets/imgs/monkey.png';
import transports from '../../../assets/imgs/transportes.png';
import buildings from '../../../assets/imgs/predios.png';

interface IDepths {
  [key: string] : number;
}

const getMovement = (depth : number) => {
  const topDistance = window.pageYOffset;
  const movement = -(topDistance * depth);
  return movement;
}

const depths : IDepths = {
  monkey: 1.2,
  transports: 0.8,
  buildings: 0.4
};

const Cases: FC = () => {
  const transportsRef = useRef<HTMLDivElement>(null);
  const buildingsRef = useRef<HTMLDivElement>(null);
  const monkeyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
        zIndex: 0
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
          zIndex: 1,
        }}
       />
       <div
        ref={buildingsRef}
        style={{
          height: '80%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundImage: `url(${buildings})`,
          backgroundPosition: 'top center',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />
      <div
        ref={monkeyRef}
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
      />
    </div>
  );
};

export default Cases;
