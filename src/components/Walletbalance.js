"use client";

const WalletIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3b82f6"
    strokeWidth="1.6"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <path d="M6 15h.01" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const WalletBalance = ({ balance = "500.00", onApply }) => {
  return (
    <div className="border border-[#E5E7EB] rounded-[4px] p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <WalletIcon />
        <div>
          <p className="text-[14px] font-bold text-[#111827]">Wallet Balance</p>
          <p className="text-[12px] font-medium text-[#6B7280]">
            ₹{balance} available
          </p>
        </div>
      </div>
      <button
        onClick={onApply}
        className="border border-[#3171FF33] text-[#1977F2] text-[14px] font-bold px-3 py-1.5 rounded-[4px] hover:bg-blue-50 transition-colors"
      >
        Apply
      </button>
    </div>
  );
};

export default WalletBalance;
