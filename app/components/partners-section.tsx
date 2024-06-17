import Image, {StaticImageData} from "next/image";
import partnerImage1 from "@/public/img/partners/partner1.png";
import partnerImage2 from "@/public/img/partners/partner2.png";
import partnerImage3 from "@/public/img/partners/partner3.png";
import partnerImage4 from "@/public/img/partners/partner4.png";
import partnerImage5 from "@/public/img/partners/partner5.png";
import partnerImage6 from "@/public/img/partners/partner6.png";
import partnerImage7 from "@/public/img/partners/partner7.png";
import useMeasure from "react-use-measure";
import {motion, animate, useMotionValue} from "framer-motion";
import {useEffect} from "react";

const images = [
    partnerImage1,
    partnerImage2,
    partnerImage3,
    partnerImage4,
    partnerImage5,
    partnerImage6,
    partnerImage7,
]

export default function PartnersSection() {
    let [ref, {width}] = useMeasure()
    const xTranslation = useMotionValue(0);

    useEffect(() =>  {
        let controls;
        let finalPosition = -width / 2 - 16

        controls = animate(xTranslation, [0, finalPosition], {
            ease: 'linear',
            duration:  20,
            repeat:  Infinity,
            repeatType: "loop",
            repeatDelay: 0,
        })

        return controls.stop;
    }, [xTranslation, width])

    return (
        <section className="py-16 md:py-32 w-full overflow-hidden">
            <div className="container mx-auto">
                <h2 className="h3 mb-8 md:mb-16 text-center md:text-left">
                    our <span className="text-accent">partners</span>
                </h2>
            </div>
            <div className="relative h-[125px] md:h-[200px]">
                <motion.div className="absolute left-0 flex gap-8" ref={ref} style={{
                    x: xTranslation,
                }}>
                    {
                        [...images, ...images].map((image, index) => (
                            <ImageCard key={index} image={image}></ImageCard>
                        ))
                    }
                </motion.div>
            </div>
        </section>
    )
}

const ImageCard = ({image}: { image: StaticImageData})  =>  {
    return (
        <div className="relative overflow-hidden h-[125px] md:h-[200px]  min-w-[125px] md:min-w-[200px] flex justify-center">
            <Image src={image} fill alt="partner1"
                   className="object-contain "/>
        </div>
    )
}