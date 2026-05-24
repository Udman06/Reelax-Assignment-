"use client";

const PlanCard = ({
  price = 4999,
  period = "month",
  planName = "Startup",
  description = "Includes 5,000 credits/mo.",
  onUpgrade,
}) => {
  return (
    <div className="bg-white border-[#E5E7EB] rounded-[10px] p-8 pb-0 pb-[22px] h-[271px]">
      <h1 className="text-[#111827] text-[24px] font-bold mb-4">
        Order Summary
      </h1>
      <div
        className="rounded-[4px] pl-6 pt-5 pb-[17px] pr-[14px] mb-4"
        style={{
          border: "1px solid #4388FF4D",
          boxShadow: "0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A",
        }}
      >
        <div className="flex items-start justify-center gap-[29px]">
          <div>
            <p className="text-[30px] font-extrabold text-[#111827]">
              ₹{price.toLocaleString("en-IN")}
              <span className="text-[16px] font-medium text-[#6B7280] ml-1">
                /{period}
              </span>
            </p>
            <p className="text-sm text-gray-500 mt-[14px]">{description}</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-[#1977F2] tracking-widest uppercase">
              Selected Plan
            </p>
            <p className="text-[20px] font-bold text-[#111827]">{planName}</p>
          </div>
        </div>
      </div>

      {/* Upgrade button */}
      <button
        onClick={onUpgrade}
        className="w-full border bg-[#4378FF0D] border-[#436FFF4D] text-[#1977F2] rounded-[24px] py-[10px] text-[14px] font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
        Upgrade to Growth Plan
      </button>
    </div>
  );
};

export default PlanCard;
