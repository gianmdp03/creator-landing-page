type Props = {
  videoId: string;
};

export default function TiktokEmbed({ videoId }: Props) {
  return (
    <div className="relative w-full h-200">
      <iframe
        src={`https://www.tiktok.com/embed/v2/${videoId}`}
        className="absolute inset-0 w-full h-full"
        allowFullScreen
      />
    </div>
  );
}
