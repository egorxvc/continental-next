import Image from "next/image";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import vasiliyVladikinIImage from "@/img/team/vasily-vladykin.png";
export default function TeamSection() {
    return (
        <>
            <section className="relative py-16 md:py-32 mt-16 md:mt-32">
                <TeamCaption/>
                <div className="container pt-32 mx-auto">
                    <div className="ml-auto flex w-min flex-col  mr-64 !leading-[0.9] relative z-10">
                        <span className="h1 text-accent">Vasily</span>
                        <div className="pl-16 h1 stroke-text stroke-text-accent">Vladykin</div>
                    </div>

                    <div className="flex justify-center -mt-10">
                        <div className="relative">
                            <Image src={vasiliyVladikinIImage.src} width={728} height={666} alt="vasily-vladykin"/>
                            <span className="text-xl lg:absolute top-1/4 -right-1/4">
                                Founder, Partner, <br/>Racing Driver
                            </span>
                        </div>
                    </div>
                </div>
            </section>
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
        <motion.svg ref={element}  className="w-full absolute" viewBox="0 0 1440 363" fill="none" style={{top: y}}
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
    )
}
