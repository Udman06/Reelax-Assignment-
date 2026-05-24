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
    <div className="flex flex-col gap-3">
      {/* Subtotal & tax rows */}
      <SummaryRow label="Subtotal" value={fmt(subtotal)} muted />
      <SummaryRow label={`Tax (${taxRate}% GST)`} value={fmt(tax)} muted />

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Total */}
      <div className="flex justify-between items-center">
        <span className="text-base font-bold text-gray-900">
          Total due today
        </span>
        <span className="text-2xl font-bold text-blue-600">
          {total.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </span>
      </div>

      {/* CTA */}
      <button
        onClick={onProceed}
        className="w-full bg-blue-600 text-white rounded-xl py-3.5 text-sm font-semibold hover:bg-blue-700 transition-colors mt-1"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default PriceSummary;
