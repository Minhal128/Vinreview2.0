'use client'
import Image from "next/image";
import { MdOutlineMapsHomeWork, MdOutlineBuildCircle, MdOutlineDirectionsCar } from "react-icons/md";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

export const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <section className="section flex items-center" id="about" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:justify-between items-center gap-8">
                    {/* Car Image */}
                    <motion.div 
                     variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }}
                    className="w-full xl:w-1/2">
                        <Image
                            className="rounded-[20px]"
                            src={"/images/about/car01.png"}
                            width={600}
                            height={448}
                            alt="Car"
                        />
                    </motion.div>

                    {/* Text and Statistics */}
                    <div className="w-full xl:w-1/2 flex flex-col items-start">
                        <motion.h2 
                        variants={fadeIn("up", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }}
                        className="text-3xl font-bold mb-4">Odometer Never Lies</motion.h2>
                        <motion.p 
                         variants={fadeIn("up", 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6}}
                        className="text-lg text-gray-700 mb-6">
                           Verify the odometer to avoid fraud. Our VIN check ensures accurate mileage, helping you make a smart and confident purchase.
                        </motion.p>
                        <motion.div 
                         variants={fadeIn("up", 0.8)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}
                        className="flex items-center gap-x-8 mb-12">
                            {/* Car Types */}
                            <div className="flex flex-col items-center w-[100px]">
                                <MdOutlineDirectionsCar className="text-5xl text-accent mb-2" />
                                <div className="text-3xl font-black mb-1">
                                    {inView ? <CountUp start={0} end={50} duration={3} delay={1} /> : null}+
                                </div>
                                <div className="uppercase text-[13px] font-semibold text-secondary text-center">
                                    car <br /> types
                                </div>
                            </div>

                            {/* Rental Outlets */}
                            <div className="flex flex-col items-center w-[100px]">
                                <MdOutlineMapsHomeWork className="text-5xl text-accent mb-2" />
                                <div className="text-3xl font-black mb-1">
                                    {inView ? <CountUp start={0} end={135} duration={3} delay={1} /> : null}+
                                </div>
                                <div className="uppercase text-[13px] font-semibold text-secondary text-center">
                                    rental <br /> outlets
                                </div>
                            </div>

                            {/* Repair Points */}
                            <div className="flex flex-col items-center w-[100px]">
                                <MdOutlineBuildCircle className="text-5xl text-accent mb-2" />
                                <div className="text-3xl font-black mb-1">
                                    {inView ? <CountUp start={0} end={35} duration={3} delay={1} /> : null}+
                                </div>
                                <div className="uppercase text-[13px] font-semibold text-secondary text-center">
                                    repair <br /> points
                                </div>
                            </div>
                        </motion.div>

                        {/* Button */}
                        <motion.button
                         variants={fadeIn("up", 1)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.6 }}
                        className="bg-black hover:border-r-gray-700-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]">
                            See all cars
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
