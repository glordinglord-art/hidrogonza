"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/constants/images";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="inicio" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGES.heroBg}
            alt="Fondo de construcción"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 drop-shadow-2xl">
              <Image
                src={IMAGES.logo}
                alt="Hidrogonza S.A.S Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              HIDROGONZA S.A.S
            </h1>
            <p className="text-xl md:text-3xl text-primary font-medium mb-12">
              SOLUCIONES AL INSTANTE
            </p>
            
            <Link
              href="/nosotros"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-[0_0_20px_rgba(0,174,239,0.4)] hover:shadow-[0_0_30px_rgba(0,174,239,0.6)] transform hover:-translate-y-1"
            >
              Conócenos
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
