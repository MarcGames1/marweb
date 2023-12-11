const Video = ({ isMuted = true, src = '/videos/Marweb_Video.mp4' }) => {
  return (
    <video
      className=" max-h-[50vw] lg:max-h-[98vmin] object-contain "
      playsInline
      autoPlay
      muted={isMuted}
      loop
      src={src}
    ></video>
  );
};
export default Video