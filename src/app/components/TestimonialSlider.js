"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Image from "next/image";

const testimonialData = [
  {
    message: "A game-changer for car buyers! The VIN check gave me peace of mind, revealing the full history of the vehicle. I knew exactly what I was getting into.",
    avatar: "/images/testimonial/avatar.png",
    name: "John Doe",
    job: "Greenfield, CA",
  },
  {
    message: "I was skeptical at first, but the odometer check saved me from a potential scam. ",
    avatar: "/images/testimonial/avatar1.jpg",
    name: "Jane Smith",
    job: "San Francisco, CA",
  },
  {
    message: "The detailed vehicle history report was an eye-opener. ",
    // avatar: "/images/testimonial/avatar1.jpg",
    name: "Ubaid Hassan",
    job: "Lahore, Salesforce",
  },
];

export default function TestimonialSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[Pagination]}
        className="h-[400px] xl:h-[500px]"
      >
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-5xl text-accent mb-4" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-6 font-medium">{message}</div>
                <Image
                  src={avatar}
                  width={64}
                  height={64}
                  alt={`${name} avatar`}
                  className="rounded-full mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
