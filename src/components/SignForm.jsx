"use client";
import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { authService } from "@/lib/auth";
import ErrorModal from "./ErrorModal";
import { useAuth } from "@/providers/AuthProvider";

function SignForm({ isSignup }) {
  const [formData, setFormData] = useState(
    isSignup
      ? {
          email: "",
          nickname: "",
          password: "",
          passwordConfirmation: "",
        }
      : {
          email: "",
          password: "",
        }
  );
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { user, getUser } = useAuth();

  const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    console.log("확인");
    e.preventDefault();

    try {
      const res = isSignup
        ? await authService.register(
            formData.email,
            formData.nickname,
            formData.password,
            formData.passwordConfirmation
          )
        : await authService.login(formData.email, formData.password);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      getUser();

      router.push("/items");
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    let message = "";
    if (name === "email") {
      if (value.trim() === "") {
        message = "이메일을 입력해주세요.";
      } else if (!validEmail(value)) {
        message = "잘못된 이메일 형식입니다.";
      }
    } else if (name === "nickname") {
      if (value.trim() === "") {
        message = "닉네임을 입력해주세요.";
      }
    } else if (name === "password") {
      if (value.trim() === "") {
        message = "비밀번호를 입력해주세요.";
      } else if (value.length < 8) {
        message = "비밀번호를 8자 이상 입력해주세요.";
      }
    } else if (name === "passwordConfirmation") {
      if (value.trim() === "") {
        message = "비밀번호를 다시 한번 입력해주세요.";
      } else if (value !== formData.password) {
        message = "비밀번호가 일치하지 않습니다.";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  useEffect(() => {
    const isFormValid =
      Object.values(errors).every((msg) => msg === "") &&
      Object.values(formData).every((data) => data.trim() !== "");

    setIsValid(isFormValid);
  }, [formData, errors]);

  // const handleBlur = (e) => {};
  const fields = isSignup
    ? [
        {
          name: "email",
          placeholder: "이메일을 입력해주세요",
          isPassword: false,
        },
        {
          name: "nickname",
          placeholder: "닉네임을 입력해주세요",
          isPassword: false,
        },
        {
          name: "password",
          placeholder: "비밀번호를 입력해주세요",
          isPassword: true,
        },
        {
          name: "passwordConfirmation",
          placeholder: "비밀번호를 다시 한 번 입력해주세요",
          isPassword: true,
        },
      ]
    : [
        {
          name: "email",
          placeholder: "이메일을 입력해주세요",
          isPassword: false,
        },
        {
          name: "password",
          placeholder: "비밀번호를 입력해주세요",
          isPassword: true,
        },
      ];
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="font-bold">{field.name}</label>
            <input
              name={field.name}
              onChange={handleChange}
              placeholder={field.placeholder}
              className={`bg-gray-100 rounded-xl w-full px-6 py-4 ${
                errors[field.name] ? "border border-red-500" : ""
              }`}
              // onBlur={handleBlur}
            />
            <div className="text-red-500 font-semibold ml-4">
              {errors[field.name]}
            </div>
          </div>
        ))}
      </form>
      <button
        onClick={handleSubmit}
        disabled={!isValid}
        className={` text-white flex justify-center items-center w-full mt-4 py-3 rounded-4xl  ${
          isValid ? "bg-primary-100" : "bg-gray-400"
        }`}
      >
        {isSignup ? "회원가입" : "로그인"}
      </button>
      {errorMessage && (
        <ErrorModal
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      )}
    </div>
  );
}

export default SignForm;
