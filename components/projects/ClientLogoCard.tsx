import Image from "next/image";
import {
  clientLogoIncludesName,
  getClientLogoImageProps,
  getClientLogoLayout,
} from "@/lib/client-logo";
import { cn } from "@/lib/utils";

type ClientLogoCardProps = {
  client: string;
  clientLogo: string;
  clientLogoSquare?: boolean;
};

export function ClientLogoCard({ client, clientLogo, clientLogoSquare }: ClientLogoCardProps) {
  const layout = getClientLogoLayout(clientLogo, clientLogoSquare);
  const props = getClientLogoImageProps(layout);
  const hideClientLabel =
    clientLogoSquare || layout === "stacked" || clientLogoIncludesName(clientLogo);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-sm",
        props.cardClass
      )}
    >
      <div className={cn("flex w-full flex-1 items-center justify-center", props.containerClass)}>
        <Image
          src={clientLogo}
          alt={client}
          width={props.width}
          height={props.height}
          className={props.className}
        />
      </div>
      {!hideClientLabel && (
        <p className="mt-3 text-center text-xs font-medium text-slate-500">{client}</p>
      )}
    </div>
  );
}
