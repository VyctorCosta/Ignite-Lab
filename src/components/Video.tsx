import React from "react";
import { DiscordLogo, Lightning } from "phosphor-react";

export default function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video"></div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-2xl font-bold">
              Aula 01 - Criando o projeto e realizando o setup inicial
            </h1>
            <p className="text-gray-200">
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação
              utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto
              no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela
              plataforma no nosso front-end utilizando Apollo Client.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href=""
              className="w-[237px] flex justify-center items-end gap-2.5 bg-green-500 rounded py-4 px-3.5 hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              <span className="text-[14px] font-bold">COMUNIDADE DO DISCORD</span>
            </a>
            <a
              href=""
              className="w-[237px] flex justify-center items-end gap-2.5 border border-blue-500 text-blue-500 rounded py-4 px-3.5 hover:bg-blue-500 hover:text-black transition-colors"
            >
              <Lightning size={24} />
              <span className="text-[14px] font-bold">ACESSE O DESAFIO</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
