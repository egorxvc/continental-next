import Image from "next/image";
import {useRef, useState} from "react";
import {motion, MotionConfig, useScroll, useTransform} from "framer-motion";
import vasiliyVladikinIImage from "@/public/img/team/vasily-vladykin.jpg";
import mikhailLobodaImage from "@/public/img/team/mikhail-lobodaa.jpg";
import vagifGuliyevImage from "@/public/img/team/vagif-guliyev.jpg";
import stasBurmistrovImage from "@/public/img/team/stas-burmistrov.jpg";
import georgeRaspletinImage from "@/public/img/team/george-raspletin.jpg";

const teamList = [
    {
        firstName: "Vasiliy",
        secondName: 'Vladykin',
        imgSrc: vasiliyVladikinIImage,
        description: `Founder, Partner, Racing Driver`,
        achievements: [
            'RCRS Bronze Champion in S1600 class',
            'Bronze Champion of Clio Cup Middle East 2022-2023',
            'Winner of GT4 Class Hankook Middle East Trophy 2024',
            'Represents Continental Racing team on the European racing stage',
            'Transitioned from karting to GT classes in under 5 years',
        ]
    },
    {
        firstName: "Vagif",
        secondName: 'Guliyev',
        imgSrc: vagifGuliyevImage,
        description: 'Partner',
        achievements: [
            '13 years of GCC experience in business, administration and investment',
            'Over 20 years of global business background',
            'Over 30 years of love for automobile industry',
            'Aspiring driver and motorsports enthusiast ',
        ]
    },
    {
        firstName: "Mikhail",
        secondName: 'Loboda',
        imgSrc: mikhailLobodaImage,
        description: 'Team Principal, Partner, Racing Driver',
        achievements: [
            'Multiple Champion of International GT Series, National Formula Series, Rallycross and Karting Championships',
            'Over 10 years of coaching experience, with his students achieving worldwide championships in karting, GT, and prototype competitions',
            'Over 8 years in racing team and driver management'
        ]
    },
    {
        firstName: "Stas",
        secondName: 'Burmistrov',
        imgSrc: stasBurmistrovImage,
        description: 'Racing Coach',
        achievements: [
            'Formula Masters and Rotax Max Champion',
            'Over 12 years of experience as a racing coach',
            'Has honed the skills of over 100 aspiring drivers'
        ]
    },
    {
        firstName: "George",
        secondName: 'Raspletin',
        imgSrc: georgeRaspletinImage,
        description: 'Race Engineer',
        achievements: [
            'Boasted over 6 years of experience in engineering Formula cars, including winning cars in the F3 Russian Championship, Nordic Cup, and German F3',
            'Has been engineering touring, GT cars, and prototypes since 2017 to date'
        ]
    }
]

