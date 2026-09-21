const Sidebar = () => {
  return (
    <div className="w-full md:max-w-[280px] rounded-[22px] border border-[#edf1f7] bg-white p-5 shadow-[0_2px_4px_rgba(15,23,42,0.04)]">
      {/* Heading */}
      <h2 className="text-[16px] font-bold tracking-[-0.5px] text-[#111827]">
        Your Stack
      </h2>

      {/* Subtitle */}
      <p className="mt-1 text-[12px] font-normal text-[#94a3bd]">
        No technologies selected yet.
      </p>

      {/* Empty State */}
      <div className="mt-5 flex h-[90px] items-center justify-center rounded-[17px] border border-dashed border-[#d9e2ef]">
        <p className="text-[16px] font-normal text-[#94a3bd]">
          Your stack is empty.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
