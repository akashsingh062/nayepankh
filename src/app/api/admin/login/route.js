import { NextResponse } from "next/server";
import { signJWT } from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const envUsername = process.env.ADMIN_USERNAME || "admin";
    const envPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (username === envUsername && password === envPassword) {
      // Create session
      const token = await signJWT({ username });

      // Create response
      const response = NextResponse.json(
        { message: "Login successful!" },
        { status: 200 }
      );

      // Set cookies (secure, httpOnly, sameSite, path)
      response.cookies.set({
        name: "admin_session",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { error: "Invalid username or password." },
      { status: 401 }
    );
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
