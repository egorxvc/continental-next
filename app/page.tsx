import {Header} from "@/app/components/header";
import {HeroSection} from "@/app/components/hero-section";
import WelcomeSection from "@/app/components/welcome-section";
import BannerSection from "@/app/components/banner-section";
import HistorySection from "@/app/components/history-section";
import PricesSection from "@/app/components/prices-section";
import CarsSection from "@/app/components/cars-section";
import AchievementsSection from "@/app/components/achievements-section";
import TeamSection from "@/app/components/team-section";
import SocialsSection from "@/app/components/socials-section";
import GetInTouchSection from "@/app/components/get-in-touch-section";
import PartnersSection from "@/app/components/partners-section";
import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <>
            <Header/>
            <HeroSection/>
            <WelcomeSection/>
            <BannerSection/>
            <HistorySection/>
            <PricesSection/>
            <CarsSection/>
            <AchievementsSection/>
            <TeamSection/>
            <SocialsSection/>
            <GetInTouchSection/>
            <PartnersSection/>
            <Footer/>
        </>
    );
}
