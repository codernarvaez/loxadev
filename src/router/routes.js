import { Tags } from "pages/Tags";
import { Articles } from "pages/Articles";

export const dashboardRoutes = [
  { path: "/panel", name: "Panel", exact: true },
  {
    path: "/panel/etiquetas",
    name: "Etiquetas",
    component: Tags,
    exact: false,
  },
  {
    path: "/panel/articulos",
    name: "Artículos",
    component: Articles,
    exact: false,
  },
];
