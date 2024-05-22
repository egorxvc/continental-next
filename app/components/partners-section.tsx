import Image from "next/image";

export default function PartnersSection() {
    return (
        <section className="container mx-auto py-16 md:py-32">
            <h2 className="h3 mb-8 md:mb-16 text-center md:text-left">
                our <span className="text-accent">partners</span>
            </h2>
            <div className="flex flex-col items-center md:flex-row gap-6 md:flex-wrap lg:flex-nowrap justify-between">
                <Image src="/img/partners/partner1.png" width={209} height={27} alt="partner1"
                       className="object-contain"/>
                <Image src="/img/partners/partner2.png" width={132} height={61} alt="partner2"
                       className="object-contain"/>
                <Image src="/img/partners/partner3.png" width={175} height={63} alt="partner3"
                       className="object-contain"/>
                <Image src="/img/partners/partner4.png" width={304} height={63} alt="partner4"
                       className="object-contain"/>
                <Image src="/img/partners/partner5.png" width={104} height={83} alt="partner5"
                       className="object-contain"/>
            </div>
        </section>
    )
}