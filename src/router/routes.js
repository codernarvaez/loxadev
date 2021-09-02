import { Tags } from "pages/Tags";
import { Articles } from "pages/Articles";

export const dashboardRoutes = [
  { path: "/panel/etiquetas", name: "Etiquetas", component: Tags, exact: true },
  {
    path: "/panel/articulos",
    name: "Artículos",
    component: Articles,
    exact: true,
  },
];
