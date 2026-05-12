type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 flex flex-col items-center text-center">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-zinc-100">
          Análisis y tecnología. <br />
          <span className="text-zinc-500">Sin rodeos.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-10 font-light max-w-2xl mx-auto">
          Explorando el ecosistema digital, hardware y desarrollo a través de
          contenido audiovisual estructurado y directo al punto.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#videos"
            className="w-full sm:w-auto px-8 py-3 bg-zinc-100 text-zinc-900 font-medium rounded-md hover:bg-white transition-colors"
          >
            Ver Videos
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 bg-transparent border border-zinc-700 text-zinc-300 font-medium rounded-md hover:bg-zinc-900 transition-colors"
          >
            Contacto Comercial
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
