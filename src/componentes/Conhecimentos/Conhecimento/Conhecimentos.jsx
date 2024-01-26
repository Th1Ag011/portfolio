import React from 'react'
import { Competencias } from '../LayoutSkills/LayoutCompetencia'
import { SiCsharp, SiPhpstorm, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs, SiHtml5  } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { Motion } from '../../Shared-components/Motion/Motion';

const Conhecimentos = () => {

  const competenciasList = [
    { text: "C#", icon: SiCsharp },
    { text: "Php", icon: SiPhpstorm },
    { text: "HTML5", icon: SiHtml5 },
    { text: "Tailwind", icon: SiTailwindcss },
    { text: "JavaScript", icon: SiJavascript },
    { text: "React", icon: SiReact },
    { text: "Next.js", icon: SiNextdotjs },
    { text: "MySql", icon: GrMysql },
  ];

  return (
    <div className="container sm:mx-32 mx-12 h-[1000px] md:h-[600px] flex flex-col justify-center my-48" name="conhecimento">
    <Motion>  

        <div className="p-5 ">
          <p className="font-mono text-emerald-400 dark:text-blue-900">../competencias</p>
          <h2 className="text-4xl dark:text-gray-900 text-white font-medium mt-2">Conhecimentos</h2>
        </div>
        <div className='flex flex-col  items-center justify-center p-4 '>
          <Competencias competencias={competenciasList} />
        </div>
        </Motion> 
      </div>

  ) 
}

export default Conhecimentos
