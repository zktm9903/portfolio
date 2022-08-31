import React from 'react';
import { ReactComponent as Html5 } from './skills/html5.svg';
import { ReactComponent as Css3 } from './skills/css3.svg';
import { ReactComponent as Javascript } from './skills/javascript.svg';
import { ReactComponent as Typescript } from './skills/typescript.svg';
import { ReactComponent as Tailwindcss } from './skills/tailwindcss.svg';
import { ReactComponent as Styledcomponents } from './skills/styledcomponents.svg';
import { ReactComponent as ReactIcon } from './skills/react.svg';
import { ReactComponent as Redux } from './skills/redux.svg';
import { ReactComponent as Eslint } from './skills/eslint.svg';
import { ReactComponent as Prettier } from './skills/prettier.svg';
import { ReactComponent as Git } from './skills/git.svg';
import { ReactComponent as Github } from './skills/github.svg';

const defultColor = '#000000';

const SkillIcons = [
  <Html5
    fill={defultColor}
    className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-html5 hover:w-full"
  />,
  <Css3
    fill={defultColor}
    className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-css3 hover:w-full"
  />,
  <Javascript
    fill={defultColor}
    className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-javascript hover:w-full"
  />,
  <Typescript
    fill={defultColor}
    className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-typescript hover:w-full"
  />,
  <Tailwindcss
    fill={defultColor}
    className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-tailwindcss hover:w-full"
  />,
  <Styledcomponents
    fill={defultColor}
    className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-styledcomponents hover:w-full"
  />,
  <ReactIcon
    fill={defultColor}
    className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-react hover:w-full"
  />,
  <Redux
    fill={defultColor}
    className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-redux hover:w-full"
  />,
  <Eslint
  fill={defultColor}
  className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-eslint hover:w-full"
  />,
  <Prettier
    fill={defultColor}
    className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-prettier hover:w-full"
  />,
  <Git
    fill={defultColor}
    className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-git hover:w-full"
  />,
  <Github
    fill={defultColor}
    className="w-10/12 ease-in-out duration-300 hover:fill-current hover:text-github hover:w-full"
  />,
];

export { SkillIcons };
