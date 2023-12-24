const Video = ({ isMuted = true, src = '/videos/Marweb_Video.mp4' }) => {
  return (
    <video
      className=" object-fill"
      playsInline
      autoPlay
      muted={isMuted}
      loop
      src={src}
      
    ></video>
  );
};
export default Video