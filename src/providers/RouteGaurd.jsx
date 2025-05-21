"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthProvider";
import { usePathname, useRouter } from "next/navigation";

const protectedPaths = ["/items", "articles"];
const publicPaths = ["/login", "/signin"];

function RouteGuard({ children }) {
  const { user, isLoading: authLoading } = useAuth();
  console.log(user);
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (authLoading) {
      setIsLoading(true);
      return;
    }
    const path = pathname.split("?")[0];

    const isProtectedRoute = protectedPaths.some(
      (route) => path !== route && path.startsWith(route + "/")
    );
    const isPublicRoute = publicPaths.some((route) => path === route);

    if (isProtectedRoute && !user) {
      router.push("/login");
    } else if (isPublicRoute && user) {
      console.log(path);
      router.push("/me");
    } else {
      setIsLoading(false);
    }
  }, [user, authLoading, pathname, router]);
  if (isLoading) {
    return null;
  }
  return children;
}

export default RouteGuard;
