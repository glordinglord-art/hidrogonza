"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Zap } from "lucide-react";
import {
  SERVICES,
  FEATURED_PROJECTS,
  PARTNERS,
  CONTACT,
} from "@/constants/content";
import { RecognitionsShowcase } from "@/components/RecognitionsShowcase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HeroLogo } from "@/components/HeroLogo";
import { PulseFitHero } from "@/components/ui/pulse-fit-hero";
import { cn } from "@/lib/utils";
import { getPartnerLogoProps, partnerLogoAreaStyles } from "@/lib/partner-logo";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function DesignAgency() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="bg-white"
    >
      <PulseFitHero
        title="Especialistas en redes hidrosanitarias"
        subtitle="Diseño y construcción de redes de gas, sistemas contra incendio y equipos de bombeo con calidad, normatividad y confianza."
        programs={SERVICES.map((service) => ({
          image: service.image,
          category: "Servicio",
          title: service.title,
          href: service.href,
        }))}
      >
        <motion.div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-4 pb-14 pt-4 sm:px-6 sm:pt-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-20 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="flex flex-col items-start text-left"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm">
              <Zap className="h-4 w-4 text-primary" />
              Soluciones al Instante
            </span>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Especialistas en redes{" "}
              <span className="text-primary">hidrosanitarias</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Diseño y construcción de redes de gas, sistemas contra incendio y
              equipos de bombeo con calidad, normatividad y confianza.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0a192f] px-8 py-4 text-base font-medium text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#0a192f]/90"
              >
                Conócenos
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-medium text-slate-800 shadow-sm transition-transform hover:scale-[1.02] hover:border-primary/40"
              >
                Ver servicios
              </Link>
            </div>
            <p className="mt-4 text-sm italic text-slate-500">
              Más de 10 años de experiencia en Bogotá y Cundinamarca
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <HeroLogo variant="light" />
          </motion.div>
        </motion.div>
      </PulseFitHero>

      {/* Servicios preview */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-12 text-center"
          >
            <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Nuestros servicios
            </span>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              Lo que hacemos
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Instalaciones certificadas para edificaciones residenciales, comerciales e industriales.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {SERVICES.map((service) => (
              <motion.div key={service.title} variants={itemFadeIn}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                    className="relative h-40 overflow-hidden"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                    <service.icon className="absolute bottom-3 left-4 h-8 w-8 text-primary" />
                  </motion.div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-bold text-foreground">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-3">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                      Ver más <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-10 text-center"
          >
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/servicios">Todos los servicios</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Proyectos bento */}
      <section className="bg-slate-50 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="mb-12 text-center">
            <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Portafolio
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Proyectos realizados</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Obras con Constructora Capital, Optima Construcciones y Total Urbe.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid auto-rows-[200px] gap-4 md:grid-cols-4 md:grid-rows-2"
          >
            {FEATURED_PROJECTS.map((project, i) => (
              <motion.div
                key={project.name}
                variants={itemFadeIn}
                className={`group relative overflow-hidden rounded-3xl ${
                  i === 0 ? "md:col-span-2 md:row-span-2 md:min-h-[420px]" : ""
                } ${project.span}`}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute bottom-0 left-0 right-0 p-5 text-white"
                >
                  <p className="text-sm text-primary">{project.client}</p>
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="text-sm text-slate-300">{project.location}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/proyectos">
                Ver todos los proyectos
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Reconocimientos */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Reconocimientos</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Distinciones por cumplimiento en obra y gestión de calidad.
            </p>
          </motion.div>
          <RecognitionsShowcase />
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/reconocimientos">
                Ver reconocimientos y documentos
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Aliados */}
      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Aliados y proveedores</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-8 max-w-6xl"
          >
            <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {PARTNERS.filter((p) => p.logo).map((partner) => {
                const style = partner.logoStyle ?? "yellow";
                const img = getPartnerLogoProps(partner, "preview");
                return (
                  <motion.div
                    key={partner.name}
                    variants={itemFadeIn}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center px-6 py-8",
                        partnerLogoAreaStyles[style],
                        img.areaMinH ?? "min-h-[120px]"
                      )}
                    >
                      <Image
                        src={partner.logo!}
                        alt={partner.name}
                        width={img.w}
                        height={img.h}
                        quality={95}
                        className={cn("h-auto w-full object-contain", img.img)}
                        sizes="(max-width: 640px) 90vw, 320px"
                      />
                    </div>
                    <p className="border-t border-slate-100 px-4 py-3 text-sm font-semibold text-slate-800">
                      {partner.name}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {PARTNERS.filter((p) => !p.logo).map((partner) => (
                <motion.span
                  key={partner.name}
                  variants={itemFadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition-colors hover:border-primary/40 hover:text-primary"
                >
                  {partner.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <Button asChild variant="link" className="mt-6">
            <Link href="/aliados">Ver aliados</Link>
          </Button>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              Contacto
            </span>
            <h2 className="mt-4 text-3xl font-bold">Trabajemos juntos</h2>
            <p className="mt-3 text-muted-foreground">
              Cuéntenos su proyecto y le respondemos con la mejor solución técnica.
            </p>
            <ul className="mt-8 space-y-4 text-foreground">
              <li>
                <strong>Teléfono:</strong>{" "}
                <a href={CONTACT.phoneHref} className="text-primary hover:underline">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <strong>Dirección:</strong> {CONTACT.address}, {CONTACT.city}
              </li>
              <li>
                <strong>Correo:</strong>{" "}
                {CONTACT.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="block text-primary hover:underline">
                    {e}
                  </a>
                ))}
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="text-xl font-bold">Envíenos un mensaje</h3>
            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Nombre" className="rounded-2xl" />
              <Input type="email" placeholder="Correo electrónico" className="rounded-2xl" />
              <Textarea placeholder="Mensaje" className="min-h-[120px] rounded-2xl" />
              <Button type="submit" className="w-full rounded-full">
                Enviar mensaje
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
