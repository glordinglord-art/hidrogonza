export type RecognitionOrientation = "vertical" | "horizontal";

export type Recognition = {
  id: string;
  year: string;
  orientation: RecognitionOrientation;
  title: string;
  description: string;
  image: string;
  alt: string;
  /** Grados para fotos tomadas en vertical que muestran un documento apaisado */
  imageRotate?: number;
};

export const RECOGNITIONS: Recognition[] = [
  {
    id: "mujeres-capital-certificado-2025",
    year: "2025-2",
    orientation: "horizontal",
    title: "Mujeres que construyen Capital",
    description:
      "Reconocimiento de Constructora Capital Bogotá S.A.S. por el esfuerzo, liderazgo y aporte a entornos más equitativos y sostenibles, generando oportunidades de empleo para mujeres en el segundo semestre de 2025.",
    image: "/recognitions/reconocimiento-mujeres-capital-certificado-2025.jpg",
    alt: "Certificado Mujeres que construyen Capital — Hidrogonza S.A.S.",
  },
  {
    id: "contratista-ganador-2025",
    year: "2025",
    orientation: "vertical",
    title: "Contratista ganador",
    description:
      "Premio del programa Mujeres que construyen Capital, otorgado por Constructora Capital a Hidrogonza S.A.S. como contratista ganador. Periodo 2025-2.",
    image: "/recognitions/reconocimiento-mujeres-capital-2025.jpg",
    alt: "Trofeo Contratista Ganador — Programa Mujeres que construyen Capital 2025-2",
  },
  {
    id: "mencion-honor-2024",
    year: "2024",
    orientation: "horizontal",
    title: "Mención de honor",
    description:
      "Otorgada por Constructora Capital Bogotá SAS a Hidrogonza S.A.S. por méritos, desempeño y compromiso laboral en el proyecto Porto Hayuelos 2 (trimestre sept. 2023 – feb. 2024).",
    image: "/recognitions/reconocimiento-2024.jpg",
    alt: "Mención de honor Constructora Capital — Porto Hayuelos 2, 2024",
  },
  {
    id: "cumplimiento-gestion-2022",
    year: "2022",
    orientation: "vertical",
    title: "Cumplimiento del sistema de gestión",
    description:
      "Reconocimiento otorgado por Constructora Capital Bogotá SAS al cumplimiento del sistema de Gestión. Año 2022.",
    image: "/recognitions/reconocimiento-2022.png",
    alt: "Placa de reconocimiento Constructora Capital Bogotá SAS 2022 — Hidrogonza S.A.S.",
  },
  {
    id: "mencion-honor-madelena-2020",
    year: "2020",
    orientation: "horizontal",
    title: "Mención de honor — Reserva de Madelena",
    description:
      "Otorgada por Constructora Capital al contratista Hidrogonza S.A.S. por méritos en aseo y orden, calidad, compromiso, seguridad y programación (nov. 2019 – ene. 2020), proyecto Reserva de Madelena Club Residencial.",
    image: "/recognitions/reconocimiento-mencion-madelena-2020.jpg",
    alt: "Mención de honor Reserva de Madelena — Constructora Capital 2020",
  },
];

export const CERTIFICATES = [
  {
    title: "Tecnólogo en Instalaciones Hidráulicas Sanitarias y de Gas",
    subtitle: "Formación oficial SENA",
    description:
      "Título expedido por el Servicio Nacional de Aprendizaje, Centro de Tecnologías para la Construcción y la Madera — respaldo técnico de nuestra especialización en obra.",
    image: "/certificates/sena-tecnologo-hidraulicas-2016.png",
    alt: "Certificado SENA — Tecnólogo en Instalaciones Hidráulicas Sanitarias y de Gas",
    highlights: [
      { label: "Institución", value: "SENA — Regional Distrito Capital" },
      { label: "Lugar y fecha", value: "Bogotá, enero 2016" },
      { label: "Especialidad", value: "Redes hidráulicas, sanitarias y gas" },
    ],
  },
] as const;
