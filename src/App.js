import React from "react";
import Navegacao from './componentes/Nav/IndexNav/Nav';
import Inicio from './componentes/Home/IndexHome/IndexInicio'
import Projects from './componentes/Projetos/IndexProjetos/Projetos'; 
import Contato from './componentes/Contato/IndexContact/Contatos'; 
import Conhecimeto from './componentes/Conhecimentos/Conhecimento/Conhecimentos'
import Experiencia from './componentes/Experiencia/IndexExperiencia/Experiencia'


function App() {


  return (
    <div className="overflow-x-hidden sm:max-w-none max-w-[896px]">
     <Navegacao/>
     <Inicio/>
     <Conhecimeto/>
     <Experiencia/>
     <Contato/> 
    </div>
  );
}

export default App;
