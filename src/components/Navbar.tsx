import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tighter">CREADOR.</span>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-400">
          <Link href="#about" className="hover:text-zinc-50 transition-colors">
            Sobre Mí
          </Link>
          <Link
            href="#content"
            className="hover:text-zinc-50 transition-colors"
          >
            Contenido
          </Link>
          <Link href="#videos" className="hover:text-zinc-50 transition-colors">
            Videos
          </Link>
          <Link
            href="#contact"
            className="hover:text-zinc-50 transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
