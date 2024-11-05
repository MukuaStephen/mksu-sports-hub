import React from "react";
import CoachCard from "./CoachCard";

const TeamSection = () => {
  const coaches = [
    {
      name: "John Kamau",
      sport: "Football",
      image: "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?auto=format&fit=crop&w=500",
      bio: "Former national team player with over 15 years of coaching experience.",
      yearJoined: "2019",
      email: "john.kamau@mksu.ac.ke",
      phone: "+254 712 345 678",
      achievements: [
        "2022 University League Champions",
        "Regional Coach of the Year 2021",
      ],
    },
    {
      name: "Sarah Ochieng",
      sport: "Basketball",
      image: "https://images.unsplash.com/photo-1519766304817-4f37bda74a26?auto=format&fit=crop&w=500",
      bio: "Professional basketball player turned coach, specializing in youth development.",
      yearJoined: "2020",
      email: "sarah.ochieng@mksu.ac.ke",
      phone: "+254 723 456 789",
      achievements: [
        "National Basketball Championship 2023",
        "Best Women's Team Coach 2022",
      ],
    },
    // Add more coaches as needed
  ];

  return (
    <section className="py-16 bg-gray-50" id="teams">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-mksu-blue mb-12 text-center">Our Teams & Coaches</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <CoachCard key={index} {...coach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;