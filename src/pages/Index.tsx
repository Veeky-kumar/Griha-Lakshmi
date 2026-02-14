import ParallaxScene from "@/components/ParallaxScene";
import GallerySection from "@/components/GallerySection";
import InvitationSection from "@/components/InvitationSection";
import EventsSection from "@/components/EventsSection";
import RouteMedallionSection from "@/components/RouteMedallionSection";
import CelebrationWheelSection from "@/components/CelebrationWheelSection";
import ThingsToKnowSection from "@/components/ThingsToKnowSection";
import CountdownSection from "@/components/CountdownSection";
import FloatingContact from "@/components/FloatingContact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <ParallaxScene />
      <GallerySection />
      <InvitationSection />
      <EventsSection />
      <RouteMedallionSection />
      <CelebrationWheelSection />
      <ThingsToKnowSection />
      <CountdownSection />
      <FloatingContact />
    </main>
  );
};

export default Index;
