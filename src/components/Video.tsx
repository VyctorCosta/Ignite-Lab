import React from "react";
import { CaretRight, DiscordLogo, Lightning, Image } from "phosphor-react";
import LogoRocketseat from "Icons/LogoRocketseat";

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
            <p className="text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação
              utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto
              no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela
              plataforma no nosso front-end utilizando Apollo Client.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="w-16 h-16 rounded-full border-2 border-blue-500"
                src="https://github.com/tutuezin.png"
                alt="Foto do professor"
              />

              <div className="flex flex-col">
                <strong className="text-2xl">Tutuezin</strong>
                <span className="text-sm">Co-Founder Amazon Prime Video</span>
              </div>
            </div>
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

      <div className="flex flex-1 px-8 pt-12 justify-between items-center">
        <a
          href="#"
          className="flex w-[49%] h-[134px] bg-gray-700 items-center hover:bg-gray-500 transition-colors"
        >
          <span className="flex justify-center items-center h-full w-[17%] bg-green-700">
            <Image size={40} />
          </span>

          <div className="flex flex-col gap-2 w-[56%] justify-center ml-6">
            <span className="text-2xl font-bold">Material complementar</span>
            <span>Acesse o material complementar para acelerar o seu desenvolvimento</span>
          </div>

          <CaretRight className="text-blue-500 ml-auto mr-8" size={24} />
        </a>
        <a
          href="#"
          className="flex w-[49%] h-[134px] bg-gray-700 items-center hover:bg-gray-500 transition-colors"
        >
          <span className="flex justify-center items-center h-full w-[17%] bg-green-700">
            <Image size={40} />
          </span>

          <div className="flex flex-col gap-2 w-[56%] justify-center ml-6">
            <span className="text-2xl font-bold">Wallpapers exclusivos</span>
            <span>Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</span>
          </div>

          <CaretRight className="text-blue-500 ml-auto mr-8" size={24} />
        </a>
      </div>

      <footer className="flex gap-6 items-end h-[54px] mt-20 mb-5 px-6 border-t border-gray-500">
        <LogoRocketseat />
        <div className="flex flex-1 text-gray-300 justify-between items-center mb-1">
          <p>Rocketseat - Todos os direitos reservados</p>
          <p>Políticas de privacidade</p>
        </div>
      </footer>
    </div>
  );
}
