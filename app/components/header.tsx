import Image from "next/image";
import logo from "@/public/img/logo.png";
import {useState} from "react";
import {motion} from "framer-motion";

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
                    <motion.div initial={{
                        left: '-100%',
                    }} animate={{left: 0}} transition={{
                        ease: [0.6, 0.01, 0.05, 0.95],
                        duration: 0.5,
                    }} exit={{left: 0}}
                                className="fixed h-full max-h-dvh left-0 top-0 w-svw z-10 bg-black text-white flex gap-32 flex-col py-12">
                        <div className="flex items-center text-center w-full flex-col gap-12">
                            <a href="/#racing-team-section"
                               className="whitespace-nowrap text-center font-bold hover:text-accent uppercase transition-colors ease-in-out duration-300">Racing
                                team</a>
                            <a href="/#racing-academy-section"
                               className="whitespace-nowrap text-center font-bold hover:text-accent uppercase transition-colors ease-in-out duration-300">Racing
                                Academy</a>
                            <a href="/#our-cars-section"
                               className="whitespace-nowrap text-center font-bold hover:text-accent uppercase transition-colors ease-in-out duration-300">Our
                                Cars</a>
                            <a href="/#achievements-section"
                               className="text-center font-bold hover:text-accent uppercase transition-colors ease-in-out duration-300">Achievements</a>
                            <a href="/#team-section"
                               className="text-center font-bold hover:text-accent uppercase transition-colors ease-in-out duration-300">Team</a>
                            <a href="/#contacts-section"
                               className="text-center font-bold hover:text-accent uppercase transition-colors ease-in-out duration-300">Contacts</a>
                        </div>

                        <div className="flex justify-center gap-6">
                            <svg className="size-10 md:size-16" viewBox="0 0 140 140" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M70.0053 11.6669C102.223 11.6669 128.339 37.7827 128.339 70.0002C128.339 102.218 102.223 128.334 70.0053 128.334C59.6965 128.35 49.5691 125.622 40.6636 120.429L11.6953 128.334L19.582 99.3536C14.385 90.4453 11.6547 80.3136 11.672 70.0002C11.672 37.7827 37.7878 11.6669 70.0053 11.6669ZM50.1253 42.5836L48.9586 42.6302C48.2033 42.6762 47.4652 42.8747 46.7886 43.2136C46.1558 43.5719 45.5782 44.0199 45.0736 44.5436C44.3736 45.2027 43.977 45.7744 43.5511 46.3286C41.3935 49.1338 40.2318 52.5779 40.2495 56.1169C40.2611 58.9752 41.0078 61.7577 42.1745 64.3594C44.5603 69.6211 48.4861 75.1919 53.6661 80.3544C54.9145 81.5969 56.1395 82.8452 57.4578 84.0061C63.8942 89.6729 71.5643 93.7596 79.8578 95.9411L83.1711 96.4486C84.2503 96.5069 85.3295 96.4252 86.4145 96.3727C88.1134 96.285 89.7722 95.825 91.2736 95.0252C92.0375 94.6317 92.783 94.2035 93.5078 93.7419C93.5078 93.7419 93.7586 93.5786 94.237 93.2169C95.0245 92.6336 95.5086 92.2194 96.162 91.5369C96.6461 91.0352 97.0661 90.4461 97.387 89.7752C97.842 88.8244 98.297 87.0102 98.4836 85.4994C98.6236 84.3444 98.5828 83.7144 98.5653 83.3236C98.542 82.6994 98.0228 82.0519 97.457 81.7777L94.062 80.2552C94.062 80.2552 88.987 78.0444 85.8836 76.6327C85.5589 76.4909 85.2109 76.4099 84.857 76.3936C84.4578 76.3526 84.0546 76.3975 83.6743 76.5253C83.2939 76.653 82.9454 76.8607 82.652 77.1344C82.6228 77.1227 82.232 77.4552 78.0145 82.5652C77.7724 82.8905 77.4389 83.1363 77.0566 83.2714C76.6743 83.4064 76.2605 83.4246 75.8678 83.3236C75.4878 83.2217 75.1155 83.093 74.7536 82.9386C74.0303 82.6352 73.7795 82.5186 73.2836 82.3086C69.9357 80.8476 66.836 78.8736 64.0961 76.4577C63.3611 75.8161 62.6786 75.1161 61.9786 74.4394C59.6837 72.2416 57.6837 69.7553 56.0286 67.0427L55.6845 66.4886C55.4373 66.1162 55.2374 65.7145 55.0895 65.2927C54.8678 64.4352 55.4453 63.7469 55.4453 63.7469C55.4453 63.7469 56.8628 62.1952 57.522 61.3552C58.1636 60.5386 58.7061 59.7452 59.0561 59.1794C59.7445 58.0711 59.9603 56.9336 59.5986 56.0527C57.9653 52.0627 56.2736 48.0902 54.5353 44.1469C54.1911 43.3652 53.1703 42.8052 52.2428 42.6944C51.9278 42.6594 51.6128 42.6244 51.2978 42.6011C50.5144 42.5621 49.7294 42.5699 48.947 42.6244L50.1253 42.5836Z"
                                    fill="white"/>
                            </svg>
                            <svg className="size-10 md:size-16" viewBox="0 0 140 140" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M68.5017 37.8927C77.2795 37.8927 85.5506 41.784 91.612 47.8669V47.8849C91.612 44.9638 93.5774 42.7541 96.2938 42.7541H96.9836C101.27 42.7541 102.129 46.7962 102.129 48.0717L102.147 93.4696C101.849 96.4447 105.219 97.9825 107.091 96.071C114.367 88.5867 123.087 57.5573 102.56 39.5922C83.4164 22.8236 57.7226 25.5938 44.062 35.0075C29.5425 45.0392 20.2618 67.1974 29.2767 88.0226C39.1215 110.727 67.2657 117.5 84.0164 110.745C92.4959 107.321 96.4051 118.768 87.5915 122.516C74.308 128.182 37.2891 127.603 19.9995 97.6627C8.31854 77.4375 8.93654 41.8594 39.93 23.4272C63.6188 9.31738 94.8745 13.2266 113.716 32.8984C133.406 53.4828 132.267 91.9965 113.044 106.969C104.339 113.777 91.4108 107.155 91.5043 97.2351L91.4072 94.0014C85.3458 100.005 77.2795 103.527 68.5017 103.527C51.1366 103.527 35.8483 88.2346 35.8483 70.8875C35.8483 53.3535 51.1366 37.8999 68.5017 37.8999V37.8927ZM90.3437 69.6335C89.6862 56.925 80.2545 49.2718 68.8574 49.2718H68.4263C55.2902 49.2718 47.9927 59.6197 47.9927 71.351C47.9927 84.505 56.8064 92.8121 68.3724 92.8121C81.2821 92.8121 89.758 83.366 90.376 72.1917L90.3437 69.6335Z"
                                    fill="white"/>
                            </svg>
                            <svg className="size-10 md:size-16" viewBox="0 0 140 140" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M70.3333 12C38.1333 12 12 38.1333 12 70.3333C12 102.533 38.1333 128.667 70.3333 128.667C102.533 128.667 128.667 102.533 128.667 70.3333C128.667 38.1333 102.533 12 70.3333 12ZM97.4 51.6667C96.525 60.8833 92.7333 83.2833 90.8083 93.6083C89.9917 97.9833 88.3583 99.4417 86.8417 99.6167C83.4583 99.9083 80.8917 97.4 77.625 95.2417C72.4917 91.8583 69.575 89.7583 64.6167 86.4917C58.8417 82.7 62.575 80.6 65.9 77.2167C66.775 76.3417 81.7083 62.75 82 61.525C82.0405 61.3395 82.0351 61.1468 81.9843 60.9639C81.9335 60.7809 81.8387 60.6131 81.7083 60.475C81.3583 60.1833 80.8917 60.3 80.4833 60.3583C79.9583 60.475 71.7917 65.9 55.8667 76.6333C53.5333 78.2083 51.4333 79.025 49.5667 78.9667C47.4667 78.9083 43.5 77.8 40.525 76.8083C36.85 75.6417 33.9917 75 34.225 72.9583C34.3417 71.9083 35.8 70.8583 38.5417 69.75C55.575 62.3417 66.8917 57.4417 72.55 55.1083C88.7667 48.3417 92.0917 47.175 94.3083 47.175C94.775 47.175 95.8833 47.2917 96.5833 47.875C97.1667 48.3417 97.3417 48.9833 97.4 49.45C97.3417 49.8 97.4583 50.85 97.4 51.6667Z"
                                    fill="white"/>
                            </svg>
                        </div>
                        <button onClick={closeNav} className="absolute top-6 right-6 size-12 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor"
                                      d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"/>
                            </svg>
                        </button>
                    </motion.div>
                )
            }
        </>
    )
        ;
}