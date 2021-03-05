import React from "react";

const InputField = (props) => {
  const { label } = props;
  return (
    <div>
      <label
        htmlFor={props.name}
        className="text-sm font-semibold text-gray-600 block mt-2 mb-1 px-1"
      >
        {label}
      </label>
      <input
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-700"
        {...props}
      />
    </div>
  );
};

export default InputField;
