import type { Technology } from "../Types";

type SidebarProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const Sidebar = ({ stack, onRemove, onRemoveAll }: SidebarProps) => {
  return (
    <div className="w-full md:max-w-[280px] rounded-[22px] border border-[#edf1f7] bg-white p-5 shadow-[0_2px_4px_rgba(15,23,42,0.04)]">
      <h2 className="text-[16px] font-bold tracking-[-0.5px] text-[#111827]">
        Your Stack
      </h2>

      <p className="mt-1 text-[12px] font-normal text-[#94a3bd]">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} technologies selected.`}
      </p>

      {stack.length === 0 ? (
        <div className="mt-5 flex h-[90px] items-center justify-center rounded-[17px] border border-dashed border-[#d9e2ef]">
          <p className="text-[16px] font-normal text-[#94a3bd]">
            Your stack is empty.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-xl bg-[#f8fafc] p-3"
            >
              <div className="flex items-center gap-2">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 rounded-lg"
                />
                <div className="flex flex-col">
                  <p className="text-[13px] font-semibold text-[#334155]">
                    {technology.name}
                  </p>
                  <p className="text-[11px] text-[#3f4a5a]">
                    {technology.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-[16px] font-bold text-red-400 hover:text-red-600"
              >
                ×
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="mt-3 w-full rounded-xl bg-red-50 py-2 text-[13px] font-semibold text-red-500 transition-colors hover:bg-red-100"
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
