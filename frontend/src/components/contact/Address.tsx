
import Image from 'next/image';
import AdressData from '@/date/AdressData';
import dynamic from 'next/dynamic';

const Address = () => {


  return (
    <>
      {AdressData.map((item, i) => (
        <div
          key={i}
        
          className={`flex flex-wrap p-[30px]  border-[#A6A6A6] gap-2 rounded-xl dark:bg-['#212425'] bg-[${item?.bg}]`}
        >
          <span className="w-8 mt-2">
            <Image
              src={item.icon}
              width={30}
              height={20}
              alt="icon"
              className="text-4xl dark:text-white"
            />
          </span>
          <div className="space-y-2">
            <p className="text-xl font-semibold dark:text-white">
              {item?.title} :
            </p>
            {item?.info}
          </div>
        </div>
      ))}
    </>
  );
};

export default dynamic(() => Promise.resolve(Address), {
  ssr: true,
});
