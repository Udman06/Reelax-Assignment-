"use cleint";
const SelectField = ({ label, options = [], value, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base text-gray-700">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-base text-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none bg-white pr-10"
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="w-5 h-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <polyline
              points="6 9 12 15 18 9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
