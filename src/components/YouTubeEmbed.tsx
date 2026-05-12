type Props = {
    videoId:string
    title?:string
}

const YouTubeEmbed = ({videoId, title}: Props) => {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl aspect-video">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default YouTubeEmbed