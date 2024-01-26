import React, { useRef } from "react";
import Buttom from "../../Shared-components/Buttom/Buttom";
import Imput from "../Imput/Imput";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Motion } from "../../Shared-components/Motion/Motion";

const Contatos = () => {
  const form = useRef();

  function notifySucces() {
    toast.success("Formulário enviado com sucesso", {
      autoClose: 3000,
      theme: "dark",
    });
  }

  function notifyError() {
    toast.error("Erro ao enviar formulario. Tente novamente mais tarde.", {
      autoClose: 3000,
      theme: "dark",
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "serviceid-thiagovillani",
        "templeteid-thiagovillani",
        form.current,
        "hrNSUbA7sW5iIv84l"
      )
      .then(
        (result) => {
          notifySucces();
          console.log(result);
        },
        (error) => {
          notifyError();
          console.log(error);
        }
      );
    e.target.reset();
  };
  return (
    <div
      name="contato"
      className="bg-dark-900 text-white flex flex-col h-screen items-center justify-center p-10"
    >
      <Motion>
        <ToastContainer position="bottom-right" />

        <div className="py-10">
          <p className="font-mono text-emerald-400 dark:text-blue-900">
            ../Contato
          </p>
          <h2 className="text-4xl dark:text-gray-600 font-medium mt-2">
            Entre em Contato
          </h2>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center justify-center"
        >
          <Imput
            type="text"
            placeholder="ex: thiago villani"
            name="user_name"
          />

          <Imput
            type="email"
            placeholder="ex: thiago05@gmail.com"
            name="user_email"
          />

          <textarea
            name="message"
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-[#312e2e] dark:bg-[#cecdcd] rounded-lg placeholder:text-gray-400 text-gray-50 dark:placeholder:text-gray-400 dark:text-gray-700 p-4 focus:outline-none focus:ring-2 ring-[#201f1f] "
            maxLength={500}
          />

          <div className="py-4">
            {" "}
            <Buttom type="submit" text="Enviar Mensagem" />{" "}
          </div>
        </form>
        <div className="h-[200px] w-full flex justify-center items-end dark:text-blue-900">
          <div className="flex items-center font-mono">
            Made with{" "}
            <div className="mx-2 text-emerald-600 dark:text-blue-400">
              {" "}
              <FaHeart />{" "}
            </div>{" "}
            by <div className="font-bold mx-2"> Thiago Villani </div>{" "}
          </div>
        </div>
      </Motion>
    </div>
  );
};

export default Contatos;
