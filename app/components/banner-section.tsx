"use client";

import Image from "next/image";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import teamImage from "@/public/img/team-big.jpg";
import logoImage from "@/public/img/logo-2.png";

export default function BannerSection() {
    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-40%", "10%"])

    return (
        <div ref={sectionRef} className="h-[530px] bg-cover bg-center relative overflow-hidden">
            <motion.div className="absolute w-full h-[140%] -z-10" style={{top: y}}>
                <div className="absolute inset-0 bg-accent z-10 mix-blend-multiply"></div>
                <Image src={teamImage.src} alt={'banner'} fill className={"object-cover w-full"}/>
            </motion.div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full">
                <Image alt="logo" height={198} width={503} src={logoImage.src}
                       className="mb-8 md:mb-0 order-1 md:order-2 max-w-full md:max-w-[513px]"/>
                <span
                    className="font-mono font-medium text-4xl md:text-7xl uppercase !leading-[1] stroke-text stroke-text-white md:mr-4 mb-4 md:mb-0  order-2 md:order-1">Racing</span>
                <span
                    className="font-mono font-medium text-4xl md:text-7xl uppercase !leading-[1] stroke-text stroke-text-white order-3">Academy</span>
            </div>
        </div>
    )
}