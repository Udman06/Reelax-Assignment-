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
    <div className="border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <WalletIcon />
        <div>
          <p className="text-sm font-bold text-gray-900">Wallet Balance</p>
          <p className="text-xs text-gray-500">₹{balance} available</p>
        </div>
      </div>
      <button
        onClick={onApply}
        className="border border-gray-300 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
      >
        Apply
      </button>
    </div>
  );
};

export default WalletBalance;
