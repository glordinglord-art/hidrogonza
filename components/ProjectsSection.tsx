import Image from "next/image";
import { IMAGES } from "@/constants/images";
import { Award, Building2 } from "lucide-react";

export function ProjectsSection() {
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
      description: "Por el cumplimiento de nuestras actividades en el proyecto Reserva de Madelena Año 2020",
      year: "2020",
    },
  ];

  return (
    <section id="proyectos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Proyectos */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
            Proyectos Realizados
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{project.name}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Building2 className="w-4 h-4 mr-2 text-primary" />
                  <span>{project.client}</span>
                </div>
                <p className="text-gray-500 text-sm">📍 {project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reconocimientos */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
            Reconocimientos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {recognitions.map((rec, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-6 hover:shadow-md transition-shadow">
              <div className="p-4 bg-yellow-50 rounded-full flex-shrink-0">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-3">
                  {rec.year}
                </span>
                <h3 className="text-xl font-bold text-secondary mb-2">{rec.title}</h3>
                <p className="text-gray-600">{rec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
