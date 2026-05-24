"use client";
const InputField = ({
  label,
  placeholder,
  optional = false,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] font-medium text-[#353535]">
        {label}{" "}
        {optional && (
          <span className="text-[#9C9C9C] font-normal">(Optional)</span>
        )}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-11 border border-[#E5E7EB] rounded-lg px-4 py-[9px] text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
