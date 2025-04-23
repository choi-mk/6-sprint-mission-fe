"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function SignForm({ isSignin }) {
  const [formData, setFormData] = useState({});
  const handleSubmit = () => {};
  const handleChange = () => {};
  const fields = isSignin
    ? [
        {
          name: "이메일",
          placeholder: "이메일을 입력해주세요",
          isPassword: false,
        },
        {
          name: "닉네임",
          placeholder: "닉네임을 입력해주세요",
          isPassword: false,
        },
        {
          name: "비밀번호",
          placeholder: "비밀번호를 입력해주세요",
          isPassword: true,
        },
        {
          name: "비밀번호 확인",
          placeholder: "비밀번호를 다시 한 번 입력해주세요",
          isPassword: true,
        },
      ]
    : [
        {
          name: "이메일",
          placeholder: "이메일을 입력해주세요",
          isPassword: false,
        },
        {
          name: "비밀번호",
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
              className="bg-gray-100 rounded-xl w-full px-6 py-4"
            />
          </div>
        ))}
      </form>
      <button className="bg-gray-400 text-white flex justify-center items-center w-full mt-4 py-3 rounded-4xl">
        {isSignin ? "회원가입" : "로그인"}
      </button>
    </div>
  );
}

export default SignForm;
