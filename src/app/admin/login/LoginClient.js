"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginClient() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed.");
      }

      router.push("/admin/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-[#18191a] text-[#1d1e20] dark:text-[#f5f6f7] transition-colors duration-300 px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-md space-y-8 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <Link href="/" className="inline-block transition-transform hover:scale-[1.03]">
            <Image
              src="https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png"
              alt="NayePankh Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </Link>
          <div className="space-y-1">
            <h1 className="font-display text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              NayePankh Portal
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-semibold">
              Administrative Login
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-[#202124] rounded-3xl border border-gray-200 dark:border-white/5 p-6 sm:p-8 shadow-xl transition-colors">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-center gap-3 rounded-2xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-950/20 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-1.5">
              <label htmlFor="username" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Username
              </label>
              <input
                id="username"
                type="text"
                name="username"
                required
                value={credentials.username}
                onChange={handleChange}
                suppressHydrationWarning={true}
                className="w-full rounded-radius-xs border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#18191a] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:bg-white dark:focus:bg-black/20 focus:outline-none transition-all duration-fast"
                placeholder="admin"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                value={credentials.password}
                onChange={handleChange}
                suppressHydrationWarning={true}
                className="w-full rounded-radius-xs border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#18191a] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:bg-white dark:focus:bg-black/20 focus:outline-none transition-all duration-fast"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center rounded-radius-xs bg-primary hover:bg-primary-dark py-3 font-display text-sm font-semibold text-white shadow-shadow-1 transition-all duration-fast hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Authenticating...
                </span>
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>

        <div className="text-center">
          <Link href="/" className="text-xs font-semibold uppercase tracking-wider text-gray-500 hover:text-primary transition-colors">
            ← Back to Main Site
          </Link>
        </div>

      </div>
    </div>
  );
}
