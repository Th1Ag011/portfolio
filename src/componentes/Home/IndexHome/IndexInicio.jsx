import React from "react";
import {ListSkill}  from "../../Shared-components/SkillLayout/SkilLayout"
import { Link } from "react-scroll";
import Social from "../SocialList/IndexSocial";
import MinhaFoto from "../../../pics/euThiago.jpeg"
import Buttom from "../../Shared-components/Buttom/Buttom";
import { motion } from "framer-motion";

const Inicio = () => {
  return (
    <section className="w-full  flex-col md:flex items-start md:items-center justify-center md:px-0 px-10 py-32" name="inicio">
      <motion.div
       className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between"      
       initial={{ opacity: 0, x:-100}}
       whileInView={{opacity: 1, x: 0}}
       exit = {{opacity: 0, x: -100}}
       transation = {{duration: 3.0}}
       >
        <div className="lg:w-1/2 mx-auto">
          <p className="font-mono text-emerald-400 dark:text-blue-900/80"> Olá, meu nome é</p>
          <h2 className="text-4xl text-white dark:text-gray-600 font-medium mt-2">Thiago Villani</h2>
          <p className="text-gray-400 dark:text-gray-900 my-6 text-sm sm:text-base">Olá, sou o Thiago Villani, um desenvolvedor Full Stack apaixonado por tecnologia. Com um ano de experiência, tenho me dedicado ao universo do C#, resolvendo bugs, criando testes unitários e consumindo APIs. Além disso, já criei iBoots usando Uchat e participei de projetos com React. Estou sempre aberto a novas oportunidades e desafios.</p> 
        
        <div className=" max-w-[350px] flex flex-wrap justify-start items-center py-5 gap-4 ">
        <ListSkill skills={['C# ', 'Uchat/iBot', 'JavaScript', 'React', 'Next.js', 'MySql', 'Tailwind' ]} />
        </div>
           
          <div className="flex ">
              <Link to="contato" smooth={true} duration={500}>
            <Buttom text="Entre em contato"/>
            </Link>
 
            <div> <Social/> </div>       
          
          </div>         
       </div>
       
        <motion.div className="lg:w-1/3 flex origin-center justify-end sm-py-0 py-10  "
         initial={{ opacity: 0, y: 200, scale: 0.5 }}
         whileInView={{ opacity: 1, y: 0, scale: 1 }}
         exit={{ opacity: 0, y: 200, scale: 0.5 }}
         transition={{ duration: 0.5 }}
        >
        
          <img 
          className="rounded-md"
            width={420}
            height={404}
            src={MinhaFoto}
            alt="img perfil"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Inicio;

