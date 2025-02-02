'use client'
import Search from "./Search";
import { SearchContext } from "../context/search";
import { useContext } from "react";
import Image from "next/image";
import { motion, easeInOut } from "framer-motion";

import { fadeIn } from "../../../variants";
export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id='home'>
      <div className="container mx-auto h-full xl:pmt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1 variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }} className="h1">Every VIN Tells a <span className="text-accent">True </span> Story {``}
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }}
              className="description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10">Find your ideal vehicle with our diverse range of affordable vin reports to help you make the best decision</motion.p>
            <motion.div
              variants={fadeIn("down", 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.8 }}

              className="flex gap-x-3 justify-center xl:justify-start">
              <button className="btn-cta">
                <Image src={"/icons/buttons/google-play.svg"} width={132} height={36} alt="" />
              </button>
              {/* <button>btn 2</button> */}
              <button className="btn-cta">
                <Image src={"/icons/buttons/app-store.svg"} width={132} height={36} alt="" />
              </button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }}
            className="relative w-full h-full max-w-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48"
            style={{ width: '960px', height: '455px' }} // Explicitly set width
          >
            <Image
              src={"/images/hero/car.png"} // Ensure this path is correct
              fill
              alt="Car Image"
              style={{ objectFit: "contain" }}
              priority
              onError={(e) => console.error("Image failed to load", e)}
              className="mx-full object-contain mx-66 -my-20"  
             
            />
          </motion.div>
        </div>
      </div>
      {
        searchActive ? (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ease: easeInOut }}
            className="fixed top-[80px] z-10 w-full max-w-[1920px]">

            <Search />
          </motion.div>
        ) : (
          <div 
          className="-mt-12 w-full mx-w-[1300px] mx-auto"
          
          >

            <motion.div
              variants={fadeIn("up", 0.8)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}
              className="-mt-12 w-full mx-w-[1300px] mx-auto">
              <Search />

            </motion.div>
          </div>
        )
      }
    </section>
  )
}
