import React from "react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classnames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export default function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const params = useParams<{ slug: string }>();
  const isSelected = slug === params.slug;
  const isReleased = isPast(availableAt);
  const firstLetterUpper = (str: string) => str.slice(0, 1).toUpperCase() + str.slice(1);

  const dateFormatted = firstLetterUpper(
    format(availableAt, "EEEE '•' dd 'de' MMMM '•' HH'h'mm", {
      locale: ptBR,
    }).replace("-feira", "")
  );

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{dateFormatted}</span>

      <div
        className={classnames(
          "relative block rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors",
          {
            "bg-green-300 border-none": isSelected,
            "bg-transparent": !isSelected,
          }
        )}
      >
        <header className="flex items-center justify-between">
          <span
            className={classnames("text-sm font-medium flex items-center gap-2", {
              "text-white": isSelected,
              "text-blue-500": !isSelected && isReleased,
              "text-orange-500": !isSelected && !isReleased,
            })}
          >
            {isReleased ? <CheckCircle size={20} /> : <Lock size={20} />}
            {isReleased ? "Conteúdo Liberado" : "Em breve"}
          </span>
          <span
            className={classnames("text-xs font-bol border border-green-300 py-0.5 px-2 rounded", {
              "text-white border-white": isSelected,
              "text-green-300": !isSelected && type === "live",
              "text-white": !isSelected && type === "class",
            })}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{title}</strong>
        {isSelected && (
          <div className="w-[13.75px] h-[13.75px] bg-green-300 absolute top-1/2 -left-1.5 -translate-y-1/2 rotate-45" />
        )}
      </div>
    </Link>
  );
}
