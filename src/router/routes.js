import { Tags } from "pages/Tags";
import { Articles } from "pages/Articles";

export const dashboardRoutes = [
  {
    path: "etiquetas",
    name: "Etiquetas",
    component: Tags,
  },
  {
    path: "articulos",
    name: "Artículos",
    component: Articles,
  },
];
