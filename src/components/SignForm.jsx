"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/lib/auth";
import ErrorModal from "./ErrorModal";
import { useAuth } from "@/providers/AuthProvider";
import useValidation from "@/hook/useValidation";
import SignInput from "./SignInput";

function SignForm({ isSignup }) {
  const [showPassword, setShowPassword] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const { getUser } = useAuth();

  const { formData, errors, isValid, handleChange } = useValidation(isSignup);
  const handleSubmit = async (e) => {
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

  // const handleBlur = (e) => {};
  const fields = isSignup
    ? [
        {
          name: "email",
          label: "이메일",
          placeholder: "이메일을 입력해주세요",
          isPassword: false,
        },
        {
          name: "nickname",
          label: "닉네임",
          placeholder: "닉네임을 입력해주세요",
          isPassword: false,
        },
        {
          name: "password",
          label: "비밀번호",
          placeholder: "비밀번호를 입력해주세요",
          isPassword: true,
        },
        {
          name: "passwordConfirmation",
          label: "비밀번호 확인",
          placeholder: "비밀번호를 다시 한 번 입력해주세요",
          isPassword: true,
        },
      ]
    : [
        {
          name: "email",
          label: "이메일",
          placeholder: "이메일을 입력해주세요",
          isPassword: false,
        },
        {
          name: "password",
          label: "비밀번호",
          placeholder: "비밀번호를 입력해주세요",
          isPassword: true,
        },
      ];
  return (
    <div className="w-full">
      <form className="flex flex-col gap-4">
        {fields.map((field) => (
          <SignInput
            key={field.name}
            field={field}
            errors={errors}
            handleChange={handleChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
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
