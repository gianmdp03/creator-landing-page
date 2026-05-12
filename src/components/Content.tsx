import { ContentCardType } from "@/types/content";
import React from "react";

type Props = {};

const fetchContentCards = async (): Promise<ContentCardType[]> => {
  const response = await fetch(
    "https://gist.githubusercontent.com/gianmdp03/e8052dc990abc29c149738afa04341b3/raw/a4f8b97aa7a8193dd23bf91c4dfa9aeae091c0a4/content_card.json",
  );
  if (!response.ok) throw new Error("Error al obtener los datos");
  return await response.json();
};

const Content = async (props: Props) => {
  const data = await fetchContentCards();
  return (
    <section id="content" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Ejes de Contenido</h2>
          <p className="text-zinc-400">
            Las categorías principales que abordo en mis canales.
          </p>
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
