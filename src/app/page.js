import BillingForm from "@/components/Billingform";
import OrderSummary from "@/components/Ordersummary";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] px-[80px] py-4">
      <button className="flex items-center gap-2 text-[14px] font-medium text-[#6B7280] mb-2 hover:text-gray-700 transition-colors">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to plans
      </button>

      {/* 1280px screen: 679px form + 20px gap + 380px summary = fits in 1120px content area */}
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-[679px_1fr]">
        <BillingForm />
        <OrderSummary />
      </div>
    </div>
  );
}
