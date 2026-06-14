import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { verifyJWT } from "@/lib/auth";

// Helper authentication check
async function isAuthenticated(request) {
  const sessionCookie = request.cookies.get("admin_session");
  if (!sessionCookie) return false;
  
  const payload = await verifyJWT(sessionCookie.value);
  return !!payload;
}

export async function GET(request) {
  try {
    if (!(await isAuthenticated(request))) {
      return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const availability = searchParams.get("availability") || "";
    const interest = searchParams.get("interest") || "";

    // Build Prisma query filters
    const where = {};

    if (search) {
      where.OR = [
        { fullName: { contains: search } },
        { email: { contains: search } },
        { phone: { contains: search } },
        { skills: { contains: search } },
      ];
    }

    if (status && status !== "All") {
      where.status = status;
    }

    if (availability && availability !== "All") {
      where.availability = { contains: availability };
    }

    if (interest && interest !== "All") {
      where.interests = { contains: interest };
    }

    const volunteers = await db.volunteer.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(volunteers, { status: 200 });
  } catch (error) {
    console.error("Fetch volunteers error:", error);
    return NextResponse.json({ error: "Failed to load volunteers." }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    if (!(await isAuthenticated(request))) {
      return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
    }

    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "ID and status are required." }, { status: 400 });
    }

    const updated = await db.volunteer.update({
      where: { id: parseInt(id) },
      data: { status },
    });

    return NextResponse.json({ message: "Status updated successfully!", data: updated }, { status: 200 });
  } catch (error) {
    console.error("Update volunteer error:", error);
    return NextResponse.json({ error: "Failed to update volunteer." }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    if (!(await isAuthenticated(request))) {
      return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required." }, { status: 400 });
    }

    await db.volunteer.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json({ message: "Volunteer deleted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Delete volunteer error:", error);
    return NextResponse.json({ error: "Failed to delete volunteer." }, { status: 500 });
  }
}
