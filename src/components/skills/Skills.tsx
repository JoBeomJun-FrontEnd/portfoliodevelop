import { theme } from '../../styles/theme';
import { ColorType } from '../../types/colortype';
import Frame from '../common/frame/Frame';
import { SkillsCategory, SkillsContainer, SkillsElement, SkillsElements } from './skills.css';

type SkillCategory = {
  [category: string]: Partial<{ [color in ColorType]: string }>[];
};

const Skills = () => {
  const skillsElement: SkillCategory[] = [
    { Language: [{ blue500: 'TypeScript' }, { yellow600: 'JavaScript' }] },
    {
      Frontend: [
        { blue400: 'React' },
        { brown600: 'Zustand' },
        { pink500: 'TanStackQuery' },
        { blue300: 'Tailwind CSS' },
        { yellow600: 'VanillaExtract CSS' },
      ],
    },
    { Backend: [{ yellow700: 'Firebase' }] },
    { DevOps: [{ blue500: 'Netlify' }, { black: 'GitHubPages' }] },
  ];

  return (
    <Frame>
      <div style={{ width: '100%' }}>
        {skillsElement.map((item, index) =>
          Object.entries(item).map(([key, values]) => (
            <div key={`${key}-${index}`} className={SkillsContainer}>
              <div className={SkillsCategory}>{key}</div>
              <div className={SkillsElements}>
                {values.map((skill, skillIndex) =>
                  Object.entries(skill).map(([color, skillName]) => (
                    <div
                      key={`${color}-${skillIndex}`}
                      style={{ backgroundColor: theme.color[color as ColorType], color: theme.color.white }}
                      className={SkillsElement}
                    >
                      {skillName}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </Frame>
  );
};
export default Skills;
