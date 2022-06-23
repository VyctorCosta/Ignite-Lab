import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export default function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isReleased = isPast(availableAt);
  const firstLetterUpper = (str: string) => str.slice(0, 1).toUpperCase() + str.slice(1);

  const dateFormatted = firstLetterUpper(
    format(availableAt, "EEEE '•' dd 'de' MMMM '•' HH'h'MM", {
      locale: ptBR,
    }).replace("-feira", "")
  );

  return (
    <div>
      <span className="text-gray-300">{dateFormatted}</span>

      <a href="#" className="block rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          <span
            className={`text-sm font-medium flex items-center gap-2
            ${isReleased ? "text-blue-500" : "text-orange-500"}`}
          >
            {isReleased ? <CheckCircle size={20} /> : <Lock size={20} />}
            {isReleased ? "Conteúdo Liberado" : "Em breve"}
          </span>
          <span
            className={`text-xs font-bol border border-green-300 py-0.5 px-2 rounded ${
              type === "live" ? "text-green-300" : "text-white"
            }`}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </a>
    </div>
  );
}
