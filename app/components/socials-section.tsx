import Image from "next/image";
import socialImage1 from "@/public/img/socials/social1.png";
import socialImage2 from "@/public/img/socials/social2.png";
import socialImage3 from "@/public/img/socials/social3.png";
import socialImage4 from "@/public/img/socials/social4.png";

export default function SocialsSection() {
    return (
        <div className="bg-texture-white py-16 md:py-32 bg-cover">
            <div className="container mx-auto">
                <div className="xl:flex items-center mb-12 text-center lg:text-left">
                    <div className="h2 xl:!text-[140px] stroke-text !leading-[1]">Stay</div>
                    <span className="h2 xl:-ml-[100px] !leading-[1]">in the loop</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 justify-center relative z-10 w-full mb-10">
                    <a href="https://www.instagram.com/p/C4Kl067Imqb/?igsh=MWZwZG8ycHg4MDdieg==" target="_blank" className="flex items-center justify-center">
                        <Image src={socialImage1.src} width={408} height={562}
                               className="shadow rounded-2xl object-contain" alt="social1"/>
                    </a>
                    <a href="https://www.instagram.com/p/C4F_dCRo2m6/?igsh=MTQ4NmQ0OTllczk5dw==" target="_blank" className="hidden md:flex items-center justify-center">
                        <Image src={socialImage2.src} width={408} height={562}
                               className="shadow rounded-2xl object-contain" alt="social2"/>
                    </a>
                    <a href="https://www.instagram.com/p/C3mmnMArHz5/?igsh=MW1manI5dmhqaHZxNw==" target="_blank" className="hidden md:flex items-center justify-center">
                        <Image src={socialImage3.src} width={408} height={562}
                               className="shadow rounded-2xl object-contain" alt="social3"/>
                    </a>
                    <a href="https://www.instagram.com/reel/C3DNd6uvOIJ/?igsh=eHNhajRxMnhib21t" target="_blank" className="hidden md:flex items-center justify-center">
                        <Image src={socialImage4.src} width={408} height={562}
                               className="shadow rounded-2xl object-contain" alt="social3"/>
                    </a>
                </div>
                <div className="flex justify-center">
                    <a href="https://www.instagram.com/continental.racing" target="_blank"
                       className="bg-accent parallelogram px-24 py-2 text-2xl text-white font-bold font-mono uppercase text-center hover:bg-accent-hover transition">Follow
                        us</a>
                </div>
            </div>
        </div>
    )
}