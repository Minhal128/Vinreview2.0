"use client";

import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import Copyright from "./Copyright";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20 " id="contact">
      <div className="container mx-auto mb-24">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-x-6 gap-y-14">
          <motion.div
           variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col flex-1 gap-y-8">
            <Link to={"home"} smooth={true} spy={true} className="cursor-pointer">
              <Image src={"/icons/logo.png"} width={200} height={200} alt="Logo" />
            </Link>
            <div className="text-secondary">
            Vinreview is trusted by dealerships, auto buyers, and sellers alike for providing transparency and reliability in the used car market. Their reports are widely accepted and recognized in the industry.
              <div className="flex flex-col gap-y-4 font-semibold">
                {/* phone details */}
                <div className="flex items-center gap-x-[10px]">
                  <FaPhone />
                  <div className="font-medium">(+1)8143511409</div>
                </div>
                {/* email details */}
                <div className="flex items-center gap-x-[10px]">
                  <FaEnvelope />
                  <div className="font-medium">office@vinreview.com</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li><a href="">NewYork</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Mobile</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">How we </a>work</li>
              </ul>
            </div>
          </div>
          {/* 1 */}
          <div 
          
          className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-secondary">Mon-Fri</div>
                <div className="font-semibold">09:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sat</div>
                <div className="font-semibold">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-secondary">Sun</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          {/* 1 */}
          <div 
          
          className="flex-1">
            <h3 className="h3 font-bold mb-8">NewsLetter</h3>
            <div className="flex flex-col gap-y-4">
              <div className="mb-9 text-secondary">Vinreview is a leading provider of vehicle history reports, offering comprehensive VIN checks to help buyers make informed decisions. They gather data from various sources, including government agencies, insurance companies, and repair shops, to provide a full picture of a car’s past</div>
              <form className="flex gap-x-2 h-14">
                <input type="text" placeholder="Your email" className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent"/>
                <button type="submit" className="btn btn-sm btn-accent w-24">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