export default function TeamSection() {
    const [current, setCurrent] = useState(0);

    const onPrevClick = () => {
        if (current > 0) {
            setCurrent(current - 1);
        } else {
            setCurrent(teamList.length - 1)
        }
    }

    const onNextClick = () => {
        if (current < teamList.length - 1) {
            setCurrent(current + 1);
        } else {
            setCurrent(0)
        }
    }

    return (
        <>
            <MotionConfig transition={{
                duration: 0.5, ease: [0.32, 0.72, 0, 1]
            }}>
                <section id="team-section" className="flex flex-col relative py-16 md:py-32 mt-16 md:mt-32">
                    <TeamCaption/>
                    <div className="container pt-32 mx-auto">
                        <div className="flex flex-col gap-10 justify-center -mt-10">
                            <motion.div className="relative flex items-center justify-center h-[730px] md:h-[500px] lg:h-[610px] w-full">
                                {
                                    [...teamList].map((item, index) => (
                                        <motion.div animate={{
                                            opacity: current === index ? 1 : 0,
                                        }} className="absolute flex flex-col gap-4 md:gap-0 object-cover md:flex-row w-full justify-center"  key={index}>
                                            <Image className="w-full md:w-[546px]" src={item.imgSrc} width={728} height={666}
                                                   alt="vasily-vladykin"/>
                                            <div className="flex flex-col gap-8 ml-4 lg:ml-8">
                                                <motion.div key={index}
                                                            className=""
                                                            initial={{
                                                                opacity: 0
                                                            }}
                                                            animate={{
                                                                opacity: current === index ? 1 : 0,
                                                            }}
                                                >
                                                    <motion.div animate={{
                                                        translateX: current === index ? 0 : 300
                                                    }}
                                                                className="text-3xl lg:text-6xl font-mono uppercase text-accent leading-none">{item.firstName}</motion.div>
                                                    <motion.div animate={{
                                                        translateX: current === index ? 0 : -300
                                                    }}
                                                                className="pl-16 text-3xl lg:text-6xl font-mono uppercase stroke-text stroke-text-accent leading-none">{item.secondName}</motion.div>
                                                </motion.div>
                                                <motion.div
                                                    transition={{
                                                        delay: 0.3,
                                                        ease: [0.32, 0.72, 0, 1]
                                                    }}
                                                    animate={{
                                                        opacity: current === index ? 1 : 0,
                                                        translateX: current === index ? 0 : 300
                                                    }}
                                                    className="flex flex-col gap-4 w-full xl:max-w-md justify-center">
                                                    <div className="text-lg font-bold">{item.description}</div>
                                                    <div className="flex flex-col gap-2 relative z-10">
                                                        {
                                                            item.achievements.map((achievement, index) => (
                                                                <div key={index}
                                                                     className="text-small flex items-start gap-2">
                                                                    <div className="h-[21px] flex items-center">
                                                                        <div
                                                                            className="size-2 inline-block leading-normal shrink-0 bg-accent"></div>
                                                                    </div>
                                                                    <span>{achievement}</span></div>
                                                            ))
                                                        }
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                            <div
                                className="flex flex-row mx-auto justify-between gap-4 lg:gap-8 w-full lg:w-max relative px-16">
                                <div className="absolute h-full left-0 right-0 flex items-center justify-between z-10">
                                    <button className="w-4 md:w-8 hover:-translate-y-1 transition"
                                            onClick={onPrevClick}>
                                        <svg viewBox="0 0 35 75" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M31.5 72.3428L4.5 36.3428L31.5 2.34277" stroke="currentColor"
                                                  strokeWidth="7"/>
                                        </svg>
                                    </button>
                                    <button className="w-4 md:w-8 hover:-translate-y-1 transition"
                                            onClick={onNextClick}>
                                        <svg viewBox="0 0 35 75" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.5 72.3428L30.5 36.3428L3.5 2.34277"
                                                  stroke="currentColor"
                                                  strokeWidth="7"/>
                                        </svg>
                                    </button>

                                </div>
                                {
                                    [...teamList].map((item, index) => (
                                        <motion.button key={index} className="bg-none border-none relative"
                                                       onClick={() => setCurrent(index)}>
                                            <motion.div
                                                animate={{
                                                    opacity: current === index ? 1 : 0,
                                                }}
                                                className="absolute inset-0 bg-accent z-10 mix-blend-multiply hover:opacity-0"></motion.div>
                                            <Image src={item.imgSrc.src} width={128} height={128}
                                                   alt={item.firstName + " " + item.secondName}/>
                                        </motion.button>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </MotionConfig>
        </>
    )
}

const TeamCaption = () => {
    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target: element,
        offset: ['start end', 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["0", "10%"])

    return (
        <div className="h-[130px]">
            <motion.svg ref={element} className="w-full absolute" viewBox="0 0 1440 363" fill="none" style={{top: y}}
                        xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M1274.95 290.36H1201.77L1131.28 164.475V362.396H1036.72V0.276855H1136.03L1238.36 189.586L1340.69 0.276855H1440V362.396H1345.44V164.475L1274.95 290.36ZM1274.38 289.39H1202.34L1130.31 160.755V361.425H1037.69V1.24768H1135.45L1238.36 191.627L1341.27 1.24768H1439.03V361.425H1346.41V160.755L1274.38 289.39Z"
                      fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M737.38 362.396H634.957L772.045 0.276855H876.294L1013.38 362.396H910.959L887.804 298.079H760.534L737.38 362.396ZM759.852 297.108H888.487L911.641 361.425H1011.98L875.623 1.24768H772.716L636.363 361.425H736.698L759.852 297.108ZM865.333 230.218L824.169 109.301L783.006 230.218H865.333ZM784.362 229.247H863.977L824.169 112.313L784.362 229.247Z"
                      fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M632.308 362.396H344.797V0.276855H632.308V74.254H439.356V141.775H591.145V215.752H439.356V288.419H632.308V362.396ZM438.385 289.39V214.781H590.174V142.746H438.385V73.2832H631.337V1.24768H345.768V361.425H631.337V289.39H438.385Z"
                      fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M202.612 362.396H108.053V74.254H0V0.276855H310.665V74.254H202.612V362.396ZM109.024 73.2832V361.425H201.641V73.2832H309.694V1.24768H0.970829V73.2832H109.024Z"
                      fill="black"/>
            </motion.svg>
        </div>
    )
}
