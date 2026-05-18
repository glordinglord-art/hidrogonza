export type ProjectMaterial = {
  label: string;
  partner?: string;
  partnerLogo?: string;
  /** Estilo del recuadro del logo (como en Aliados) */
  partnerLogoStyle?: "yellow" | "light" | "blue" | "dark";
};

export type Project = {
  id: string;
  name: string;
  client: string;
  clientLogo?: string;
  /** Logo cuadrado (p. ej. Total Urbe) */
  clientLogoSquare?: boolean;
  location: string;
  image: string;
  category: "gas" | "incendio" | "hidraulica" | "desagues" | "mixto";
  featured?: boolean;
  /** Clases extra para el bento del inicio */
  bentoSpan?: string;
  tagline: string;
  summary: string;
  description: string;
  scope: string[];
  materials?: ProjectMaterial[];
};

export const PROJECTS: Project[] = [
  {
    id: "plaza-madero",
    name: "Centro Comercial Plaza Madero",
    client: "Optima Construcciones",
    clientLogo: "/clients/optima-construcciones.png",
    location: "Chía, Cundinamarca",
    image: "/projects/plaza-madero.png",
    category: "gas",
    featured: true,
    bentoSpan: "col-span-2 row-span-2",
    tagline: "Red de gas para todos los locales comerciales",
    summary:
      "Instalación integral de redes de gas natural en tubería PEALPE por termofusión, abasteciendo cada local del centro comercial.",
    description:
      "En Plaza Madero ejecutamos el suministro e instalación de las redes de gas natural para la totalidad de los locales comerciales del conjunto. El sistema fue montado en tubería PEALPE mediante el Sistema de termofusión, con materiales de nuestro aliado Maygas, garantizando pruebas de hermeticidad, trazabilidad en cada unión y cumplimiento de la normatividad vigente para redes en edificaciones comerciales.",
    scope: [
      "Redes de gas natural por local comercial",
      "Tubería PEALPE — termofusión",
      "Derivaciones y acometidas a locales",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Tubería PEALPE — termofusión",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
    ],
  },
  {
    id: "sienna",
    name: "Locales Comerciales Sienna — Zipaquirá",
    client: "Constructora Capital",
    clientLogo: "/clients/constructora-capital.png",
    location: "Zipaquirá, Cundinamarca",
    image: "/projects/sienna-zipaquira.png",
    category: "gas",
    tagline: "Redes internas de gas natural para locales comerciales",
    summary:
      "Instalación de redes internas de gas natural en tubería PEALPE por termofusión para los locales comerciales del proyecto Sienna.",
    description:
      "En el proyecto Sienna, desarrollado por Constructora Capital en Zipaquirá, ejecutamos la instalación de las redes internas de gas natural para los locales comerciales del conjunto. El sistema fue montado en tubería PEALPE mediante el Sistema de termofusión, con materiales de nuestro aliado Maygas, garantizando pruebas de hermeticidad, trazabilidad en cada unión y cumplimiento de la normatividad vigente.",
    scope: [
      "Redes internas de gas natural por local comercial",
      "Tubería PEALPE — termofusión",
      "Derivaciones y acometidas a locales",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Tubería PEALPE — termofusión",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
    ],
  },
  {
    id: "abadia-boutique",
    name: "Abadía Boutique — Anapoima",
    client: "Total Urbe",
    clientLogo: "/clients/total-urbe.png",
    location: "Anapoima, Cundinamarca",
    image: "/projects/abadia-boutique.png",
    category: "mixto",
    tagline: "Gas, hidrosanitarias y redes contra incendio",
    summary:
      "Redes de gas en PEALPE (Maygas), instalación hidrosanitaria con Pavco Wavin y redes contra incendio con materiales Colmena.",
    description:
      "En Abadía Boutique, Anapoima, desarrollado por Total Urbe, ejecutamos la instalación de las redes internas de gas natural en tubería PEALPE mediante el Sistema de termofusión con materiales Maygas, la instalación completa de las redes hidrosanitarias con nuestro aliado Pavco Wavin, y la instalación de las redes contra incendio construidas con materiales de la marca Colmena. El trabajo incluye pruebas de hermeticidad en gas, trazabilidad en uniones, montaje de la red de protección contra incendio y cumplimiento de normatividad para un proyecto de uso residencial privado.",
    scope: [
      "Redes internas de gas natural",
      "Tubería PEALPE — termofusión",
      "Redes hidrosanitarias completas",
      "Redes contra incendio",
      "Agua potable y puntos de consumo",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Gas natural — tubería PEALPE termofusión",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
      {
        label: "Redes hidrosanitarias",
        partner: "Pavco Wavin",
        partnerLogo: "/partners/pavco.png",
        partnerLogoStyle: "light",
      },
      {
        label: "Redes contra incendio",
        partner: "Colmena",
        partnerLogo: "/partners/colmena.png",
        partnerLogoStyle: "dark",
      },
    ],
  },
  {
    id: "reserva-madelena",
    name: "Conjunto Residencial Reserva de Madelena",
    client: "Constructora Capital",
    clientLogo: "/clients/constructora-capital.png",
    location: "Bogotá D.C.",
    image: "/projects/reserva-madelena.png",
    category: "gas",
    bentoSpan: "col-span-2",
    tagline: "Redes internas de gas en media y baja presión",
    summary:
      "Construcción de redes internas de gas natural en media presión (acero galvanizado Colmena) y baja presión (PEALPE — Sistema de termofusión Maygas).",
    description:
      "En el Conjunto Residencial Reserva de Madelena, desarrollado por Constructora Capital en Bogotá, ejecutamos la construcción de las redes internas de gas natural en media presión y baja presión. Las redes de media presión fueron montadas en acero galvanizado de la marca Colmena; las de baja presión, en tubería PEALPE mediante el Sistema de termofusión con materiales de nuestro aliado Maygas. El trabajo incluye pruebas de hermeticidad, trazabilidad en uniones y cumplimiento de la normatividad vigente para redes en edificaciones residenciales.",
    scope: [
      "Redes internas de gas en media presión",
      "Redes internas de gas en baja presión",
      "Acero galvanizado — media presión",
      "Tubería PEALPE — Sistema de termofusión",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Media presión — acero galvanizado",
        partner: "Colmena",
        partnerLogo: "/partners/colmena.png",
        partnerLogoStyle: "dark",
      },
      {
        label: "Baja presión — tubería PEALPE",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
    ],
  },
  {
    id: "porto-hayuelos",
    name: "Porto Hayuelos 1 y 2",
    client: "Constructora Capital",
    clientLogo: "/clients/constructora-capital.png",
    location: "Bogotá D.C.",
    image: "/projects/porto-hayuelos.png",
    category: "gas",
    tagline: "100 % de las redes internas de gas en PEALPE",
    summary:
      "Instalación integral de redes internas de gas en media y baja presión en tubería PEALPE mediante el Sistema de termofusión (Maygas).",
    description:
      "En Porto Hayuelos 1 y Porto Hayuelos 2, Bogotá, desarrollado por Constructora Capital, ejecutamos el 100 % de las instalaciones de las redes internas de gas natural en tubería PEALPE mediante el Sistema de termofusión con materiales de nuestro aliado Maygas. El alcance incluye las redes de media presión y baja presión en el mismo material y del mismo proveedor, con pruebas de hermeticidad, trazabilidad en cada unión y cumplimiento de la normatividad vigente para edificaciones residenciales.",
    scope: [
      "100 % redes internas de gas natural",
      "Redes en media presión — PEALPE",
      "Redes en baja presión — PEALPE",
      "Sistema de termofusión",
      "Derivaciones y acometidas",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Media y baja presión — tubería PEALPE",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
    ],
  },
  {
    id: "acacia-los-maderos",
    name: "Acacia Los Maderos",
    client: "Constructora Capital",
    clientLogo: "/clients/constructora-capital.png",
    location: "Tocancipá, Cundinamarca",
    image: "/projects/acacia-los-maderos.png",
    category: "mixto",
    tagline: "Redes internas de gas e instalaciones hidrosanitarias",
    summary:
      "Construcción de redes internas de gas en PEALPE (Sistema de termofusión Maygas) e instalación integral de redes hidrosanitarias con materiales Pavco Wavin.",
    description:
      "En el proyecto Acacia Los Maderos, desarrollado por Constructora Capital en Tocancipá, ejecutamos la construcción de las redes internas de gas natural en tubería PEALPE mediante el Sistema de termofusión con materiales de la marca Maygas, y la construcción de las redes hidrosanitarias con materiales de la marca Pavco Wavin. El trabajo incluye pruebas de hermeticidad en gas, trazabilidad en uniones y cumplimiento de normatividad para un conjunto residencial.",
    scope: [
      "Redes internas de gas natural",
      "Tubería PEALPE — Sistema de termofusión",
      "Redes hidrosanitarias completas",
      "Agua potable y puntos de consumo",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Gas natural — tubería PEALPE",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
      {
        label: "Redes hidrosanitarias",
        partner: "Pavco Wavin",
        partnerLogo: "/partners/pavco.png",
        partnerLogoStyle: "light",
      },
    ],
  },
  {
    id: "alamo-tocancipa",
    name: "Álamo Tocancipá",
    client: "Constructora Capital",
    clientLogo: "/clients/constructora-capital.png",
    location: "Tocancipá, Cundinamarca",
    image: "/projects/alamo-tocancipa.png",
    category: "mixto",
    tagline: "Redes internas de gas e instalaciones hidrosanitarias",
    summary:
      "Construcción de redes internas de gas en PEALPE (Sistema de termofusión Maygas) e instalación integral de redes hidrosanitarias con materiales Pavco Wavin.",
    description:
      "En el proyecto Álamo Tocancipá, desarrollado por Constructora Capital en Tocancipá, ejecutamos la construcción de las redes internas de gas natural en tubería PEALPE mediante el Sistema de termofusión con materiales de nuestro aliado Maygas, y la construcción de las redes hidrosanitarias con materiales de nuestro aliado Pavco Wavin. El trabajo incluye pruebas de hermeticidad en gas, trazabilidad en uniones y cumplimiento de normatividad para un conjunto residencial.",
    scope: [
      "Redes internas de gas natural",
      "Tubería PEALPE — Sistema de termofusión",
      "Redes hidrosanitarias completas",
      "Agua potable y puntos de consumo",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Gas natural — tubería PEALPE",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
      {
        label: "Redes hidrosanitarias",
        partner: "Pavco Wavin",
        partnerLogo: "/partners/pavco.png",
        partnerLogoStyle: "light",
      },
    ],
  },
  {
    id: "teka-tocancipa",
    name: "Teka Tocancipá",
    client: "Constructora Capital",
    clientLogo: "/clients/constructora-capital.png",
    location: "Tocancipá, Cundinamarca",
    image: "/projects/teka-tocancipa.png",
    category: "mixto",
    tagline: "Redes internas de gas e instalaciones hidrosanitarias",
    summary:
      "Construcción de redes internas de gas en PEALPE (Sistema de termofusión Maygas) e instalación integral de redes hidrosanitarias con materiales Pavco Wavin.",
    description:
      "En el proyecto Teka Tocancipá, desarrollado por Constructora Capital en Tocancipá, ejecutamos la construcción de las redes internas de gas natural en tubería PEALPE mediante el Sistema de termofusión con materiales de nuestro aliado Maygas, y la construcción de las redes hidrosanitarias con materiales de nuestro aliado Pavco Wavin. El trabajo incluye pruebas de hermeticidad en gas, trazabilidad en uniones y cumplimiento de normatividad para un conjunto residencial.",
    scope: [
      "Redes internas de gas natural",
      "Tubería PEALPE — Sistema de termofusión",
      "Redes hidrosanitarias completas",
      "Agua potable y puntos de consumo",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Gas natural — tubería PEALPE",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
      {
        label: "Redes hidrosanitarias",
        partner: "Pavco Wavin",
        partnerLogo: "/partners/pavco.png",
        partnerLogoStyle: "light",
      },
    ],
  },
  {
    id: "vivopark-bogota",
    name: "Vivopark Bogotá",
    client: "Constructora Capital",
    clientLogo: "/clients/constructora-capital.png",
    location: "Bogotá D.C.",
    image: "/projects/vivopark-bogota.png",
    category: "mixto",
    tagline: "Redes internas de gas e instalaciones hidrosanitarias",
    summary:
      "Construcción de redes internas de gas en PEALPE (Sistema de termofusión Maygas) e instalación integral de redes hidrosanitarias con materiales Pavco Wavin.",
    description:
      "En el proyecto Vivopark Bogotá, desarrollado por Constructora Capital en Bogotá, ejecutamos la construcción de las redes internas de gas natural en tubería PEALPE mediante el Sistema de termofusión con materiales de nuestro aliado Maygas, y la construcción de las redes hidrosanitarias con materiales de nuestro aliado Pavco Wavin. El trabajo incluye pruebas de hermeticidad en gas, trazabilidad en uniones y cumplimiento de normatividad para un conjunto residencial.",
    scope: [
      "Redes internas de gas natural",
      "Tubería PEALPE — Sistema de termofusión",
      "Redes hidrosanitarias completas",
      "Agua potable y puntos de consumo",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Gas natural — tubería PEALPE",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
      {
        label: "Redes hidrosanitarias",
        partner: "Pavco Wavin",
        partnerLogo: "/partners/pavco.png",
        partnerLogoStyle: "light",
      },
    ],
  },
  {
    id: "centriko",
    name: "Centriko",
    client: "Constructora Capital",
    clientLogo: "/clients/constructora-capital.png",
    location: "Bogotá D.C.",
    image: "/projects/centriko.png",
    category: "mixto",
    tagline: "Gas en media y baja presión e instalaciones hidrosanitarias",
    summary:
      "Redes de gas en media presión (Colmena) y baja presión (PEALPE — Maygas), más instalación integral de redes hidrosanitarias con Pavco Wavin.",
    description:
      "En el proyecto Centriko, desarrollado por Constructora Capital en Bogotá, ejecutamos la construcción de las redes de gas natural en media presión y baja presión, y la construcción de las redes hidrosanitarias. Las redes de media presión fueron montadas en tuberías de acero galvanizado de nuestro aliado Colmena; las de baja presión, en tubería PEALPE mediante el Sistema de termofusión con materiales de nuestro aliado Maygas; las hidrosanitarias, con materiales de nuestro aliado Pavco Wavin. El trabajo incluye pruebas de hermeticidad en gas, trazabilidad en uniones y cumplimiento de la normatividad vigente para edificaciones residenciales.",
    scope: [
      "Redes de gas en media presión",
      "Redes de gas en baja presión",
      "Acero galvanizado — media presión",
      "Tubería PEALPE — Sistema de termofusión",
      "Redes hidrosanitarias completas",
      "Agua potable y puntos de consumo",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Media presión — acero galvanizado",
        partner: "Colmena",
        partnerLogo: "/partners/colmena.png",
        partnerLogoStyle: "dark",
      },
      {
        label: "Baja presión — tubería PEALPE",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
      {
        label: "Redes hidrosanitarias",
        partner: "Pavco Wavin",
        partnerLogo: "/partners/pavco.png",
        partnerLogoStyle: "light",
      },
    ],
  },
  {
    id: "squadra",
    name: "Squadra",
    client: "Constructora Capital",
    clientLogo: "/clients/constructora-capital.png",
    location: "Bogotá D.C.",
    image: "/projects/squadra.png",
    category: "mixto",
    tagline: "Gas en media y baja presión e instalaciones hidrosanitarias",
    summary:
      "Redes de gas en media presión (Colmena) y baja presión (PEALPE — Maygas), más instalación integral de redes hidrosanitarias con Pavco Wavin.",
    description:
      "En el proyecto Squadra, desarrollado por Constructora Capital en Bogotá, ejecutamos la construcción de las redes de gas natural en media presión y baja presión, y la construcción de las redes hidrosanitarias. Las redes de media presión fueron montadas en tuberías de acero galvanizado de nuestro aliado Colmena; las de baja presión, en tubería PEALPE mediante el Sistema de termofusión con materiales de nuestro aliado Maygas; las hidrosanitarias, con materiales de nuestro aliado Pavco Wavin. El trabajo incluye pruebas de hermeticidad en gas, trazabilidad en uniones y cumplimiento de la normatividad vigente para un conjunto residencial.",
    scope: [
      "Redes de gas en media presión",
      "Redes de gas en baja presión",
      "Acero galvanizado — media presión",
      "Tubería PEALPE — Sistema de termofusión",
      "Redes hidrosanitarias completas",
      "Agua potable y puntos de consumo",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Media presión — acero galvanizado",
        partner: "Colmena",
        partnerLogo: "/partners/colmena.png",
        partnerLogoStyle: "dark",
      },
      {
        label: "Baja presión — tubería PEALPE",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
      {
        label: "Redes hidrosanitarias",
        partner: "Pavco Wavin",
        partnerLogo: "/partners/pavco.png",
        partnerLogoStyle: "light",
      },
    ],
  },
  {
    id: "carrara",
    name: "Conjunto Residencial Carrara",
    client: "Constructora Capital",
    clientLogo: "/clients/constructora-capital.png",
    location: "Zipaquirá, Cundinamarca",
    image: "/projects/carrara.png",
    category: "gas",
    tagline: "Redes de gas en media y baja presión",
    summary:
      "Construcción de redes de gas natural en media presión (acero galvanizado Colmena) y baja presión (PEALPE — Sistema de termofusión Maygas).",
    description:
      "En el proyecto Conjunto Residencial Carrara, desarrollado por Constructora Capital en Zipaquirá, ejecutamos la construcción de las redes de gas natural en media presión y baja presión. Las redes de media presión fueron montadas en tuberías de acero galvanizado de nuestro aliado Colmena; las de baja presión, en tubería PEALPE mediante el Sistema de termofusión con materiales de nuestro aliado Maygas. El trabajo incluye pruebas de hermeticidad, trazabilidad en uniones y cumplimiento de la normatividad vigente para un conjunto residencial.",
    scope: [
      "Redes de gas en media presión",
      "Redes de gas en baja presión",
      "Acero galvanizado — media presión",
      "Tubería PEALPE — Sistema de termofusión",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Media presión — acero galvanizado",
        partner: "Colmena",
        partnerLogo: "/partners/colmena.png",
        partnerLogoStyle: "dark",
      },
      {
        label: "Baja presión — tubería PEALPE",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
    ],
  },
  {
    id: "acqua-chia",
    name: "Acqua Residencial — Chía",
    client: "Constructora Capital",
    clientLogo: "/clients/constructora-capital.png",
    location: "Chía, Cundinamarca",
    image: "/projects/acqua-chia.png",
    category: "mixto",
    tagline: "Gas en media y baja presión e instalaciones hidrosanitarias",
    summary:
      "Redes de gas en media presión (Colmena) y baja presión (PEALPE — Maygas), más construcción de redes hidrosanitarias con materiales Pavco Wavin.",
    description:
      "En el proyecto Acqua Residencial, desarrollado por Constructora Capital en Chía, ejecutamos la construcción de las redes hidrosanitarias y las redes de gas natural en media presión y baja presión. Las redes hidrosanitarias se realizaron con materiales distribuidos por nuestro aliado Pavco Wavin; las de gas en media presión, en tubería de acero galvanizado de nuestro aliado Colmena; y las de baja presión, en tubería PEALPE mediante el Sistema de termofusión con materiales de nuestro aliado Maygas. El trabajo incluye pruebas de hermeticidad en gas, trazabilidad en uniones y cumplimiento de la normatividad vigente para un conjunto residencial.",
    scope: [
      "Redes hidrosanitarias completas",
      "Redes de gas en media presión",
      "Redes de gas en baja presión",
      "Acero galvanizado — media presión",
      "Tubería PEALPE — Sistema de termofusión",
      "Agua potable y puntos de consumo",
      "Pruebas de hermeticidad y puesta en servicio",
    ],
    materials: [
      {
        label: "Redes hidrosanitarias",
        partner: "Pavco Wavin",
        partnerLogo: "/partners/pavco.png",
        partnerLogoStyle: "light",
      },
      {
        label: "Media presión — acero galvanizado",
        partner: "Colmena",
        partnerLogo: "/partners/colmena.png",
        partnerLogoStyle: "dark",
      },
      {
        label: "Baja presión — tubería PEALPE",
        partner: "Maygas",
        partnerLogo: "/partners/maygas.png",
        partnerLogoStyle: "yellow",
      },
    ],
  },
];

export const FEATURED_PROJECT = PROJECTS.find((p) => p.featured) ?? PROJECTS[0];

export const BENTO_PROJECTS = PROJECTS.filter((p) =>
  ["plaza-madero", "sienna", "abadia-boutique", "reserva-madelena"].includes(p.id)
);
