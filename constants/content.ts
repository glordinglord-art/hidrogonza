import { Flame, Droplets, Fuel, Waves } from "lucide-react";
import { IMAGES } from "./images";

export const NAV_LINKS = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Reconocimientos", href: "/reconocimientos" },
  { name: "Aliados", href: "/aliados" },
] as const;

export const SERVICES = [
  {
    icon: Flame,
    title: "Redes contra incendio",
    description:
      "Gabinetes, rociadores, diseño, cálculo y montaje de equipos de presión según tipo de edificación.",
    href: "/servicios",
    image: IMAGES.services.incendio,
  },
  {
    icon: Fuel,
    title: "Gas natural y GLP",
    description:
      "Redes de media y baja presión, centros de medición y conexión de gasodomésticos. Código Nº 949.",
    href: "/servicios",
    image: IMAGES.services.gas,
  },
  {
    icon: Waves,
    title: "Redes de desagües",
    description:
      "Aguas negras, grises y pluviales, ventilaciones y drenaje para proyectos residenciales e industriales.",
    href: "/servicios",
    image: IMAGES.services.desagues,
  },
  {
    icon: Droplets,
    title: "Redes hidráulicas",
    description:
      "Agua potable, agua caliente centralizada y agua fría para edificaciones comerciales e industriales.",
    href: "/servicios",
    image: IMAGES.services.hidraulicas,
  },
] as const;

export const FEATURED_PROJECTS = [
  {
    name: "Centro Comercial Plaza Madero",
    client: "Optima Construcciones",
    location: "Chía",
    image: IMAGES.projects[0],
    span: "col-span-2 row-span-2",
  },
  {
    name: "Locales Comerciales Sienna",
    client: "Constructora Capital",
    location: "Zipaquirá",
    image: IMAGES.projects[1],
    span: "",
  },
  {
    name: "Abadía Boutique",
    client: "Total Urbe",
    location: "Anapoima",
    image: IMAGES.projects[2],
    span: "",
  },
  {
    name: "Reserva de Madelena",
    client: "Constructora Capital",
    location: "Bogotá",
    image: IMAGES.projects[0],
    span: "col-span-2",
  },
] as const;

export type Partner = {
  name: string;
  tagline?: string;
  logo?: string;
  /** Estilo del área del logo en la tarjeta */
  logoStyle?: "yellow" | "light" | "dark" | "orange" | "blue";
  /** Logo más grande en la tarjeta (p. ej. texto detallado en el PNG) */
  logoSize?: "large";
  badge?: string;
};

export const PARTNERS: Partner[] = [
  {
    name: "Maygas",
    tagline: "Maleable - Fusión",
    logo: "/partners/maygas.png",
    logoStyle: "yellow",
    badge: "Aliado estratégico en gas",
  },
  {
    name: "Codifer S.A.S",
    logo: "/partners/codifer.png",
    logoStyle: "light",
    badge: "Tuberías y conexiones",
  },
  {
    name: "Colmena",
    tagline: "Acero en evolución",
    logo: "/partners/colmena.png",
    logoStyle: "dark",
    badge: "Acero estructural",
  },
  {
    name: "Pavco Wavin",
    tagline: "Tuberías y soluciones hidráulicas",
    logo: "/partners/pavco.png",
    logoStyle: "light",
    badge: "PVC y sistemas Wavin",
  },
  {
    name: "Gerfor",
    tagline: "Tubería PVC",
    logo: "/partners/gerfor.png",
    logoStyle: "orange",
    badge: "Plomería y conducción",
  },
  {
    name: "Impofer",
    logo: "/partners/impofer.png",
    logoStyle: "light",
    badge: "Distribución industrial",
  },
  {
    name: "Nurueña",
    tagline: "S.A.S.",
    logo: "/partners/nuruena.png",
    logoStyle: "light",
    badge: "Suministros industriales",
  },
  {
    name: "FLP",
    logo: "/partners/flp.png",
    logoStyle: "light",
    badge: "Aliado comercial",
  },
  {
    name: "TCL",
    tagline: "Avanzando",
    logo: "/partners/tcl.png",
    logoStyle: "light",
    badge: "35 años de trayectoria",
  },
  {
    name: "Rocha Londoño",
    tagline: "Innovando · 1985 – 2025",
    logo: "/partners/rocha-londono.png",
    logoStyle: "dark",
    logoSize: "large",
    badge: "40 años de trayectoria",
  },
  {
    name: "Super Ego",
    logo: "/partners/super-ego.png",
    logoStyle: "light",
    badge: "Aliado comercial",
  },
  {
    name: "Flexilatina",
    tagline: "Ingeniería y Representaciones",
    logo: "/partners/flexilatina.png",
    logoStyle: "blue",
    logoSize: "large",
    badge: "Ingeniería industrial",
  },
];

const WHATSAPP_NUMBER = "573112212000";
const WHATSAPP_MESSAGE =
  "Hola, estoy interesado en los servicios de Hidrogonza S.A.S. ¿Podrían darme más información?";

export const CONTACT = {
  phone: "311 221 2000",
  whatsappMessage: WHATSAPP_MESSAGE,
  phoneHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  address: "Carrera 68 # 57C - 09 Sur",
  city: "Bogotá D.C., Colombia",
  emails: ["hidrogonza11@hotmail.com", "hidrogonza11@gmail.com"],
} as const;
