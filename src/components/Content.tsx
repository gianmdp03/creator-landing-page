import { ContentCardType } from "@/types/content";
import next from "next";

type Props = {};

const fetchContentCards = async (): Promise<ContentCardType[]> => {
  const response = await fetch(process.env.GIST_LINK as string, {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Error al obtener los datos");
  return await response.json();
};

const Content = async (props: Props) => {
  const data = await fetchContentCards();
  return (
    <section id="content" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            ¿De que se trata mi canal?
          </h2>
          <p className="text-zinc-400">Descubre de que trata mi canal.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((card) => (
            <div
              key={card.id}
              className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors"
            >
              <h3 className="text-lg font-medium mb-2">{card.name}</h3>
              <p className="text-sm text-zinc-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
