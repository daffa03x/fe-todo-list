"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const useAuthRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token != null) {
      router.push("/todo");
    }
  }, [router]);
};
