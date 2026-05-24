"use client";
import { useState } from "react";
import InputField from "./InputField.js";
import SelectField from "./Selectfield.js";

const FormRow = ({ children }) => (
  <div className="grid grid-cols-2 gap-5">{children}</div>
);

const STATE_OPTIONS = [
  { value: "", label: "Select state" },
  { value: "delhi", label: "Delhi" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "karnataka", label: "Karnataka" },
  { value: "tamil_nadu", label: "Tamil Nadu" },
];

const CITY_OPTIONS = [
  { value: "", label: "Select city" },
  { value: "delhi", label: "Delhi" },
  { value: "mumbai", label: "Mumbai" },
  { value: "bangalore", label: "Bangalore" },
  { value: "chennai", label: "Chennai" },
];

const BillingForm = ({ onCancel, onSave }) => {
  const [form, setForm] = useState({
    companyName: "",
    email: "",
    gst: "",
    pan: "",
    premise: "",
    street: "",
    state: "",
    city: "",
    country: "",
    pinCode: "",
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="bg-white rounded-[10px] px-[32px] min-h-[763px] flex flex-col justify-between">
      <div className="pt-[26px] pb-[48px]">
        {/* Page title */}
        <h1 className="text-[26px] font-semibold text-[#111827] mb-[15px]">
          Review your details
        </h1>

        {/* Section heading */}
        <h2 className="text-[20px] font-bold text-[#505050] mb-6">
          Billing Information
        </h2>

        <div className="flex flex-col gap-[26px]">
          <FormRow>
            <InputField
              label="Company Name"
              placeholder="abhigyan"
              value={form.companyName}
              onChange={handleChange("companyName")}
            />
            <InputField
              label="Email"
              placeholder="abhigyan.pandey@getreelax.com"
              value={form.email}
              onChange={handleChange("email")}
            />
          </FormRow>

          <FormRow>
            <InputField
              label="GST Number"
              optional
              placeholder="GST Number"
              value={form.gst}
              onChange={handleChange("gst")}
            />
            <InputField
              label="PAN Number"
              optional
              placeholder="PAN Number"
              value={form.pan}
              onChange={handleChange("pan")}
            />
          </FormRow>

          <FormRow>
            <InputField
              label="Premise/House no."
              placeholder="Premise/House no."
              value={form.premise}
              onChange={handleChange("premise")}
            />
            <InputField
              label="Street"
              placeholder="Street"
              value={form.street}
              onChange={handleChange("street")}
            />
          </FormRow>

          <FormRow>
            <SelectField
              options={STATE_OPTIONS}
              value={form.state}
              onChange={handleChange("state")}
            />
            <SelectField
              label="City"
              options={CITY_OPTIONS}
              value={form.city}
              onChange={handleChange("city")}
            />
          </FormRow>

          <FormRow>
            <InputField
              label="Country"
              placeholder="India"
              value={form.country}
              onChange={handleChange("country")}
            />
            <InputField
              label="Pin Code"
              placeholder="Pincode"
              value={form.pinCode}
              onChange={handleChange("pinCode")}
            />
          </FormRow>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mt-[42] mb-6" />

        {/* Action buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-6 py-[10px] rounded-lg border border-[#E5E7EB] text-[16px] font-bold text-[#111827] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave?.(form)}
            className="px-6 py-[13px] rounded-lg bg-[#1977F2] text-[16px] font-bold text-white hover:bg-blue-700 transition-colors"
          >
            Save Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
