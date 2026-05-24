"use client";

import CouponSection from "./Couponsection";
import PlanCard from "./Plancard";
import PriceSummary from "./Pricesummary";
import WalletBalance from "./Walletbalance";

const OrderSummary = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Top card: plan info + upgrade */}
      <PlanCard
        price={4999}
        period="month"
        planName="Startup"
        description="Includes 5,000 credits/mo."
        onUpgrade={() => console.log("Upgrade clicked")}
      />

      {/* Bottom card: wallet, coupon, pricing */}
      <div className="bg-white rounded-2xl p-5 shadow-sm flex flex-col gap-4">
        <WalletBalance
          balance="500.00"
          onApply={() => console.log("Wallet applied")}
        />

        <CouponSection
          onCouponApply={(code) => console.log("Coupon applied:", code)}
        />

        <PriceSummary
          subtotal={14999}
          taxRate={18}
          tax={1079.64}
          total={16078.64}
          onProceed={() => console.log("Proceeding to payment")}
        />
      </div>
    </div>
  );
};

export default OrderSummary;
