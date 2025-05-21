"use client";

import { authService } from "@/lib/auth";
import { userService } from "@/lib/user";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  isLoading: true,
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
  const [isLoading, setIsLoading] = useState(true);
  const getUser = async () => {
    try {
      setIsLoading(true);
      let res = await userService.getMe();
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        setUser(null);
      } else if (res.status === 401 && refreshToken) {
        const refreshRes = await authService.refresh(refreshToken);
        if (refreshRes.ok) {
          const refreshData = await refreshRes.json();
          localStorage.setItem("accessToken", refreshData.accessToken);
          res = await userService.getMe();
          const data = await res.json();
          setUser(data);
        }
      } else {
        res = await userService.getMe();
        const data = await res.json();
        setUser(data);
      }
    } catch (error) {
      console.error("사용자 정보를 가져오는데 실패했습니다", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <AuthContext.Provider value={{ user, isLoading, getUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
