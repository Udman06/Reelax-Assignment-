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
    className={`w-full flex items-center justify-between px-4 py-3 rounded-[4px] border border-[#E5E7EB] text-left transition-colors ${
      selected
        ? "border-blue-500 bg-white"
        : "border-gray-200 bg-white hover:border-gray-300"
    }`}
  >
    <div>
      <span className="text-[14px] font-bold text-[#111827]">{code}</span>
      <span className="text-[10px] font-normal text-[#6B7280] ml-[10px]">
        {description}
      </span>
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
    <div className="border border-[#E5E7EB] rounded-[4px] overflow-hidden">
      {/* Header toggle */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-[17px] pb-4 bg-white"
      >
        <div className="flex items-center gap-3 text-[14px] font-bold text-[#111827]">
          <TagIcon />
          Apply Coupon
        </div>
        <ChevronIcon open={open} />
      </button>

      {/* Expandable body */}
      {open && (
        <div className="px-4 pb-4 bg-white flex flex-col gap-4 border-t border-[#E5E7EB]">
          {/* Coupon input row */}
          <div className="flex items-center gap-2 mt-4">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="flex-1 border border-[#E5E7EB] rounded-[4px] px-4 py-2.5 text-sm placeholder:text-[#6B7280] focus:outline-none focus:border-[#3171FF] focus:ring-1 focus:ring-[#3171FF]"
            />
            <button
              onClick={handleApply}
              className="border border-[#E5E7EB] text-[#1977F2] text-[14px] font-bold px-3 py-1.5 rounded-[4px] hover:bg-blue-50 transition-colors flex-shrink-0"
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
