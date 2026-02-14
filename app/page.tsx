import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { DescriptionSection } from "@/components/sections/DescriptionSection";
import { FeaturedRooms } from "@/components/sections/FeaturedRooms";
import { OurStory } from "@/components/sections/OurStory";
import { WhereWeAre } from "@/components/sections/WhereWeAre";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <DescriptionSection />
      <FeaturedRooms />
      <OurStory />
      <WhereWeAre />
      <FinalCTA />
    </>
  );
}
