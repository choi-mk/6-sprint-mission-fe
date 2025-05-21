import React from "react";
import TogglePassword from "./TogglePassword";

function SignInput({
  field,
  errors,
  showPassword,
  setShowPassword,
  handleChange,
}) {
  return (
    <div>
      <label className="font-bold">{field.label}</label>
      <div className="relative">
        <input
          type={
            field.isPassword
              ? showPassword[field.name]
                ? "text"
                : "password"
              : "text"
          }
          name={field.name}
          onChange={handleChange}
          placeholder={field.placeholder}
          className={`bg-gray-100 rounded-xl w-full px-6 py-4 ${
            errors[field.name] ? "border border-red-500" : ""
          }`}
        />
        {field.isPassword && (
          <TogglePassword
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            name={field.name}
          />
        )}
      </div>
      <div className="text-red-500 font-semibold ml-4">
        {errors[field.name]}
      </div>
    </div>
  );
}

export default SignInput;
