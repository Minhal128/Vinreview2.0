"use client"

import TestimonialSlider from "./TestimonialSlider";
import Image from "next/image";
import {motion} from "framer-motion";
export default function Testimonial() {
  return (
    <div className="section flex items-center" id="testimonials">
      <div>
        <TestimonialSlider />
      </div>
    </div>
  )
}
