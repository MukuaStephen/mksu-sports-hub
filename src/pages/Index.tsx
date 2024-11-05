import React from "react";
import Hero from "@/components/Hero";
import NewsTicker from "@/components/NewsTicker";
import AboutUs from "@/components/AboutUs";
import TeamSection from "@/components/TeamSection";
import GamesSection from "@/components/GamesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <NewsTicker />
      <AboutUs />
      <TeamSection />
      <GamesSection />
    </div>
  );
};

export default Index;