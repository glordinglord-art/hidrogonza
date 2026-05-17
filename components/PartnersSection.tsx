export function PartnersSection() {
  const partners = [
    "Maygas",
    "Codifer S.A.S",
    "Colmena",
    "Pavco Wavin",
    "Impofer",
    "Nurueña",
    "Gruhicol S.A.S.",
    "FLP",
    "TCL",
  ];

  return (
    <section id="aliados" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
            Aliados y Proveedores
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Trabajamos con las mejores marcas del mercado para garantizar la calidad y durabilidad en cada uno de nuestros proyectos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
          {partners.map((partner, index) => (
            <div key={index} className="p-6 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300">
              {/* Placeholder text for logos since we don't have the actual logo images extracted yet */}
              <div className="text-xl font-bold text-gray-400 hover:text-primary transition-colors text-center">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
