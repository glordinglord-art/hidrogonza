import { Target, Eye, ShieldCheck } from "lucide-react";

type AboutSectionProps = { embedded?: boolean };

export function AboutSection({ embedded }: AboutSectionProps) {
  const items = [
    {
      title: "Misión",
      icon: Target,
      description:
        "HIDROGONZA SAS brinda asesoría en el diseño y construcción de instalaciones y afines dentro de un concepto de mejoramiento continuo a través del seguimiento de la normatividad y de una metodología basada en la excelencia de la calidad.",
    },
    {
      title: "Visión",
      icon: Eye,
      description:
        "Darnos a conocer como una firma especializada en el ámbito y destacarnos como una empresa de proceder ético, donde las personas que la integran sobresalen por su alto espíritu de superación, calidad humana, actitud positiva y solidez técnica.",
    },
    {
      title: "Política de calidad",
      icon: ShieldCheck,
      description:
        "A través de la atención personalizada del gerente y el compromiso permanente con el cliente, busca ser una firma reconocida por la calidad en redes hidrosanitarias, gas y sistemas contra incendio, con recurso humano competente y proveedores de confianza.",
    },
  ];

  return (
    <section className={embedded ? "bg-white" : "bg-white py-24"}>
      <div className={embedded ? "" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        {!embedded && (
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-5xl">¿Quiénes somos?</h2>
            <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-primary" />
          </div>
        )}

        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-slate-600">
          Somos una empresa dedicada a instalaciones de redes de desagüe, alcantarillado, gas natural,
          GLP, sistemas contra incendio y equipos de bombeo, con amplia experiencia y compromiso hacia
          nuestros clientes.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
