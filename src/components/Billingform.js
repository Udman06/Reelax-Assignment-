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

const validate = (form) => {
  const errors = {};

  if (!form.companyName.trim())
    errors.companyName = "Company name is required.";

  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (
    form.gst.trim() &&
    !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
      form.gst.toUpperCase(),
    )
  ) {
    errors.gst = "Enter a valid GST number (e.g. 22ABCDE1234F1Z5).";
  }

  if (
    form.pan.trim() &&
    !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(form.pan.toUpperCase())
  ) {
    errors.pan = "Enter a valid PAN number (e.g. ABCDE1234F).";
  }

  if (!form.premise.trim()) errors.premise = "Premise / House no. is required.";

  if (!form.street.trim()) errors.street = "Street is required.";

  if (!form.state) errors.state = "Please select a state.";

  if (!form.city) errors.city = "Please select a city.";

  if (!form.country.trim()) errors.country = "Country is required.";

  if (!form.pinCode.trim()) {
    errors.pinCode = "Pin code is required.";
  } else if (!/^[1-9][0-9]{5}$/.test(form.pinCode)) {
    errors.pinCode = "Enter a valid 6-digit pin code.";
  }

  return errors;
};

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

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear error for the field as user types
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSave = () => {
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSave?.(form);
  };

  return (
    <div className="bg-white rounded-[10px] px-[32px] w-full flex flex-col justify-between">
      <div className="pt-[26px]">
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
              error={errors.companyName}
            />
            <InputField
              label="Email"
              placeholder="abhigyan.pandey@getreelax.com"
              value={form.email}
              onChange={handleChange("email")}
              error={errors.email}
            />
          </FormRow>

          <FormRow>
            <InputField
              label="GST Number"
              optional
              placeholder="GST Number"
              value={form.gst}
              onChange={handleChange("gst")}
              error={errors.gst}
            />
            <InputField
              label="PAN Number"
              optional
              placeholder="PAN Number"
              value={form.pan}
              onChange={handleChange("pan")}
              error={errors.pan}
            />
          </FormRow>

          <FormRow>
            <InputField
              label="Premise/House no."
              placeholder="Premise/House no."
              value={form.premise}
              onChange={handleChange("premise")}
              error={errors.premise}
            />
            <InputField
              label="Street"
              placeholder="Street"
              value={form.street}
              onChange={handleChange("street")}
              error={errors.street}
            />
          </FormRow>

          <FormRow>
            <SelectField
              label="State"
              options={STATE_OPTIONS}
              value={form.state}
              onChange={handleChange("state")}
              error={errors.state}
            />
            <SelectField
              label="City"
              options={CITY_OPTIONS}
              value={form.city}
              onChange={handleChange("city")}
              error={errors.city}
            />
          </FormRow>

          <FormRow>
            <InputField
              label="Country"
              placeholder="India"
              value={form.country}
              onChange={handleChange("country")}
              error={errors.country}
            />
            <InputField
              label="Pin Code"
              placeholder="Pincode"
              value={form.pinCode}
              onChange={handleChange("pinCode")}
              error={errors.pinCode}
            />
          </FormRow>
        </div>

        {/* Divider */}
        <hr className="border-[#E5E7EB] mt-[42px] mb-6" />

        {/* Action buttons */}
        <div className="flex justify-end gap-3 pb-[48px]">
          <button
            onClick={onCancel}
            className="px-6 py-[10px] rounded-lg border border-[#E5E7EB] text-[16px] font-bold text-[#111827] hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
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
