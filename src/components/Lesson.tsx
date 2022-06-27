import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
  isSelected: boolean;
}

export default function Lesson({ title, slug, availableAt, type, isSelected }: LessonProps) {
  const isReleased = isPast(availableAt);
  const firstLetterUpper = (str: string) => str.slice(0, 1).toUpperCase() + str.slice(1);

  const dateFormatted = firstLetterUpper(
    format(availableAt, "EEEE '•' dd 'de' MMMM '•' HH'h'mm", {
      locale: ptBR,
    }).replace("-feira", "")
  );

  return (
    <div className="relative">
      {isSelected && (
        <div className="w-[13.75px] h-[13.75px] bg-green-300 absolute top-1/2 -left-1.5 -translate-y-1/2 rotate-45" />
      )}
      <Link to={`/event/lesson/${slug}`} className="group">
        <span className="text-gray-300">{dateFormatted}</span>

        <div
          className={`block rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors ${
            isSelected ? "bg-green-300 border-none" : "bg-transparent"
          }`}
        >
          <header className="flex items-center justify-between">
            <span
              className={`text-sm font-medium flex items-center gap-2
            ${isSelected ? "text-white" : isReleased ? "text-blue-500" : "text-orange-500"}`}
            >
              {isReleased ? <CheckCircle size={20} /> : <Lock size={20} />}
              {isReleased ? "Conteúdo Liberado" : "Em breve"}
            </span>
            <span
              className={`text-xs font-bol border border-green-300 py-0.5 px-2 rounded ${
                isSelected
                  ? "text-white border-white"
                  : type === "live"
                  ? "text-green-300"
                  : "text-white"
              }`}
            >
              {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
            </span>
          </header>
          <strong className="text-gray-200 mt-5 block">{title}</strong>
        </div>
      </Link>
    </div>
  );
}
