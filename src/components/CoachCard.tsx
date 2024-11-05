import React from "react";
import { Phone, Mail, Trophy } from "lucide-react";

interface CoachCardProps {
  name: string;
  sport: string;
  image: string;
  bio: string;
  yearJoined: string;
  email: string;
  phone: string;
  achievements: string[];
}

const CoachCard = ({
  name,
  sport,
  image,
  bio,
  yearJoined,
  email,
  phone,
  achievements,
}: CoachCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="aspect-square relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-mksu-gold">{sport} Coach</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{bio}</p>
        <div className="mb-4">
          <p className="text-sm text-gray-500">Joined MKSU: {yearJoined}</p>
        </div>
        <div className="space-y-2 mb-4">
          <a href={`mailto:${email}`} className="flex items-center gap-2 text-gray-600 hover:text-mksu-blue">
            <Mail className="w-4 h-4" /> {email}
          </a>
          <a href={`tel:${phone}`} className="flex items-center gap-2 text-gray-600 hover:text-mksu-blue">
            <Phone className="w-4 h-4" /> {phone}
          </a>
        </div>
        <div>
          <h4 className="font-semibold flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-mksu-gold" /> Achievements
          </h4>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoachCard;