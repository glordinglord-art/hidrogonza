"use client";

import { useState, type FormEvent } from "react";
import { CONTACT } from "@/constants/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function buildMailtoUrl(name: string, email: string, message: string) {
  const to = CONTACT.emails.join(",");
  const subject = encodeURIComponent(`Consulta web — ${name}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\nCorreo de contacto: ${email}\n\nMensaje:\n${message}`
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = buildMailtoUrl(name.trim(), email.trim(), message.trim());
  }

  return (
    <>
      <h3 className="text-xl font-bold">Envíenos un mensaje</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Al enviar se abrirá su aplicación de correo (Outlook, Gmail, etc.) con el mensaje
        dirigido a Hidrogonza. Solo confirme el envío allí.
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <Input
          required
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
          className="rounded-2xl"
          autoComplete="name"
        />
        <Input
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          className="rounded-2xl"
          autoComplete="email"
        />
        <Textarea
          required
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mensaje"
          className="min-h-[120px] rounded-2xl"
        />
        <Button type="submit" className="w-full rounded-full">
          Enviar mensaje
        </Button>
      </form>
    </>
  );
}
