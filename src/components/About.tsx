import Image from "next/image";

import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);
oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const youtubeData = google.youtube({ version: "v3", auth: oauth2Client });
const youtubeAnalytics = google.youtubeAnalytics({
  version: "v2",
  auth: oauth2Client,
});

export default async function About() {
  const subRes = await youtubeData.channels.list({
    mine: true,
    part: ["statistics"],
  });
  const subs = subRes.data.items?.[0]?.statistics?.subscriberCount || "N/A";

  const today = new Date().toISOString().split("T")[0];
  const lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0]; // Hace 30 días

  const viewsRes = await youtubeAnalytics.reports.query({
    ids: "channel==MINE",
    startDate: lastMonth,
    endDate: today,
    metrics: "views",
  });
  const views = viewsRes.data.rows?.[0]?.[0] || "N/A";

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
                  width="800"
                  height="600"
                  alt="Picture of the author"
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
                {subs}
              </span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider">
                Suscriptores
              </span>
            </div>
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-md flex-1">
              <span className="block text-2xl font-bold text-zinc-100 mb-1">
                {views}
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
