import * as Io from "react-icons/io5";
import ProductImg from "assets/images/app_1.jpg";

export const products = [
  {
    image: ProductImg,
    title: "Chasky Web",
    text: "Servicio de planificación y lógistica de entregas y distribución dentro y fuera de la ciudad enfocado a empresas",
    buttonProps: {
      children: "Conseguir Ahora",
      icon: Io.IoLogoGooglePlaystore,
      // to: "#",
    },
  },
  {
    image: ProductImg,
    title: "Chasky Móvil",
    text: "Servicio de mandados y encomiendas dentro y fuera de la ciudad con enfoque a usuarios con pedidos de entregas pequeños",
    buttonProps: {
      children: "Conseguir Ahora",
      icon: Io.IoLogoGooglePlaystore,
    },
  },
  {
    image: ProductImg,
    title: "Chasky Móvil - Ayuda social",
    text: "Ayuda social para personas que necesitan transporte de medicina o de productos de primera necesidad. Porqué nos preocupa tu bienestar",
    buttonProps: {
      children: "Conseguir Ahora",
      icon: Io.IoLogoGooglePlaystore,
    },
  },
  {
    image: ProductImg,
    title: "Chasky Transportista",
    text: "Trabaja con nosotros, incluso si no tienes vehículo. El servicio de transportistas es abierto y flexible",
    buttonProps: {
      children: "Conseguir Ahora",
      icon: Io.IoLogoGooglePlaystore,
    },
  },
];
