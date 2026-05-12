import { formatNumber } from "@/extra/formatNumber";
import { YouTubeService } from "@/services/YouTubeService";
import Image from "next/image";

export default async function About() {
  const [subscribers, monthlyViews] = await Promise.all([
    YouTubeService.getSubscribers(),
    YouTubeService.getMonthlyViews(),
  ]);

  return (
    <section
      id="about"
      className="py-20 px-6 bg-zinc-900/50 border-y border-zinc-800/50"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-square rounded-lg overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-zinc-600">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-75 rounded-full ring-2 ring-offset-2">
                <Image
                  src="/profile_picture.png"
                  alt="Picture of the author"
                  width="800"
                  height="600"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6">Soy ErickZenkai</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Soy un creador de contenido enfocado en la intersección entre la
            tecnología de consumo y el desarrollo profesional. Mi objetivo es
            desmenuzar temas complejos y presentarlos con una calidad
            cinematográfica, respetando el tiempo del espectador.
          </p>
          <div className="flex gap-4">
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-md flex-1">
              <span className="block text-2xl font-bold text-zinc-100 mb-1">
                {formatNumber(Number(subscribers))}
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider">
                Suscriptores
              </span>
            </div>
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-md flex-1">
              <span className="block text-2xl font-bold text-zinc-100 mb-1">
                {formatNumber(Number(monthlyViews))}
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider">
                Vistas Mensuales
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
