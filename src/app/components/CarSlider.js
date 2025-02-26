"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

const car = [
  {
    type: "Hatchback",
    name: "Ford Focus",
    price: 29,
    stars: 3.5,
    image: "images/carSlider/car01.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Sedan",
    name: "Toyota Corolla",
    price: 25,
    stars: 5,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Automatic",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "Convertible",
    name: "Mazda MX-5",
    price: 32,
    stars: 4.9,
    image: "images/carSlider/car02.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
  {
    type: "SUV",
    name: "Honda CR-V",
    price: 35,
    stars: 4.5,
    image: "images/carSlider/car03.svg",
    info: [
      {
        icon: "icons/carSlider/gearshift.svg",
        text: "Manual",
      },
      {
        icon: "icons/carSlider/seat.svg",
        text: "5 Seats",
      },
      {
        icon: "icons/carSlider/gas.svg",
        text: "Gas",
      },
      {
        icon: "icons/carSlider/engine.svg",
        text: "1600 HP",
      },
      {
        icon: "icons/carSlider/wheel.svg",
        text: "Front",
      },
    ],
  },
];

export default function CarSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="container mx-auto"
    >
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1260: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        {car.map((car, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[385px] mx-auto sm:mx-0">
              <Image src={car.image} alt={car.name} width={380} height={284} />
              <div className="flex justify-between">
                <div>
                  <div className="text-[13px] text-secondary uppercase">
                    {car.type}
                  </div>
                  <div className="flex justify-center gap-x-3">
                    <h3 className="text-lg uppercase font-bold">{car.name}</h3>
                    <div className="flex gap-x-1 text-orange-500">
                      {Array.from({ length: 5 }, (_, i) => {
                        if (car.stars >= i + 1) {
                          return <FaStar key={i} />;
                        } else if (car.stars >= i + 0.5) {
                          return <FaStarHalfAlt key={i} />;
                        } else {
                          return <FaRegStar key={i} />;
                        }
                      })}
                    </div>
                  </div>
                  <h3 className="mb-10 text-orange-500 font-semibold uppercase">
                    {car.price}/day
                  </h3>
                </div>
              </div>
              <div>
                {/* car info */}
              </div>
              <div className="flex gap-x-3 xl:gap-x-4 w-max mb-10">
                {car.info.map((item, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2">
                        <Image
                          src={item.icon}
                          alt={item.text}
                          width={24}
                          height={24}
                        />
                      </div>
                      <div className="text-[12px] uppercase">{item.text}</div>
                    </div>
                  );
                })}
              </div>
              <button className="btn btn-primary btn-lg">View Reports</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
