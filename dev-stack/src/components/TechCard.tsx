import type { Technology } from "../Types";

type TechCardProps = {
  technology: Technology;
};

const TechCard = ({ technology }: TechCardProps) => {
  return (
    <div className="w-full max-w-[382px] rounded-[24px] border border-[#E8EEF5] bg-white p-10 shadow-[0_4px_12px_rgba(15,23,42,0.03)]">
      <div className="flex items-center md:items-start justify-between ">
        <div className="flex gap-3 items-center md:flex-col">
          <img
            className="w-12 rounded-xl bg-gray-50 p-2 border border-gray-100"
            src={technology.icon}
            alt=""
          />
          <h2 className="mt-2 mb-4 text-[18px] font-bold tracking-tight text-[#10182C]">
            {technology.name}
          </h2>
        </div>

        <span className="rounded-full border border-[#D6ECFC] bg-[#F0F8FF] px-3 py-1 font-semibold text-[12px] text-[#0099E5]">
          {technology.badge}
        </span>
      </div>

      {/* <h2 className="mt-2 mb-4 text-[18px] font-bold tracking-tight text-[#10182C]">
        {technology.name}
      </h2> */}

      <p className="mt-4 text-[16px] leading-[1.6] text-[#64748B]">
        {technology.description}
      </p>

      <div className="my-8 h-px bg-[#F1F4F8]" />

      <div className="flex items-center justify-between gap-4">
        <span className="rounded-lg bg-[#F1F5F9] px-4 py-2 font-medium text-[12px] text-[#475569]">
          {technology.category}
        </span>

        {/* Difficulty */}
        <span className="font-medium text-[12px] text-[#64748B]">
          {technology.difficulty}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-2 text-[14px] font-semibold text-[#475569]">
          ⭐<span>{technology.rating}</span>
        </div>
      </div>

      {/* Add to Stack Button */}
      <button className="mt-8 w-full rounded-2xl bg-[#080D1C] py-3 text-[16px] text-white transition-colors duration-200 hover:bg-[#1A2338]">
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;
