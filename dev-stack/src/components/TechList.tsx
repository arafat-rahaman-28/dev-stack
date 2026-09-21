import { useEffect, useState } from "react";
import TechCard from "./TechCard";
import { type Technology } from "../Types";

const TechList = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
      });
  });

  return (
    <div className="container mx-auto">
      <div className="tech-list-heading mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-[#10182C] md:text-5xl">
          Explore the <span className="text-[#D946A8]">Technologies</span>
        </h1>
        <p className="mt-4 text-lg text-[#64748B] md:text-xl">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {technologies.map((technology) => (
          <TechCard key={technology.id} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default TechList;
