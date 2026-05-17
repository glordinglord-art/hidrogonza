import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/constants/images";
import { Building2, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <section id="proyectos" className={embedded ? "bg-white" : "bg-white py-24"}>
      <div className={embedded ? "" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        {!embedded && (
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">Proyectos realizados</h2>
            <div className="mx-auto mb-8 h-1 w-24 rounded-full bg-primary" />
          </div>
        )}

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/reconocimientos">
              Ver reconocimientos
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
