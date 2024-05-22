export default function AchievementsSection() {
    return (
        <section className="bg-achievements-pattern bg-cover py-16 md:py-32 ">
            <div className="container mx-auto">
                <div className="mb-10 text-center md:text-left">
                    <h2 className="h2">Achievements</h2>
                    <span className="h4 stroke-text ">the moments
we are proud of</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 h-full gap-2">
                    <div
                        className="bg-center bg-blend-multiply bg-accent h-[250px] md:h-[500px] flex flex-col items-center justify-center text-center bg-cover  h4 text-white">
                        Clio Cup<br/>
                        Middle East<span className="whitespace-nowrap">22-23</span>
                    </div>
                    <div
                        className=" bg-blend-multiply bg-accent  bg-center h-[250px] md:h-[500px] flex items-center justify-center text-center  lg:col-span-2 bg-cover h4 text-white">
                        Clio Cup <br/>
                        Middle East 22-23
                    </div>
                    <div
                        className="bg-blend-multiply bg-accent  bg-center h-[250px] md:h-[500px] flex justify-center items-center text-center   lg:col-span-2 bg-cover h4  text-white">
                        Clio Cup<br/>
                        Middle East 22-23
                    </div>
                    <div
                        className="bg-blend-multiply bg-accent  bg-center flex flex-col justify-center items-center text-center  h-[250px] md:h-[500px] bg-cover h4  text-white">
                        Clio Cup<br/>
                        Middle East <span className="whitespace-nowrap">22-23</span>
                    </div>
                </div>
            </div>
        </section>
    )
}