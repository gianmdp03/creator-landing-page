import TiktokEmbed from "./TiktokEmbed";

type Props = {
  views: string;
  videoId: string;
  userId: string;
};

const VerticalVideoItem = ({ views, videoId, userId }: Props) => {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-colors flex flex-col p-4 gap-4 w-full max-w-95 shadow-lg shadow-black/20">
      <div className="w-full flex justify-center overflow-hidden rounded-xl bg-black">
        <TiktokEmbed videoId={videoId} />
      </div>
      <div className="flex justify-start w-full">
        <p className="text-sm text-zinc-500 mt-2">{views} visitas</p>
      </div>
    </div>
  );
};

export default VerticalVideoItem;
