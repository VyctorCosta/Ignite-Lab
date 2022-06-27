import Logo from "Icons/Logo";
import React from "react";

export default function Subscribe() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="flex justify-between items-center mx-auto mt-20 max-w-[1100px] w-full">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com{" "}
            <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-2 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e
            com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome Completo"
            />

            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu E-mail"
            />

            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-small hover:bg-green-700 transition-colors"
              type="submit"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img className="mt-10" src="/src/assets/code_mockup.png" alt="Mockup de codigo" />
    </div>
  );
}
