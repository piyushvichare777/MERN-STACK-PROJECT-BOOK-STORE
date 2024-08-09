import React from 'react';
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../Component/Card';

function Freebook() {
  const filterData = list.filter(data => data.category === "free");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="text-center px-4 md:px-7">
        <h1 className="text-4xl font-semibold text-white mb-5">Free Offered Courses</h1>
        <p className="text-xl text-white mx-auto max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, vel quidem recusandae id hic sunt vero similique illo molestiae magni pariatur cupiditate aut rem delectus est dignissimos nihil repudiandae iure.
        </p>
      </div>
      <div className="px-4 md:px-20 mt-12">
        <Slider {...settings} className="relative">
          {filterData.map(item => (
            <div key={item.id} className="px-2">
              <Card item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
