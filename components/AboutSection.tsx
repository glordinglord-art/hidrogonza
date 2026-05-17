import { Target, Eye, ShieldCheck } from "lucide-react";

export function AboutSection() {
  const items = [
    {
      title: "Misión",
      icon: <Target className="w-10 h-10 text-primary mb-4" />,
      description:
        "HIDROGONZA SAS, Brinda asesoría en el diseño y construcción de instalaciones y afines dentro de un concepto de mejoramiento continuo a través del seguimiento de la normatividad y de una metodología basada en la excelencia de la calidad.",
    },
    {
      title: "Visión",
      icon: <Eye className="w-10 h-10 text-primary mb-4" />,
      description:
        "Darnos a conocer como una firma especializada en ámbito y destacarnos como una empresa de proceder ético, donde las personas que la integran sobresalen por su alto espíritu de superación, su calidad humana, actitud positiva y solidez técnica.",
    },
    {
      title: "Política de Calidad",
      icon: <ShieldCheck className="w-10 h-10 text-primary mb-4" />,
      description:
        "A través de la atención personalizada del gerente y el compromiso permanente con el cliente, busca ser una firma reconocida por la calidad en el diseño y construcción de redes Hidrosanitarias, Redes de gas y sistemas de Red contra incendio, apoyados en un recurso humano competente, comprometido y experimentado, Adecuada selección de Proveedores, optimización y mejoramiento de los procesos para ser una organización eficaz.",
    },
  ];

  return (
    <section id="nosotros" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
            ¿Quiénes Somos?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            Somos una empresa dedicada a las instalaciones de redes de desagüe para aguas negras, aguas grises y pluviales, redes de alcantarillado, redes de gas natural, GLP, sistemas de red contra incendio e instalación de equipos de bombeo, con amplia experiencia en el mercado, siempre cumpliendo con el compromiso hacia nuestros clientes, contribuyendo al desarrollo y competitividad de la construcción con el propósito de cumplir con calidad y confiabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="p-4 bg-blue-50 rounded-full mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
