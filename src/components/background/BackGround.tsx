import { initParticlesEngine, Particles } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';
import { theme } from '../../styles/theme';
import { BackgroundContainer, BackgroundIsBelow } from './background.css';
import useScrollToStore from '../../stores/useScrollToStore';

const BackGround = () => {
  const [init, setInit] = useState(false);
  const { isBelow } = useScrollToStore();

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className={`${BackgroundContainer} ${isBelow ? BackgroundIsBelow.true : BackgroundIsBelow.false}`}>
      {init && (
        <Particles
          options={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                },
              },
              color: {
                value: isBelow ? theme.color.gray900 : theme.color.white,
              },
              shape: {
                type: 'square',
              },
              opacity: {
                value: 0.5,
              },
              size: {
                value: { min: 1, max: 3 },
              },
              links: {
                enable: true,
                distance: 100,
                color: theme.color.blue500,
              },
              move: {
                enable: true,
                speed: { min: 0.5, max: 1.5 },
                outModes: 'bounce',
              },
              zIndex: {
                value: -1,
              },
            },
          }}
        />
      )}
    </div>
  );
};
export default BackGround;
