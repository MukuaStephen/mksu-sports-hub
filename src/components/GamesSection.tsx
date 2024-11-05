import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import SportTeam from "./SportTeam";

const GamesSection = () => {
  const sportsData = {
    football: {
      name: "Football",
      coach: "John Kamau",
      players: [
        {
          name: "Alex Mwangi",
          role: "Striker",
          joinedYear: "2022",
          schoolId: "MKSU/SP/2022/001",
          achievements: ["Top Scorer 2023", "Team Captain"],
        },
        {
          name: "Brian Ochieng",
          role: "Goalkeeper",
          joinedYear: "2021",
          schoolId: "MKSU/SP/2021/002",
          achievements: ["Best Goalkeeper 2022"],
        },
        // ... Add more players following the same structure
      ],
    },
    basketball: {
      name: "Basketball",
      coach: "Sarah Ochieng",
      players: [
        {
          name: "James Kiprop",
          role: "Point Guard",
          joinedYear: "2023",
          schoolId: "MKSU/SP/2023/003",
          achievements: ["MVP 2023"],
        },
        // ... Add more players following the same structure
      ],
    },
    rugby15s: {
      name: "Rugby 15s",
      coach: "Michael Weru",
      players: [
        {
          name: "David Mutua",
          role: "Flanker",
          joinedYear: "2022",
          schoolId: "MKSU/SP/2022/004",
          achievements: ["Best Forward 2023"],
        },
        // ... Add more players following the same structure
      ],
    },
    rugby7s: {
      name: "Rugby 7s",
      coach: "Peter Kamau",
      players: [
        {
          name: "Samuel Kiprono",
          role: "Scrum-half",
          joinedYear: "2023",
          schoolId: "MKSU/SP/2023/005",
          achievements: ["Tournament MVP 2023"],
        },
        // ... Add more players following the same structure
      ],
    },
    handball: {
      name: "Handball",
      coach: "Grace Muthoni",
      players: [
        {
          name: "Kevin Otieno",
          role: "Center Back",
          joinedYear: "2022",
          schoolId: "MKSU/SP/2022/006",
          achievements: ["Best Player 2023"],
        },
        // ... Add more players following the same structure
      ],
    },
  };

  return (
    <section className="py-16 bg-gray-50" id="games">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-mksu-blue mb-12 text-center">Our Sports Teams</h2>
        <Tabs defaultValue="football" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.keys(sportsData).map((sport) => (
              <TabsTrigger
                key={sport}
                value={sport}
                className="px-6 py-3 rounded-full"
              >
                {sportsData[sport].name}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(sportsData).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <Card className="p-6">
                <SportTeam
                  sportName={data.name}
                  coach={data.coach}
                  players={data.players}
                />
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default GamesSection;