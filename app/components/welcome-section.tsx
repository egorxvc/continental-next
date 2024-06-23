import FadeInScroll from "@/app/components/ui/fadeInScroll";

export default function WelcomeSection() {
    return (
        <div id="racing-team-section" className="bg-texture-white bg-cover">
            <div className="container mx-auto">
                <div className="text-center max-w-5xl mx-auto py-16 lg:py-36 flex flex-col gap-8 caption">
                    <FadeInScroll>
                        <p>
                            Welcome to the thrilling world of <b>Continental&nbsp;Racing</b>, where speed meets strategy and
                            passion meets precision. As a
                            distinguished <b>Racing&nbsp;Team</b> and an advanced <b>Racing&nbsp;Academy</b>, we are committed to the
                            pursuit of excellence both on and
                            off the track.
                        </p>
                    </FadeInScroll>
                    <FadeInScroll>
                        <p>
                            With <b>numerous&nbsp;titles</b> in prestigious international competitions, we&apos;ve established
                            ourselves as <b>formidable&nbsp;champions</b>,
                            not just in words but through a solid track <b>record&nbsp;of&nbsp;victories</b>. We never stop, always
                            strive for more, and are
                            eager to share our experiences.
                        </p>
                    </FadeInScroll>
                </div>
            </div>
        </div>
    )
}