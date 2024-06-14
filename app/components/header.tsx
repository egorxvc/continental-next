import Image from "next/image";
import logo from "@/public/img/logo.png";
import {useState} from "react";

export const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const openNav = () => {
        setIsNavActive(true)
    }

    const closeNav = () => {
        setIsNavActive(false)
    }
    return (
        <>
            <div className="hidden lg:block absolute left-0 top-0 w-full z-10">
                <header className="bg-white py-6 relative">
                    <nav
                        className="text-xs xl:text-base container mx-auto class flex items-center justify-center gap-6">
                        <a href="/#racing-team-section"
                           className="whitespace-nowrap text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Racing
                            team</a>
                        <a href="/#racing-academy-section"
                           className="whitespace-nowrap text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Racing
                            Academy</a>
                        <a href="/#our-cars-section"
                           className="whitespace-nowrap text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Our
                            Cars</a>
                        <Image src={logo.src} width={158} height={63} alt="logo"
                               className="justify-self-center flex-1"></Image>
                        <a href="/#achievements-section"
                           className="text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Achievements</a>
                        <a href="/#team-section"
                           className="text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Team</a>
                        <a href="/#contacts-section"
                           className="text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Contacts</a>
                    </nav>
                    <div
                        className="bg-header-pattern bg-cover bg-top w-full h-[172px] absolute top-full -mt-3 left-0"></div>
                </header>
            </div>
            <div className="container mx-auto flex justify-between lg:hidden h-[70px]">
                <button onClick={openNav} className="z-20">
                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 30.6729H35V27.3395H5V30.6729ZM5 22.3395H35V19.0062H5V22.3395ZM5 10.6729V14.0062H35V10.6729H5Z"
                            fill="black" fillOpacity="0.6"/>
                    </svg>
                </button>
                <div className="flex-1 flex items-center justify-center w-full -ml-[40px]">
                    <Image alt="logo" src={logo.src} width={158} height={63}></Image>
                </div>
            </div>
            {
                isNavActive && (
                    <div className="absolute h-screen left-0 top-0 w-full z-10 bg-black text-white flex flex-col gap-12 p-12">
                        <a href="/#racing-team-section"
                           className="whitespace-nowrap text-center font-bold hover:text-accent uppercase transition-colors ease-in-out duration-300">Racing
                            team</a>
                        <a href="/#racing-academy-section"
                           className="whitespace-nowrap text-center font-bold hover:text-accent uppercase transition-colors ease-in-out duration-300">Racing
                            Academy</a>
                        <a href="/#our-cars-section"
                           className="whitespace-nowrap text-center font-bold hover:text-accent uppercasetransition-colors ease-in-out duration-300">Our
                            Cars</a>
                        <a href="/#achievements-section"
                           className="text-center font-bold hover:text-accent uppercase transition-colors ease-in-out duration-300">Achievements</a>
                        <a href="/#team-section"
                           className="text-center font-bold hover:text-accent uppercase transition-colors ease-in-out duration-300">Team</a>
                        <a href="/#contacts-section"
                           className="text-center font-bold hover:text-accent uppercase transition-colors ease-in-out duration-300">Contacts</a>
                        <button onClick={closeNav} className="absolute top-6 right-6 size-12 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/>
                            </svg>
                        </button>
                    </div>
                )
            }
        </>
    )
        ;
}