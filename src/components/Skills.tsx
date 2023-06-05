import React, { FC } from 'react';

export interface ISkillsProps {
  skills: string[];
  className?: string;
  skillClassName?: string;
}

export const Skills: FC<ISkillsProps> = ({
  skills,
  className,
  skillClassName,
}) => {
  return (
      <div className={className}>
        {skills?.map(skill => (
          <div className={skillClassName} key={skill}>
            {skill}
          </div>
        ))}
      </div>
  );
};

export default Skills;
