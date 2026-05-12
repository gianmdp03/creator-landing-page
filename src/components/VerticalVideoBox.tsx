import { AiFillTikTok } from "react-icons/ai";
import VerticalVideoItem from "./VerticalVideoItem";
import Link from "next/link";
import { formatNumber } from "@/extra/formatNumber";

const VerticalVideoBox = () => {
  const userId = "erickzenkai7";
  return (
    <section
      id="vertical-videos"
      className="py-20 px-6 border-y border-zinc-800/50"
    >
      <div className="max-w-350 mx-auto w-full">
        <div className="max-w-5xl mx-auto mb-10 flex justify-between items-end">
          <div>
            <div className="flex flex-row gap-2">
              <h2 className="text-3xl font-semibold mb-2">
                Mi canal de TikTok
              </h2>
              <AiFillTikTok size={"2.5rem"} />
            </div>
            <p className="text-zinc-400">Mis videos mas virales</p>
          </div>
          <Link
            href="https://www.tiktok.com/@erickzenkai7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-zinc-300 hidden sm:block"
          >
            Ir al canal →
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <VerticalVideoItem
            views={formatNumber(1000)}
            userId={userId}
            videoId="7628989733460249886"
          />
          <VerticalVideoItem
            views={formatNumber(500)}
            userId={userId}
            videoId="7630480935829441822"
          />
          <VerticalVideoItem
            views={formatNumber(670)}
            userId={userId}
            videoId="7630417471006182686"
          />
        </div>
      </div>
    </section>
  );
};

export default VerticalVideoBox;
