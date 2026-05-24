"use client";
import { useState } from "react";

const TagIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6b7280"
    strokeWidth="2"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <circle cx="7" cy="7" r="1" fill="#6b7280" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6b7280"
    strokeWidth="2"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// Single selectable coupon row
const CouponOption = ({ code, description, selected, onSelect }) => (
  <button
    onClick={onSelect}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-left transition-colors ${
      selected
        ? "border-blue-500 bg-white"
        : "border-gray-200 bg-white hover:border-gray-300"
    }`}
  >
    <div>
      <span className="text-sm font-bold text-gray-900">{code}</span>
      <span className="text-xs text-gray-500 ml-2">{description}</span>
    </div>
    {/* Radio indicator */}
    <div
      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
        selected ? "border-blue-600" : "border-gray-300"
      }`}
    >
      {selected && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
    </div>
  </button>
);

const COUPONS = [
  { code: "WELCOME20", description: "20% off on your first month" },
  { code: "ANNUAL50", description: "50% off on annual plans" },
];

const CouponSection = ({ onCouponApply }) => {
  const [open, setOpen] = useState(true);
  const [inputCode, setInputCode] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState("WELCOME20");

  const handleApply = () => {
    onCouponApply?.(inputCode || selectedCoupon);
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      {/* Header toggle */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-3.5 bg-white"
      >
        <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-800">
          <TagIcon />
          Apply Coupon
        </div>
        <ChevronIcon open={open} />
      </button>

      {/* Expandable body */}
      {open && (
        <div className="px-4 pb-4 bg-white flex flex-col gap-3 border-t border-gray-100">
          {/* Coupon input row */}
          <div className="flex items-center gap-2 mt-3">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <button
              onClick={handleApply}
              className="border border-gray-300 text-blue-600 text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors flex-shrink-0"
            >
              Apply
            </button>
          </div>

          {/* Coupon options */}
          {COUPONS.map((coupon) => (
            <CouponOption
              key={coupon.code}
              code={coupon.code}
              description={coupon.description}
              selected={selectedCoupon === coupon.code}
              onSelect={() => setSelectedCoupon(coupon.code)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CouponSection;
