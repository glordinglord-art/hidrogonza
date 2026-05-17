import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { Award, Building2, MapPin } from "lucide-react";

type ProjectsSectionProps = { embedded?: boolean };

export function ProjectsSection({ embedded }: ProjectsSectionProps) {
  const projects = [
    {
      name: "Centro Comercial Plaza Madero",
      client: "Optima Construcciones",
      location: "Chía",
      image: IMAGES.projects[0],
    },
    {
      name: "Locales Comerciales Sienna",
      client: "Constructora Capital",
      location: "Zipaquirá",
      image: IMAGES.projects[1],
    },
    {
      name: "Abadía Boutique",
      client: "Total Urbe",
      location: "Anapoima",
      image: IMAGES.projects[2],
    },
    {
      name: "Conjunto Residencial Reserva de Madelena",
      client: "Constructora Capital",
      location: "Bogotá",
      image: IMAGES.projects[0],
    },
    {
      name: "Conjunto Residencial Carrara",
      client: "Constructora Capital",
      location: "Zipaquirá",
      image: IMAGES.projects[1],
    },
  ];

  const recognitions = [
    {
      title: "Reconocimiento Constructora Capital",
      description: "Al cumplimiento del sistema de Gestión Año 2022",
      year: "2022",
    },
    {
      title: "Mención de Honor Constructora Capital",
      description:
        "Por el cumplimiento de nuestras actividades en el proyecto Reserva de Madelena Año 2020",
      year: "2020",
    },
  ];

  return (
    <section id="proyectos" className={embedded ? "bg-white" : "bg-white py-24"}>
      <div className={embedded ? "" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        {!embedded && (
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">Proyectos realizados</h2>
            <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-primary" />
          </div>
        )}

        <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900">{project.name}</h3>
                <div className="mb-2 flex items-center text-slate-600">
                  <Building2 className="mr-2 h-4 w-4 text-primary" />
                  <span>{project.client}</span>
                </div>
                <p className="flex items-center gap-1 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 shrink-0 text-primary" />
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">Reconocimientos</h2>
          <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-primary" />
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {recognitions.map((rec, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="shrink-0 rounded-full bg-amber-50 p-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
                  {rec.year}
                </span>
                <h3 className="mb-2 text-xl font-bold text-slate-900">{rec.title}</h3>
                <p className="text-slate-600">{rec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
