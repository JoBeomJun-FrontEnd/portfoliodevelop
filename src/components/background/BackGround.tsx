import { initParticlesEngine, Particles } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';
import { theme } from '../../styles/theme';

const BackGround = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
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
                enable: true,
                speed: 2,
              },
            },
          }}
        />
      )}
    </>
  );
};
export default BackGround;
