import Image from "next/image";
import FadeInScroll from "@/app/components/ui/fadeInScroll";
import historyImage1 from "@/public/img/history/history-img-1.png"
import historyImage2 from "@/public/img/history/history-img-2.png"

export default function HistorySection() {
    return (
        <div className="overflow-x-hidden">
            <div className="container  mx-auto py-16 md:py-32">
                <div className="flex flex-col">
                    <span className="h2 !leading-tight">From Karting</span>
                    <span className="h2 !leading-tight text-accent md:text-right xl:hidden">to Formula 1</span>
                </div>


                <div className="flex flex-col lg:flex-row gap-2 md:gap-8 ">
                    <div className="lg:flex-shrink-0">
                        <FadeInScroll>
                            <Image src={historyImage1.src} alt={"History"} width={465} height={363}/>
                        </FadeInScroll>
                        <FadeInScroll>
                            <Image className="hidden md:block" src={historyImage2.src} alt={"History"}
                                   width={465} height={363}/>
                        </FadeInScroll>
                    </div>
                    <div className="w-full xl:max-w-4xl">
                        <span className="h2 text-accent !leading-[75%] hidden xl:block">to Formula 1</span>
                        <div className="flex flex-col gap-6 py-6 md:py-12 body max-w-full">
                            <FadeInScroll>
                                <p>
                                    <b>Racing Academy</b> is a dynamic training hub for motorsport enthusiasts of all skill
                                    levels.
                                    At our Academy, we provide a structured pathway for <b>aspiring drivers</b> to learn the
                                    fundamentals of racing, mastering techniques that prevent common mistakes and accelerate
                                    their
                                    development.
                                </p>
                            </FadeInScroll>
                            <FadeInScroll>
                                <p>
                                    <b>For professional drivers</b>, we offer advanced approaches designed to refine their
                                    skills,
                                    adapt to new technologies, and stay competitive in the dynamic world of motorsport.
                                </p>
                            </FadeInScroll>
                        </div>
                        <div className="bg-black text-white p-6 mb-16 body">
                            <FadeInScroll>
                                <p>
                                    Whether you&apos;re just starting your journey or looking to push your racing career to
                                    the next
                                    level,
                                    our Academy is dedicated to helping you achieve your goals with expert guidance and
                                    state-of-the-art
                                    facilities/modern technologies.
                                </p>
                            </FadeInScroll>

                        </div>
                        <div className="relative z-10 min-h-32">
                            <div className="lg:absolute right-0">
                                <div className="font-mono uppercase text-7xl flex flex-col xl:items-end leading-tight">
                                    <div
                                        className="flex flex-col md:gap-6 lg:flex-row lg:whitespace-nowrap !leading-normal">
                                        <span className="h2 text-accent !leading-tight">Your </span>
                                        <span
                                            className="h2 stroke-text !leading-tight text-white"> racing journey</span>
                                    </div>
                                    <span className="h2 !leading-normal xl:text-right">starts here!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}