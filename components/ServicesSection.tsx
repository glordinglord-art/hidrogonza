"use client";

import { TextParallaxContent } from "./ui/text-parallax-content-scroll";
import { IMAGES } from "@/constants/images";
import { CheckCircle2 } from "lucide-react";

type ServicesSectionProps = { embedded?: boolean };

export function ServicesSection({ embedded }: ServicesSectionProps) {
  return (
    <section id="servicios" className="bg-white">
      {!embedded && (
        <div className="py-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl">Nuestros servicios</h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-primary" />
        </div>
      )}

      <TextParallaxContent
        imgUrl={IMAGES.services.incendio}
        subheading="Seguridad y Protección"
        heading="Redes Contra Incendio"
      >
        <ServiceContent
          title="Sistema de Redes Contra Incendio"
          description="Redes de protección contra incendio con gabinetes y/o rociadores según el tipo de edificación y el riesgo de la misma. Diseño, cálculo y montaje de los equipos de presión requeridos para su buen funcionamiento."
          features={[
            "Instalación de gabinetes y rociadores",
            "Diseño y cálculo de redes",
            "Montaje de equipos de presión",
            "Cumplimiento de normatividad vigente",
          ]}
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={IMAGES.services.gas}
        subheading="Energía Segura"
        heading="Redes de Gas Natural y GLP"
      >
        <ServiceContent
          title="Suministro de Gas Natural y GLP"
          description="Redes de media presión, redes de baja presión, instalación de centros de medición, conexión de gasodomésticos, cálculo de ventilaciones para recintos hacia el exterior y ductos para desfogue para gases de combustión hacia el exterior de la edificación. Código N° 949 Registro SIC 900974796."
          features={[
            "Redes de media y baja presión",
            "Instalación de centros de medición",
            "Conexión de gasodomésticos",
            "Cálculo de ventilaciones y ductos de desfogue",
          ]}
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={IMAGES.services.desagues}
        subheading="Saneamiento"
        heading="Redes de Desagües"
      >
        <ServiceContent
          title="Sistemas de Desagüe"
          description="Instalación de sistemas para redes de desagüe de aguas negras, aguas grises y pluviales, ventilaciones reventilaciones, sistemas de drenaje para edificaciones residenciales, comerciales e industriales."
          features={[
            "Aguas negras, grises y pluviales",
            "Ventilaciones y reventilaciones",
            "Sistemas de drenaje completos",
            "Atención a sector residencial, comercial e industrial",
          ]}
        />
      </TextParallaxContent>

      <TextParallaxContent
        imgUrl={IMAGES.services.hidraulicas}
        subheading="Agua Potable"
        heading="Redes Hidráulicas"
      >
        <ServiceContent
          title="Sistemas de Redes Hidráulicas"
          description="Instalación de sistemas para agua potable, redes de agua caliente centralizada y agua fría, para edificaciones residenciales, comerciales e industriales."
          features={[
            "Sistemas de agua potable",
            "Redes de agua caliente centralizada",
            "Redes de agua fría",
            "Proyectos residenciales, comerciales e industriales",
          ]}
        />
      </TextParallaxContent>
    </section>
  );
}

const ServiceContent = ({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: string[];
}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold text-foreground md:col-span-4">{title}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-8 text-xl leading-relaxed text-muted-foreground md:text-2xl">{description}</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
            <span className="text-lg text-muted-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
