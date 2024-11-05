import React from "react";
import { Trophy } from "lucide-react";

const NewsTicker = () => {
  return (
    <div className="bg-mksu-blue text-white py-2 overflow-hidden">
      <div className="news-ticker flex items-center gap-8">
        <span className="flex items-center gap-2">
          <Trophy className="w-4 h-4" /> Rugby Team wins Regional Championship
        </span>
        <span>Basketball: MKSU Warriors vs City Knights - Tomorrow 3PM</span>
        <span>Football Team Recruitment Open for 2024 Season</span>
        <span>Handball Team Advances to National Finals</span>
      </div>
    </div>
  );
};

export default NewsTicker;