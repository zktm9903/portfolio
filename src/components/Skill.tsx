import { SkillIcons } from 'img/skillsvg';
import React from 'react';

function Skill() {
  return (
    <div className="flex flex-col items-center bg-gray-100 mb-3 w-screen">
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

export default Skill;
