import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

export default function AchievementsSection() {
    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-40%", "10%"])

    return (
        <section ref={sectionRef} className="bg-achievements-pattern bg-cover py-16 md:py-32 ">
            <div className="container mx-auto">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="h2">Achievements</h2>
                    <span className="h4 stroke-text ">the moments
we are proud of</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 h-full gap-2">
                    <div
                        className="relative h-[250px] md:h-[500px] flex flex-col items-center justify-center text-center bg-cover  h4 text-white overflow-hidden">
                        <motion.div className="absolute w-full h-[140%] " style={{top: y}}>
                            <div className="absolute inset-0 bg-accent z-10 mix-blend-multiply"></div>
                            <Image src={"/img/achievements/ach1.png"} alt={'banner'} fill
                                   className={"object-cover w-full"}/>
                        </motion.div>
                        <div className="relative z-10">
                            Clio Cup<br/>
                            Middle East <span className="whitespace-nowrap">22-23</span>
                        </div>
                    </div>
                    <div
                        className="relative h-[250px] md:h-[500px] flex flex-col items-center justify-center text-center bg-cover  h4 text-white overflow-hidden lg:col-span-2">
                        <motion.div className="absolute w-full h-[140%] " style={{top: y}}>
                            <div className="absolute inset-0 bg-accent z-10 mix-blend-multiply"></div>
                            <Image src={"/img/achievements/ach2.png"} alt={'banner'} fill
                                   className={"object-cover w-full"}/>
                        </motion.div>
                        <div className="relative z-10">
                            Clio Cup<br/>
                            Middle East <span className="whitespace-nowrap">22-23</span>
                        </div>
                    </div>
                    <div
                        className="relative h-[250px] md:h-[500px] flex flex-col items-center justify-center text-center bg-cover  h4 text-white overflow-hidden lg:col-span-2">
                        <motion.div className="absolute w-full h-[140%] " style={{top: y}}>
                            <div className="absolute inset-0 bg-accent z-10 mix-blend-multiply"></div>
                            <Image src={"/img/achievements/ach3.png"} alt={'banner'} fill
                                   className={"object-cover w-full"}/>
                        </motion.div>
                        <div className="relative z-10">
                            Clio Cup<br/>
                            Middle East <span className="whitespace-nowrap">22-23</span>
                        </div>
                    </div>
                    <div
                        className="relative h-[250px] md:h-[500px] flex flex-col items-center justify-center text-center bg-cover  h4 text-white overflow-hidden">
                        <motion.div className="absolute w-full h-[140%]" style={{top: y}}>
                            <div
                                className="absolute inset-0 bg-accent z-10 mix-blend-multiply"></div>
                            <Image src={"/img/achievements/ach4.png"} alt={'banner'} fill
                                   className={"object-cover w-full"}/>
                        </motion.div>
                        <div className="relative z-10">
                            Clio Cup<br/>
                            Middle East <span className="whitespace-nowrap">22-23</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}