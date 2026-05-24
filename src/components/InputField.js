"use client";

const InputField = ({
  label,
  placeholder,
  optional = false,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] font-medium text-[#353535]">
        {label}{" "}
        {optional && (
          <span className="text-[#9C9C9C] text-[14px] font-medium">
            (Optional)
          </span>
        )}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border bg-[#F8FAFC] rounded-[4px] px-4 py-3 text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
          error
            ? "border-red-400 focus:border-red-400 focus:ring-red-200"
            : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
        }`}
      />
    </div>
  );
};

export default InputField;
