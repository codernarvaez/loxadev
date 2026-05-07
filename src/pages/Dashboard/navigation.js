import { NavItem } from "components";
import * as Gr from "react-icons/gr";
import * as Fa from "react-icons/fa";

export const navigation = [
  {
    component: NavItem, // Puede ser Title, NavItem, NavGroup
    name: "Artículos",
    to: "/panel/articulos",
    icon: Gr.GrArticle,
    badge: {
      color: "success",
      text: "NUEVO",
    },
  },
  {
    component: NavItem,
    name: "Etiquetas",
    to: "/panel/etiquetas",
    icon: Fa.FaTags,
    badge: {
      color: "info",
      text: "NUEVO",
    },
  },
];
