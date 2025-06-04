const Input = ({ placeholder, value, onChangeValue, required = false }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
      required={required}
    />
  );
};

export default Input;
