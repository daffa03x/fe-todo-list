import { NextResponse } from "next/server";

export function middleware(req) {
  // Mengambil token dari cookies
  const token = req.cookies.get("token");

  // Jika tidak ada token, redirect ke halaman login
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Jika token ada, lanjutkan ke halaman yang diminta
  return NextResponse.next();
}

// Konfigurasi untuk menentukan rute mana yang dilindungi
export const config = {
  matcher: ["/todo/:path*", "/protected/:path*"], // Halaman yang dilindungi
};
