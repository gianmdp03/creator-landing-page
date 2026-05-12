"use client";

import { useState } from "react";


const ContactForm = () => {
  const [result, setResult] = useState("");

  const submitAction = async (formData: FormData) => {
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.success ? "¡Mensaje enviado con éxito!" : "Hubo un error al enviar el mensaje.");
    } catch (error) {
      console.error(error);
      setResult("Hubo un error de conexión.");
    }
  };

  return (
    <form action={submitAction} className="space-y-4 text-left">
      <div>
        <label className="block text-sm font-medium text-zinc-400 mb-1">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2.5 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all text-zinc-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-400 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2.5 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all text-zinc-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-400 mb-1">
          Mensaje
        </label>
        <textarea
          rows={4}
          name="message"
          className="w-full bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2.5 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all text-zinc-100 resize-none"
          defaultValue={""}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-zinc-100 text-zinc-900 font-medium py-3 rounded-md hover:bg-white transition-colors mt-4"
      >
        Enviar Mensaje
      </button>
      {result && (
        <p className="text-center text-sm font-medium mt-4 text-zinc-300">
          {result}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
