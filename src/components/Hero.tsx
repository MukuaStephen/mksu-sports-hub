import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920')",
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative container mx-auto h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            MKSU Sports Network
          </h1>
          <p className="text-xl mb-8">
            Experience the passion and excellence of Machakos University sports. From football to handball,
            we nurture talent and create champions.
          </p>
          <button className="bg-mksu-gold text-mksu-blue px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors">
            Explore Teams <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;