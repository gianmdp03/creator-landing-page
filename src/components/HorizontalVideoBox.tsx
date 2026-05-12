import { YouTubeService } from "@/services/YouTubeService";
import Link from "next/link";
import HorizontalVideoItem from "./HorizontalVideoItem";
import { FaYoutube } from "react-icons/fa";
import { formatNumber } from "@/extra/formatNumber";

const HorizontalVideoBox = async () => {
  const topVideos = await YouTubeService.getTopVideos();

  return (
    <section id="horizontal-videos" className="py-20 px-6 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="flex flex-row gap-2">
              <h2 className="text-3xl font-semibold mb-2">
                Mi canal de YouTube
              </h2>
              <FaYoutube size={"2.5rem"} />
            </div>
            <p className="text-zinc-400">Mis videos mas populares</p>
          </div>
          <Link
            href="https://www.youtube.com/@ErickZenkai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-zinc-300 hidden sm:block"
          >
            Ir al canal →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {topVideos.map((video) => (
            <HorizontalVideoItem
              key={video.id}
              videoId={video.id}
              name={video.title}
              views={formatNumber(Number(video.views))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalVideoBox;
