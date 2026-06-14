import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyJWT } from "@/lib/auth";
import { db } from "@/lib/db";
import DashboardClient from "./DashboardClient";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("admin_session");

  if (!sessionCookie) {
    redirect("/admin/login");
  }

  const payload = await verifyJWT(sessionCookie.value);
  if (!payload) {
    redirect("/admin/login");
  }

  const initialVolunteers = await db.volunteer.findMany({
    orderBy: { createdAt: "desc" },
  });

  const serializedVolunteers = initialVolunteers.map((v) => ({
    ...v,
    createdAt: v.createdAt.toISOString(),
  }));

  return <DashboardClient initialVolunteers={serializedVolunteers} />;
}
