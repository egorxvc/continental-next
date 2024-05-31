import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import achievementImage1 from "@/public/img/achievements/ach1.png"
import achievementImage2 from "@/public/img/achievements/ach2.png"
import achievementImage3 from "@/public/img/achievements/ach3.png"
import achievementImage4 from "@/public/img/achievements/ach4.png"

const achievements = [
    {
        title: 'Clio Cup Middle East 2022-2023',
        description: 'In our first season competing in the Clio Cup Middle East, we fielded 3 drivers. \n' +
            'Vasily Vladykin, achieved excellent results, securing an overall second place in the Challenger\'s Championship.\n',
        imgSrc: achievementImage1,
    },
    {
        title: 'Gulf ProCar 2022-2023',
        description: 'Our team has secured multiple race wins in the Clio RS class, demonstrating strong performance and competitive excellence on the track.',
        imgSrc: achievementImage2,
    },
    {
        title: 'Clio Cup Middle East 2023-2024',
        description: 'In the 2023-2024 season of the Clio Cup Middle East, our second season competing, we fielded three drivers who made remarkable achievements.\n' +
            'Top 3 spots in the Gentlemen Championship and securing overall positions of second, third, and fourth. Their stellar performance also earned us the Team Trophy.',
        imgSrc: achievementImage3,
    },
    {
        title: 'Gulf ProCar 2023-2024',
        description: 'Our team achieved multiple race wins in both the Clio RS Class and the GT4 Class, showcasing our competitive edge and excellence in diverse racing categories.',
        imgSrc: achievementImage4,
    },
    {
        title: 'Hankook 24H Dubai 2024',
        description: 'Our team won the GT4 Class with the first-ever victory for a Supra GT4 Evo, and secured third place in the Team Championship of the Hankook Middle East Trophy. These achievements underscore our team\'s ability to excel and set new standards in motorsport.',
        imgSrc: achievementImage1,
    },
    // {
    //     title: 'GT4 European Series 2024',
    //     description: 'to be unlocked ',
    // },
    {
        title: 'Nordberg Partnership',
        description: 'Nordberg has become our technical partner for the 2023 - 2024 season',
        imgSrc: achievementImage2,
    }
]

export default function AchievementsSection() {
    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-40%", "10%"])
    const bannerClassName = 'group relative h-[250px] flex flex-col items-center justify-center bg-center bg-cover p-10  overflow-hidden'
    return (
        <section ref={sectionRef} className="bg-achievements-pattern bg-cover py-16 md:py-32 ">
            <div className="container mx-auto">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="h2">Achievements</h2>
                    <span className="h4 stroke-text ">the moments
we are proud of</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 h-full gap-2">
                    {achievements.map((achievement, index) => (
                        <>
                            <div
                                className={[1,2,5].includes(index) ? ('col-span-1 md:col-span-2 ' + bannerClassName) : bannerClassName}>
                                <motion.div className="absolute w-full h-[140%] " style={{top: y}}>
                                    <div className="absolute inset-0 bg-accent z-10 mix-blend-multiply"></div>
                                    <Image src={achievement.imgSrc} alt={achievement.title} fill
                                           className={"object-cover object-center w-full"}/>
                                </motion.div>
                                <div className="relative z-10 h5 text-white text-center opacity-100 transition group-hover:opacity-0">
                                    {achievement.title}
                                </div>
                                <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/75 text-base text-white p-10 opacity-0 transition group-hover:opacity-100">
                                    <div className="max-w-sm">
                                        {achievement.description}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}