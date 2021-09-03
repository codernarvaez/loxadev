import React from "react";
import { List, TagItem } from "components";

const tags = [
  {
    name: "Etiqueta",
    description:
      "Sint ea sint nulla ullamco culpa culpa aute exercitation ea. Consectetur ex Lorem Lorem aliquip minim.",
    status: true,
    createdAt: "21 de Abril de 2021, a las 12:56",
    updatedAt: "21 de Abril de 2021, a las 12:56",
  },
  {
    name: "Etiqueta",
    description:
      "Sint ea sint nulla ullamco culpa culpa aute exercitation ea. Consectetur ex Lorem Lorem aliquip minim.",
    status: true,
    createdAt: "21 de Abril de 2021, a las 12:56",
    updatedAt: "21 de Abril de 2021, a las 12:56",
  },
  {
    name: "Etiqueta",
    description:
      "Sint ea sint nulla ullamco culpa culpa aute exercitation ea. Consectetur ex Lorem Lorem aliquip minim.",
    status: false,
    createdAt: "21 de Abril de 2021, a las 12:56",
    updatedAt: "21 de Abril de 2021, a las 12:56",
  },
  {
    name: "Etiqueta",
    description:
      "Sint ea sint nulla ullamco culpa culpa aute exercitation ea. Consectetur ex Lorem Lorem aliquip minim.",
    status: true,
    createdAt: "21 de Abril de 2021, a las 12:56",
    updatedAt: "21 de Abril de 2021, a las 12:56",
  },
];

export const Tags = () => {
  return (
    <List>
      {tags.map((tag, key) => (
        <TagItem key={key} {...tag} />
      ))}
    </List>
  );
};
