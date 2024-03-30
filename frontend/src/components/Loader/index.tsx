import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
       <Image src={'/marwebBrandAssets/MarWebLoading.GIF'} alt={'Marweb Loading'} width={600} height={600} />
    </div>
  );
};

export default Loader;
