import Image from "next/image";
import socialImage1 from "@/public/img/socials/social1.png";
import socialImage2 from "@/public/img/socials/social2.png";
import socialImage3 from "@/public/img/socials/social3.png";

export default function SocialsSection() {
    return (
        <div className="bg-socials-pattern  py-16 md:py-32 bg-cover">
            <div className="container mx-auto">
                <div className="xl:flex items-center mb-20 text-center lg:text-left">
                    <div className="h1 xl:!text-[240px] stroke-text !leading-[1]">Stay</div>
                    <span className="h1 xl:-ml-40 !leading-[1]">in the loop</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center relative z-10 w-full mb-10">
                    <div className="flex items-center justify-center">
                        <Image src={socialImage1.src} width={408} height={562}
                               className="shadow rounded-2xl object-contain" alt="social1"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src={socialImage2.src} width={408} height={562}
                               className="shadow rounded-2xl object-contain" alt="social2"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src={socialImage3.src} width={408} height={562}
                               className="shadow rounded-2xl object-contain" alt="social3"/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <a href="#"
                       className="bg-accent parallelogram px-24 py-2 text-2xl text-white font-bold font-mono uppercase text-center hover:bg-accent-hover transition">Follow
                        us</a>
                </div>
            </div>
        </div>
    )
}