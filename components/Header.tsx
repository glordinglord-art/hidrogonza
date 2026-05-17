"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { NAV_LINKS, CONTACT } from "@/constants/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full border-b border-border transition-shadow duration-300",
          scrollY > 20
            ? "bg-white/95 shadow-md backdrop-blur-md"
            : "bg-white/90 backdrop-blur-sm"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <BrandLogo variant="header" />

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-muted hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="hidden md:block"
          >
            <Button asChild className="rounded-full bg-primary px-6 hover:bg-primary/90">
              <a href={CONTACT.phoneHref} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </motion.div>

          <button
            type="button"
            className="rounded-lg p-2 text-foreground md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </motion.div>
      </motion.header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-white md:hidden"
        >
          <div className="flex h-16 items-center justify-between border-b px-4">
            <BrandLogo variant="header" href="/" onNavigate={() => setIsMenuOpen(false)} />
            <button type="button" onClick={() => setIsMenuOpen(false)} aria-label="Cerrar">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3 text-lg font-medium hover:bg-muted"
              >
                {link.name}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
            <Button asChild className="mt-4 w-full rounded-full">
              <a href={CONTACT.phoneHref} target="_blank" rel="noopener noreferrer">
                Escríbenos por WhatsApp
              </a>
            </Button>
          </nav>
        </motion.div>
      )}
    </>
  );
}
