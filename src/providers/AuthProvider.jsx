"use client";

import { authService } from "@/lib/auth";
import { userService } from "@/lib/user";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  getUser: () => {},
  logout: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    try {
      let res = await userService.getMe();
      console.log(localStorage.getItem("accessToken"));
      if (res.status === 401) {
        console.log(localStorage.getItem("refreshToken"));
        const refreshRes = await authService.refresh(
          localStorage.getItem("refreshToken")
        );
        if (refreshRes.ok) {
          const data = await refreshRes.json();
          localStorage.setItem("accessToken", data.accessToken);
        }
        res = await userService.getMe();
      }
      const data = await res.json();
      console.log("user:", data);
      setUser(data);
    } catch (error) {
      console.error("사용자 정보를 가져오는데 실패했습니다", error);
      setUser(null);
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.clear();
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, getUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
