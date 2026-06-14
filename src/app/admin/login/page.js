import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyJWT } from "@/lib/auth";
import LoginClient from "./LoginClient";

export default async function AdminLoginPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("admin_session");

  if (sessionCookie) {
    const payload = await verifyJWT(sessionCookie.value);
    if (payload) {
      redirect("/admin/dashboard");
    }
  }

  return <LoginClient />;
}
