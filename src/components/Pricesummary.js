"use client";

const SummaryRow = ({ label, value, muted = false }) => (
  <div className="flex justify-between items-center">
    <span className={`text-sm ${muted ? "text-gray-500" : "text-gray-900"}`}>
      {label}
    </span>
    <span
      className={`text-sm font-medium ${muted ? "text-gray-900" : "text-gray-900"}`}
    >
      {value}
    </span>
  </div>
);

const PriceSummary = ({
  subtotal = 14999,
  taxRate = 18,
  tax = 1079.64,
  total = 16078.64,
  onProceed,
}) => {
  const fmt = (n) =>
    "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: 2 });

  return (
    <div className="flex flex-col gap-4 pt-2">
      <SummaryRow
        label="Subtotal"
        value={fmt(subtotal)}
        muted
        className="text-[#6B7280] text-[14px] font-medium"
      />
      <SummaryRow
        label={`Tax (${taxRate}% GST)`}
        value={fmt(tax)}
        muted
        className="text-[#6B7280] text-[14px] font-medium"
      />

      {/* Divider */}
      <hr className="border-[#E5E7EB]" />

      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="text-[18px] font-bold text-[#111827]">
          Total due today
        </span>
        <span className="text-[#1977F2] font-extrabold text-[24px]">
          {total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </span>
      </div>

      {/* CTA */}
      <button
        onClick={onProceed}
        className="w-full bg-blue-600 text-white rounded-[4px] py-[7.5px] text-[16px] font-semibold hover:bg-blue-700 transition-colors mt-1"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default PriceSummary;
