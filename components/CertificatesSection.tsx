"use client";

import { motion } from "framer-motion";
import { FileCheck } from "lucide-react";
import { CERTIFICATES } from "@/constants/credentials";
import { ImageGallery } from "@/components/ImageGallery";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function CertificatesSection() {
  const galleryItems = CERTIFICATES.map((item) => ({
    title: item.title,
    description: item.description,
    image: item.image,
    alt: item.alt,
  }));

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="space-y-8"
    >
      <motion.div variants={fadeUp} className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <FileCheck className="h-7 w-7 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Certificados</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Respaldo documental de nuestra operación: normatividad vigente, registros y certificaciones
          que avalan la calidad de nuestro trabajo.
        </p>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-primary" />
      </motion.div>

      <ImageGallery items={galleryItems} />
    </motion.div>
  );
}
