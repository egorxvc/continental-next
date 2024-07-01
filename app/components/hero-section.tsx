"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import {heroTriangle, riseWithFade, staggerChildren} from "@/app/utils/animations";
import {AnimatedWords} from "@/app/components/ui/animated-words";
import Image from "next/image";
import {useRef} from "react";

import heroMobileImage from "@/public/img/hero-mobile.jpg";
import heroDesktopImage from "@/public/img/hero-bg-big.jpg";

export const HeroSection = () => {
    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"])

    return (
        <motion.div ref={sectionRef} initial="initial" animate="animate"
                    className="relative min-h-screen flex items-center py-48 md:py-24 md:pt-[250px] pb-[100px]  bg-cover bg-center overflow-hidden">
            <motion.div className="absolute top-0 w-full h-[120%] -z-10" style={{top: y}}>
                <Image src={heroMobileImage.src} alt={'hero'} fill
                       className={"object-cover md:hidden mix-blend-color-dodge"}/>
                <Image src={heroDesktopImage.src}  alt={'hero2'} fill
                       className={"object-cover hidden md:block"}/>
            </motion.div>
            <motion.div
                variants={heroTriangle}
                className="triangle-left-bottom w-full absolute left-0 top-0 bottom-0 mix-blend-multiply bg-accent md:hidden"></motion.div>
            <motion.div
                variants={heroTriangle}
                className="triangle w-full absolute left-0 top-0 -bottom-2/3 mix-blend-multiply bg-accent hidden md:block"></motion.div>
            <motion.div variants={staggerChildren} className="container flex flex-col relative mx-auto text-white">
                <motion.span className="screen !leading-[1] h-[60px] md:h-[110px] inline-block overflow-hidden">
                    <AnimatedWords title="One team"/></motion.span>
                <motion.span className="screen !leading-[1] h-[60px] md:h-[110px] stroke-text stroke-text-white">
                    <AnimatedWords title="One dream"/></motion.span>
                <motion.div variants={riseWithFade} className="max-w-3xl mt-8">
                    <p className="caption bg-black inline">We unite under a single vision to push the
                        boundaries of
                        speed and skill, making racing available to all</p>
                </motion.div>
            </motion.div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
                <svg className=" animate-bounce" width="76" height="35" viewBox="0 0 76 35" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3.5L39 30.5L73 3.5" stroke="white" strokeWidth="7"/>
                </svg>
            </div>
        </motion.div>
    )
}