import React from "react";
import { Eye, EyeOff } from "lucide-react";

function TogglePassword({ showPassword, setShowPassword, name }) {
  const togglePassword = (name) => {
    setShowPassword((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  return (
    <button
      className="text-gray-500 absolute right-4 top-1/2 transform -translate-y-1/2"
      type="button"
      onClick={() => togglePassword(field.name)}
    >
      {showPassword[name] ? <EyeOff /> : <Eye />}
    </button>
  );
}

export default TogglePassword;
