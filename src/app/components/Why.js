
"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";
export default function   Why() {

  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center">Unmatched excellence and customer satisfaction</motion.h2>
        <motion.p 
         variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }}
        className="max-w-[680px] text-center mx-auto mb-2">We offer accurate VIN checks that help you make confident car-buying decisions. Our service ensures you know the true history behind every vehicle.</motion.p>

        <motion.div 
         variants={fadeIn("up", 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }}
        className="hidden md:flex justify-center mb-6 xl:mb-2">
          <Image src={"./images/why/car.svg"} alt="" width={1060} height={420} />
        </motion.div>
        <motion.div 
        variants={fadeIn("up", 0.8)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.4 }}
        className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]">
          {/* number 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdKey className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Vin Simply and Quickly</h3>
            <p className="hidden xl:flex">We prioritize your need and we go above and beyond to ensure your experience with us is nothing short of outstanding</p>
          </div>
          {/* number 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdTrendingUp className="text-[38px] text-accent mb-4" />
            <h3 className="h3">True Mileage Insight</h3>
            <p className="hidden xl:flex">Our VIN check verifies the odometer reading and uncovers any hidden mileage manipulation, helping you make an informed decision based on accurate vehicle data.</p>
          </div>
          {/* number 1 */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdHandshake className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Odometer Accuracy Check</h3>
            <p className="hidden xl:flex">Our service checks for any odometer discrepancies, identifying possible tampering or rollbacks, ensuring you get an honest reading of the vehicle’s mileage.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
