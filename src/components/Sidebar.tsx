import { gql, useQuery } from "@apollo/client";
import React from "react";
import Lesson from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      lessonType
      availableAt
      title
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    availableAt: string;
    id: string;
    lessonType: "live" | "class";
    slug: string;
    title: string;
  }[];
}

export default function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600 gap-">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(({ id, lessonType, slug, availableAt, title }, index) => {
          return (
            <Lesson
              key={id}
              title={title}
              slug={slug}
              availableAt={new Date(availableAt)}
              type={lessonType}
              isSelected={index === 5}
            />
          );
        })}
      </div>
    </aside>
  );
}
