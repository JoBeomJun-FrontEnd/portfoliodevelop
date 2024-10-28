import { initParticlesEngine, Particles } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';
import { theme } from '../../styles/theme';
import useScrollToHook from '../../hooks/useScrollToHook';
import { BackgroundContainer, BackgroundIsBelow } from './background.css';

const BackGround = () => {
  const [init, setInit] = useState(false);
  const { isBelow } = useScrollToHook();

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
          id="tsparticles"
          options={{
            background: { color: theme.color.gray900 },
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                },
              },
              color: {
                value: theme.color.white,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 2, max: 4 },
              },
              move: {
                enable: !isBelow ? true : false,
                speed: 2,
              },
            },
          }}
        />
      )}
    </div>
  );
};
export default BackGround;
