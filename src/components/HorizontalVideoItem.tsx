import YouTubeEmbed from "./YouTubeEmbed";

type Props = {
  videoId: string;
  name: string;
  views: string;
};

const HorizontalVideoItem = ({ videoId, name, views }: Props) => {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-video bg-zinc-800 rounded-lg mb-4 overflow-hidden border border-zinc-700/50 group-hover:border-zinc-500 transition-colors relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <YouTubeEmbed videoId={videoId} title={name} />
        </div>
      </div>
      <h3 className="font-medium text-lg leading-tight group-hover:text-zinc-300 transition-colors">
        {name}
      </h3>
      <p className="text-sm text-zinc-500 mt-2">{views} visitas</p>
    </div>
  );
};

export default HorizontalVideoItem;
