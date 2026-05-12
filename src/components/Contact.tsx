import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contacto</h2>
        <p className="text-zinc-400 mb-8">
          Para enviarme un mensaje.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
