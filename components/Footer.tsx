import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { CONTACT } from "@/constants/content";
import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacto" className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <BrandLogo variant="footer" href="/" />
            </div>
            <p className="text-gray-400 max-w-md text-lg">
              Soluciones al instante en diseño y construcción de redes hidrosanitarias, gas y sistemas contra incendio.
            </p>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-primary">Contáctenos</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Llámenos</p>
                  <a href={CONTACT.phoneHref} className="text-xl font-semibold hover:text-primary">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Visítenos</p>
                  <p className="text-lg">Carrera 68 # 57C - 09 Sur</p>
                  <p className="text-gray-400">Bogotá D.C., Colombia</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Escríbanos</p>
                  {CONTACT.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="block text-lg hover:text-primary">
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hidrogonza S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <Link href="/nosotros" className="hover:text-primary transition-colors">Nosotros</Link>
            <Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
            <Link href="/proyectos" className="hover:text-primary transition-colors">Proyectos</Link>
            <Link href="/#contacto" className="hover:text-primary transition-colors">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
