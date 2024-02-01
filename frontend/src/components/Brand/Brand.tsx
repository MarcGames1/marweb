'use client'
import Image from 'next/image';
import Slider from 'react-slick';

import BrandSlideData from '@/date/brandSlideData';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';



const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 3,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings} arrows={false}>
        {BrandSlideData.map((item: { id: Key | null | undefined; img: string | StaticImport; }) => (
          <div className=' overflow-hidden  p-2 rounded-lg bg-white'>

          <Image
            key={item.id}
            className=" overflow-hidden "
            src={item.img}
            width={148}
            height={106}
            alt="brand"
            />
            </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brand;
