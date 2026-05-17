"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  title: string;
  description?: string;
  image: string;
  alt: string;
  badge?: string;
};

type ImageGalleryProps = {
  items: readonly GalleryItem[];
  columns?: 2 | 3;
  className?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ImageGallery({ items, columns = 2, className }: ImageGalleryProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      className={cn(
        "grid gap-6",
        columns === 3
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "md:grid-cols-2",
        className
      )}
    >
      {items.map((item) => (
        <motion.article
          key={item.image + item.title}
          variants={fadeUp}
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
        >
          <motion.div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {item.badge && (
              <span className="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow">
                {item.badge}
              </span>
            )}
          </motion.div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
            {item.description && (
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            )}
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
