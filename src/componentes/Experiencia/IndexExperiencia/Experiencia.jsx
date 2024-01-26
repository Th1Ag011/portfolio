import React from "react";
import Carreira from "../CarreiraText/Carreira.jsx";
import { ListSkill } from "../../Shared-components/SkillLayout/SkilLayout.jsx";
import { Motion } from "../../Shared-components/Motion/Motion.jsx";

export default function ExperienciaProfissional() {
  return (
    <Motion>
      <div
        className="bg-dark-900 text-white dark:text-gray-600 w-full flex items-center justify-center px-10 py-32"
        name="experiênciaProf"
      >
        <div className="container sm:flex md:mx-20 mx-0">
          <div className="p-5 w-1/2">
            <p className="font-mono text-emerald-400 dark:text-blue-900/80 ">
              ../experiencias
            </p>
            <h2 className="text-4xl font-medium mt-2">
              Experiência Profissional
            </h2>
            <p className="py-2 hidden sm:flex">
              Estou constantemente buscando novos desafios e projetos
              empolgantes!!
            </p>
          </div>

          <div className="w-2/2 sm:w-1/2 sm:border-l-2 h-auto ">
            <div className="flex-col p-5">
              <Carreira
                place="@rv5Tech"
                title="Desenvolvedor BackEnd"
                period="Março 2023 -> No momento (1 ano) "
                description="Atualmente, estou engajado profissionalmente na Rv5Tech, onde minha atuação abrange a resolução de bugs, desenvolvimento de testes unitários, a integração de APIs, a configuração de iBoots por meio do Uchat e a criação de interfaces utilizando Blazor."
              />
              <div className="flex gap-2">
                <ListSkill skills={["C#", "iBot/ Uchat", "Blazor"]} />
              </div>
            </div>

            <div className="flex-col p-5">
              <Carreira
                place="@PROJETO DE INOVAÇÃO TECNOLÓGICA"
                title="Desenvolvedor FrontEnd"
                period="Concluido (Final de 2023)"
                description="No âmbito do Projeto Final para a conclusão do Ensino Médio, participei do desenvolvimento de um website intitulado 'Time Out'. Este site foi projetado para facilitar a busca de eventos locais, empregando as tecnologias Next.js, Tailwind e Node. Minha contribuição específica concentrou-se na elaboração da interface do projeto."
              />
              <div className="flex gap-2">
                <ListSkill skills={["Next.js", "Tailwind"]} />
              </div>
            </div>

            <div className="flex-col p-5">
              <Carreira
                place="@Cotemig - Ensino Medio -> Tecnico TI"
                title="Formação"
                period="Concluido (2 anos de Formação) "
                description="No contexto da minha formação no Ensino Médio Técnico em TI no Cotemig, dediquei-me ao estudo abrangente dos fundamentos da programação. Explorei conceitos essenciais, como Programação Orientada a Objeto, Banco de Dados e Redes, ao longo de um período de dois anos, culminando com a conclusão bem-sucedida do curso."
              />
              <div className="flex gap-2">
                <ListSkill
                  skills={["C#", "Php", "Html", "Css", "Js", "MySql"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Motion>
  );
}
