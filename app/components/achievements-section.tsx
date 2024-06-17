import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef, useState} from "react";
import achievementImage4 from "@/public/img/achievements/ach.jpg"
import clioImage23Image from  "@/public/img/achievements/Clio22-23.jpg"
import clioImage24Image from  "@/public/img/achievements/clio-23-24.jpg"
import gulfImage23Image from  "@/public/img/achievements/gulf22-23.jpg"
import dubai24h24Image from "@/public/img/achievements/24h-dubai24-2.jpg";
import nordbergImage from "@/public/img/achievements/nordberg.jpg";

const achievements = [
    {
        title: 'Clio Cup Middle East 2022-2023',
        description: 'In our first season competing in the Clio Cup Middle East, we fielded 3 drivers. \n' +
            'Vasily Vladykin, achieved excellent results, securing an overall second place in the Challenger\'s Championship.\n',
        imgSrc: clioImage23Image,
    },
    {
        title: 'Gulf ProCar 2022-2023',
        description: 'Our team has secured multiple race wins in the Clio RS class, demonstrating strong performance and competitive excellence on the track.',
        imgSrc: gulfImage23Image,
    },
    {
        title: 'Clio Cup Middle East 2023-2024',
        description: 'In the 2023-2024 season of the Clio Cup Middle East, our second season competing, we fielded three drivers who made remarkable achievements.\n' +
            'Top 3 spots in the Gentlemen Championship and securing overall positions of second, third, and fourth. Their stellar performance also earned us the Team Trophy.',
        imgSrc: clioImage24Image,
    },
    {
        title: 'Gulf ProCar 2023-2024',
        description: 'Our team achieved multiple race wins in both the Clio RS Class and the GT4 Class, showcasing our competitive edge and excellence in diverse racing categories.',
        imgSrc: achievementImage4,
    },
    {
        title: 'Hankook 24H Dubai 2024',
        description: 'Our team won the GT4 Class with the first-ever victory for a Supra GT4 Evo, and secured third place in the Team Championship of the Hankook Middle East Trophy. These achievements underscore our team\'s ability to excel and set new standards in motorsport.',
        imgSrc: dubai24h24Image,
    },
    // {
    //     title: 'GT4 European Series 2024',
    //     description: 'to be unlocked ',
    // },
    {
        title: 'Nordberg Partnership',
        description: 'Nordberg has become our technical partner for the 2023 - 2024 season',
        imgSrc: nordbergImage,
    }
].reverse();

export default function AchievementsSection() {
    const sectionRef = useRef(null);
    const [isViewMore, setViewMore]  = useState(false)
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-40%", "10%"])
    const bannerClassName = 'group relative h-[400px] flex flex-col items-center justify-center bg-center bg-cover p-10  overflow-hidden'
    return (
        <section id="achievements-section" ref={sectionRef}  className="py-16 md:py-32 ">
            <div className="container mx-auto">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="h2">Achievements</h2>
                    <span className="h4 stroke-text ">the moments we are&nbsp;proud&nbsp;of</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 h-full gap-2 mb-6">
                    {(isViewMore ? achievements : achievements.slice(0,  4)).map((achievement, index) => (
                        <div key={index}
                             className={[1, 2, 5].includes(index) ? ('col-span-1 md:col-span-2 ' + bannerClassName) : bannerClassName}>
                            <motion.div className="absolute w-full h-[140%] " style={{top: y}}>
                                <div className="absolute inset-0 bg-accent z-10 mix-blend-multiply"></div>
                                <Image src={achievement.imgSrc} alt={achievement.title} fill
                                       className={"object-cover object-center w-full"}/>
                            </motion.div>
                            <div
                                className="relative z-10 h5 text-white text-center opacity-100 transition group-hover:opacity-0">
                                {achievement.title}
                            </div>
                            <div
                                className="absolute z-20 top-0 left-0 bottom-0 right-0 bg-black/75 text-base text-white p-10 opacity-0 transition group-hover:opacity-100">
                                <div className="max-w-2xl">
                                    {achievement.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <button type="button" onClick={() => setViewMore(!isViewMore)}
                            className="mx-auto px-12 caption hover:bg-accent-hover text-white uppercase parallelogram bg-accent">
                        {!isViewMore ? <span>View more</span> : <span>Hide</span>}
                    </button>
                </div>
            </div>
        </section>
    )
}