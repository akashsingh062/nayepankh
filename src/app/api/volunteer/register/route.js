import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, skills, availability, interests } = body;

    // Basic Validation
    if (!fullName || !email || !phone || !skills || !availability || !interests) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Check if email already registered
    const existing = await db.volunteer.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "This email address is already registered." },
        { status: 400 }
      );
    }

    // Create record
    const volunteer = await db.volunteer.create({
      data: {
        fullName,
        email,
        phone,
        skills,
        availability,
        interests,
      },
    });

    return NextResponse.json(
      { message: "Registration successful!", data: volunteer },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
