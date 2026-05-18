"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Building2,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Users,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import { COMPANY_INTRO, COMPANY_STATS } from "@/constants/about";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const quickLinks = [
  {
    title: "Nosotros",
    description: "Trayectoria, equipo y certificaciones",
    href: "/nosotros",
    icon: Users,
  },
  {
    title: "Servicios",
    description: "Seis líneas: gas, incendio, desagües, hidráulica y más",
    href: "/servicios",
    icon: Wrench,
  },
  {
    title: "Proyectos",
    description: "Obras con las principales constructoras",
    href: "/proyectos",
    icon: Building2,
  },
  {
    title: "Reconocimientos",
    description: "Distinciones y cumplimiento en obra",
    href: "/reconocimientos",
    icon: Award,
  },
  {
    title: "Aliados",
    description: "Proveedores y marcas de confianza",
    href: "/aliados",
    icon: Handshake,
  },
  {
    title: "Contacto",
    description: "Cotizaciones y asesoría directa",
    href: "/#contacto",
    icon: MessageCircle,
  },
] as const;

export function HomeOverviewSection() {
  return (
    <section id="resumen" className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary"
          >
            <ShieldCheck className="h-4 w-4" />
            Resumen
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-bold tracking-tight text-[#0a192f] sm:text-4xl"
          >
            Todo lo que hacemos en un solo lugar
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {COMPANY_INTRO}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {COMPANY_STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-primary md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.div key={link.href} variants={fadeUp}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-300 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900">{link.title}</h3>
                  <p className="mt-1 flex-1 text-sm text-slate-600">{link.description}</p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
