import Image from "next/image";

export const Header = () => {
    return (
        <>
            <div className="hidden lg:block absolute left-0 top-0 w-full z-10">
                <header className="bg-white py-6 relative">
                    <nav className="container mx-auto class flex items-center justify-center gap-14">
                        <a href="#"
                           className="text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Racing
                            team</a>
                        <a href="#"
                           className="text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Racing
                            Academy</a>
                        <a href="#"
                           className="text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Our
                            Cars</a>
                        <Image src={'/img/logo.png'} width={158} height={63} alt="logo" className="justify-self-center flex-1"></Image>
                        <a href="#"
                           className="text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Achievements</a>
                        <a href="#"
                           className="text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Team</a>
                        <a href="#"
                           className="text-center font-bold hover:text-accent uppercase flex-1 transition-colors ease-in-out duration-300">Contacts</a>
                    </nav>
                    <div
                        className="bg-header-pattern bg-cover bg-top w-full h-[172px] absolute top-full -mt-3 left-0"></div>
                </header>
            </div>
            <div className="container mx-auto flex justify-between lg:hidden h-[70px]">
                <button>
                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 30.6729H35V27.3395H5V30.6729ZM5 22.3395H35V19.0062H5V22.3395ZM5 10.6729V14.0062H35V10.6729H5Z"
                            fill="black" fillOpacity="0.6"/>
                    </svg>
                </button>
                <Image alt="logo" src={'/img/logo.png'} width={158} height={63}  className="flex-1"></Image>
            </div>
        </>
    )
        ;
}