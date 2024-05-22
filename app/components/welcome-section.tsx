export default function WelcomeSection() {
    return (
        <div className="bg-welcome-pattern bg-cover">
            <div className="container mx-auto">
                <div className="text-center max-w-5xl mx-auto py-36 flex flex-col gap-8 caption">
                    {/*<div>*/}
                    {/*    <AnimatedWords*/}
                    {/*        title="Welcome to the thrilling world of Continental Racing, where speed meets strategy and passion meets precision. As a distinguished Racing Team and an advanced Racing Academy, we are committed to the pursuit of excellence both on and off the track."/>*/}
                    {/*</div>*/}
                    <p className="inline-block">

                        Welcome to the thrilling world of <b>Continental Racing</b>, where speed meets strategy and
                        passion meets precision. As a
                        distinguished <b>Racing Team</b> and an advanced <b>Racing Academy</b>, we are committed to the
                        pursuit of excellence both on and
                        off the track.
                    </p>
                    <p>
                        With <b>numerous titles</b> in prestigious international competitions, we&apos;ve established
                        ourselves as <b>formidable champions</b>,
                        not just in words but through a solid track <b>record of victories</b>. We never stop, always
                        strive for more, and are
                        eager to share our experiences.
                    </p>
                </div>
            </div>
        </div>
    )
}