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
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-center relative z-10 w-full">
                    <div className="flex items-center justify-center">
                        <Image src={socialImage1.src} width={408} height={562} className="shadow rounded-2xl object-contain" alt="social1"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src={socialImage2.src} width={408} height={562} className="shadow rounded-2xl object-contain" alt="social2"/>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image src={socialImage3.src} width={408} height={562} className="shadow rounded-2xl object-contain" alt="social3"/>
                    </div>
                </div>
                <div
                    className="-mt-10 bg-[#A90808] bg-opacity-80 parallelogram md:max-w-1/2 md:mx-32 px-[10%] flex items-center justify-center h-40 md:h-60  text-2xl md:text-5xl underline font-mono uppercase text-white gap-4">
                    <svg width="74" height="45" viewBox="0 0 74 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41 42.5L68 21.9286L41 2.5" stroke="white" strokeWidth="6"/>
                        <path d="M22 42.5L49 21.9286L22 2.5" stroke="white" strokeWidth="6"/>
                        <path d="M2 42.5L29 21.9286L2 2.5" stroke="white" strokeWidth="6"/>
                    </svg>
                    <span>Follow us</span>
                    <svg width="74" height="45" viewBox="0 0 74 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33 42.5L6 21.9286L33 2.5" stroke="white" strokeWidth="6"/>
                        <path d="M52 42.5L25 21.9286L52 2.5" stroke="white" strokeWidth="6"/>
                        <path d="M72 42.5L45 21.9286L72 2.5" stroke="white" strokeWidth="6"/>
                    </svg>
                </div>
            </div>
        </div>
)
}