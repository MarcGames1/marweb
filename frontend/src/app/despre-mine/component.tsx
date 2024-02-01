import About1 from '@/components/About/about1';
import Brand from '@/components/Brand/Brand';
import Container from '@/components/Container';
import Service from '@/components/service/Service';


const DespreComponent = () => {
  return (
    <Container>
      {/* Start top about info */}
      <div className="py-12 px-5">
        <h2 className="after-effect after:left-60 mt-12 lg:mt-0 ">
          Despre Mine
        </h2>
        {/* Page Title */}
        <About1 />
      </div>
      {/* End top about info */}

      {/* Start about service info */}
      <div className="pb-12 px-5 ">
        <h3 className="text-[35px] dark:text-white font-medium pb-5">
          Ce Servicii Ofer
        </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          {/* Experience information  */}

          <Service />
        </div>
      </div>
      {/* End about service info */}

      {/* Start Client Slider */}
      <div className="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto   py-10 rounded-xl">
        <h3 className="text-center dark:text-white text-6xl mb-3 font-semibold ">
          O Parte din Clientii Multumiti
        </h3>
        <Brand />
      </div>
    </Container>
  );
}

export default DespreComponent