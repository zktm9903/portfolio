import React from 'react';
import { SkillIcons } from 'img/skillsvg';
import { forwardRef } from 'react';


function Skill (ref:React.MutableRefObject<undefined>) {
  return (
    <div className="flex flex-col items-center bg-gray-100 mb-3 w-full">
      <p className="text-7xl font-bold mt-24">SKILLS</p>
      <div className="flex flex-wrap items-center justify-center w-full max-w-[70rem] mt-16 mb-8">
        {SkillIcons.map((icon) => (
          <div className="w-32 h-32 flex items-center justify-center">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default forwardRef<HTMLDivElement>(Skill);
