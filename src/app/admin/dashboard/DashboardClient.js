"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function IconDashboard({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  );
}

function IconUsers({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function IconChart({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );
}

function IconDownload({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}

function IconLogout({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
    </svg>
  );
}

function IconSearch({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function IconTrash({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
  );
}

function IconSun({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.727l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
    </svg>
  );
}

function IconMoon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

function IconMenu({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function IconClose({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconHome({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

const statusCardColors = {
  amber: {
    border: "border-amber-500/20",
    bgLight: "bg-amber-500/5",
    text: "text-amber-500",
    bgBar: "bg-amber-500"
  },
  blue: {
    border: "border-blue-500/20",
    bgLight: "bg-blue-500/5",
    text: "text-blue-500",
    bgBar: "bg-blue-500"
  },
  emerald: {
    border: "border-emerald-500/20",
    bgLight: "bg-emerald-500/5",
    text: "text-emerald-500",
    bgBar: "bg-emerald-500"
  },
  red: {
    border: "border-red-500/20",
    bgLight: "bg-red-500/5",
    text: "text-red-500",
    bgBar: "bg-red-500"
  }
};

export default function DashboardClient({ initialVolunteers }) {
  const router = useRouter();
  const [volunteers, setVolunteers] = useState(initialVolunteers);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [availFilter, setAvailFilter] = useState("All");
  const [interestFilter, setInterestFilter] = useState("All");
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    Promise.resolve().then(() => {
      setTheme(isDark ? "dark" : "light");
      setMounted(true);
    });
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (res.ok) {
        router.push("/admin/login");
      }
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleUpdateStatus = async (id, newStatus) => {
    try {
      const res = await fetch("/api/admin/volunteers", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setVolunteers((prev) =>
          prev.map((v) => (v.id === id ? { ...v, status: newStatus } : v))
        );
      }
    } catch (err) {
      console.error("Update status failed", err);
    }
  };

  const handleDeleteVolunteer = async (id) => {
    if (!confirm("Are you sure you want to delete this registration?")) return;
    try {
      const res = await fetch(`/api/admin/volunteers?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setVolunteers((prev) => prev.filter((v) => v.id !== id));
      }
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const filteredVolunteers = volunteers.filter((v) => {
    const query = search.toLowerCase();
    const matchesSearch =
      v.fullName.toLowerCase().includes(query) ||
      v.email.toLowerCase().includes(query) ||
      v.phone.includes(query) ||
      v.skills.toLowerCase().includes(query);

    const matchesStatus = statusFilter === "All" || v.status === statusFilter;
    const matchesAvail = availFilter === "All" || v.availability.includes(availFilter);
    const matchesInterest = interestFilter === "All" || v.interests.includes(interestFilter);

    return matchesSearch && matchesStatus && matchesAvail && matchesInterest;
  });

  const totalCount = volunteers.length;
  const pendingCount = volunteers.filter((v) => v.status === "Pending").length;
  const contactedCount = volunteers.filter((v) => v.status === "Contacted").length;
  const approvedCount = volunteers.filter((v) => v.status === "Approved").length;
  const rejectedCount = volunteers.filter((v) => v.status === "Rejected").length;

  const interestsTally = {};
  const skillsTally = {};

  volunteers.forEach((v) => {
    v.interests.split(", ").forEach((interest) => {
      if (interest) interestsTally[interest] = (interestsTally[interest] || 0) + 1;
    });
    v.skills.split(", ").forEach((skill) => {
      if (skill) skillsTally[skill] = (skillsTally[skill] || 0) + 1;
    });
  });

  const topInterests = Object.entries(interestsTally)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const topSkills = Object.entries(skillsTally)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const handleExportCSV = () => {
    if (filteredVolunteers.length === 0) {
      alert("No volunteer records found to export.");
      return;
    }

    const headers = ["ID", "Name", "Email", "Phone", "Status", "Availability", "Interests", "Skills", "Date Registered"];
    const rows = filteredVolunteers.map((v) => [
      v.id,
      `"${v.fullName.replace(/"/g, '""')}"`,
      v.email,
      v.phone,
      v.status,
      `"${v.availability.replace(/"/g, '""')}"`,
      `"${v.interests.replace(/"/g, '""')}"`,
      `"${v.skills.replace(/"/g, '""')}"`,
      v.createdAt.split("T")[0],
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `nayepankh_volunteers_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sidebarNav = [
    { id: "overview", label: "Overview", icon: IconDashboard },
    { id: "volunteers", label: "Volunteers", icon: IconUsers },
    { id: "analytics", label: "Analytics", icon: IconChart },
  ];

  const statusColors = {
    Approved: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    Contacted: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    Pending: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    Rejected: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
  };

  const statCards = [
    {
      label: "Total Applications",
      value: totalCount,
      gradient: "from-violet-500 to-purple-600",
      bgGlow: "bg-violet-500/10",
      icon: IconUsers,
    },
    {
      label: "Pending Review",
      value: pendingCount,
      gradient: "from-amber-400 to-orange-500",
      bgGlow: "bg-amber-500/10",
      icon: IconDashboard,
    },
    {
      label: "Contacted",
      value: contactedCount,
      gradient: "from-blue-400 to-indigo-500",
      bgGlow: "bg-blue-500/10",
      icon: IconChart,
    },
    {
      label: "Approved",
      value: approvedCount,
      gradient: "from-emerald-400 to-teal-500",
      bgGlow: "bg-emerald-500/10",
      icon: IconUsers,
    },
  ];

  const chartBarColors = [
    "from-primary to-amber-400",
    "from-violet-500 to-purple-400",
    "from-blue-500 to-indigo-400",
    "from-emerald-500 to-teal-400",
    "from-rose-500 to-pink-400",
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#111113] text-[#1d1e20] dark:text-[#e8e8eb] transition-colors duration-300">

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[260px] dash-sidebar border-r border-gray-200/70 dark:border-white/5 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 px-5 pt-6 pb-4">
          <Link href="/">
            <Image
              src="https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png"
              alt="NayePankh Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
          <div className="flex-1 min-w-0">
            <h1 className="font-display text-sm font-bold text-gray-900 dark:text-white truncate">
              NayePankh
            </h1>
            <p className="text-[10px] font-semibold text-primary uppercase tracking-widest">
              Admin Panel
            </p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-gray-500"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        <div className="mx-5 h-px bg-gray-200 dark:bg-white/5" />

        <nav className="flex-1 px-3 py-4 space-y-1">
          {sidebarNav.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold dash-nav-active"
                    : "text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <Icon className={`h-[18px] w-[18px] flex-shrink-0 ${isActive ? "text-primary" : ""}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="px-3 pb-4 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-all"
          >
            <IconHome className="h-[18px] w-[18px] flex-shrink-0" />
            Back to Site
          </Link>

          <div className="h-px bg-gray-200 dark:bg-white/5" />

          <div className="flex items-center gap-3 px-3 py-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">Admin</p>
              <p className="text-[10px] text-gray-500 dark:text-gray-400">Administrator</p>
            </div>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-colors disabled:opacity-50"
              title="Log out"
            >
              <IconLogout className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      <div className="lg:pl-[260px] min-h-screen flex flex-col min-w-0 w-full">

        <header className="sticky top-0 z-30 bg-white/80 dark:bg-[#111113]/80 backdrop-blur-xl border-b border-gray-200/70 dark:border-white/5">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-gray-600 dark:text-gray-400 transition-colors"
              >
                <IconMenu className="h-5 w-5" />
              </button>
              <div>
                <h2 className="font-display text-base font-bold text-gray-900 dark:text-white leading-tight">
                  {activeTab === "overview" && "Dashboard Overview"}
                  {activeTab === "volunteers" && "Volunteer Directory"}
                  {activeTab === "analytics" && "Analytics & Reports"}
                </h2>
                <p className="text-[11px] text-gray-500 dark:text-gray-400 hidden sm:block">
                  {activeTab === "overview" && "Monitor volunteer applications at a glance"}
                  {activeTab === "volunteers" && "Search, filter and manage registrations"}
                  {activeTab === "analytics" && "Insights from campaign and skill data"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Toggle theme"
              >
                {mounted ? (
                  theme === "dark" ? (
                    <IconSun className="h-[18px] w-[18px] text-amber-400" />
                  ) : (
                    <IconMoon className="h-[18px] w-[18px] text-indigo-500" />
                  )
                ) : (
                  <IconMoon className="h-[18px] w-[18px] text-indigo-500 opacity-0" />
                )}
              </button>

              <button
                onClick={handleExportCSV}
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-xs font-semibold shadow-sm transition-all active:scale-[0.98]"
              >
                <IconDownload className="h-3.5 w-3.5" />
                Export CSV
              </button>
            </div>
          </div>
        </header>

        <main className="dash-main flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-6 min-w-0 w-full">

          {activeTab === "overview" && (
            <>
              <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {statCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.label}
                      className={`dash-fade-in dash-delay-${idx + 1} group relative overflow-hidden bg-white dark:bg-[#1a1a1d] rounded-2xl border border-gray-200/60 dark:border-white/5 p-5 transition-all hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 hover:-translate-y-0.5`}
                    >
                      <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${card.gradient}`} />

                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            {card.label}
                          </p>
                          <p className="font-display text-3xl font-extrabold text-gray-900 dark:text-white">
                            {card.value}
                          </p>
                          {totalCount > 0 && (
                            <p className="text-[10px] text-gray-400">
                              {card.label === "Total Applications"
                                ? "All registrations"
                                : `${Math.round((card.value / totalCount) * 100)}% of total`}
                            </p>
                          )}
                        </div>
                        <div className={`p-2.5 rounded-xl ${card.bgGlow} transition-all group-hover:scale-110`}>
                          <Icon className={`h-5 w-5 bg-gradient-to-br ${card.gradient} bg-clip-text`} style={{ color: 'currentColor' }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="dash-fade-in dash-delay-5 bg-white dark:bg-[#1a1a1d] rounded-2xl border border-gray-200/60 dark:border-white/5 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white">
                        Campaign Interest
                      </h3>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                        Top campaigns by volunteer preference
                      </p>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded-lg bg-primary/10 text-primary font-semibold">
                      Top 5
                    </span>
                  </div>
                  <div className="space-y-4">
                    {topInterests.length === 0 ? (
                      <p className="text-sm text-gray-400 text-center py-8">No data yet.</p>
                    ) : (
                      topInterests.map(([label, count], idx) => {
                        const percent = totalCount > 0 ? Math.round((count / totalCount) * 100) : 0;
                        return (
                          <div key={label} className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-medium text-gray-700 dark:text-gray-300 truncate max-w-[70%]">{label}</span>
                              <span className="font-bold text-gray-900 dark:text-white">{count} <span className="font-normal text-gray-400">({percent}%)</span></span>
                            </div>
                            <div className="h-2.5 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${chartBarColors[idx % chartBarColors.length]} dash-bar-animated`}
                                style={{ width: `${percent}%`, animationDelay: `${idx * 100 + 200}ms` }}
                              />
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                <div className="dash-fade-in dash-delay-6 bg-white dark:bg-[#1a1a1d] rounded-2xl border border-gray-200/60 dark:border-white/5 p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white">
                        Top Skills
                      </h3>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                        Most common volunteer talents
                      </p>
                    </div>
                    <span className="text-[10px] px-2 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 font-semibold">
                      Top 5
                    </span>
                  </div>
                  <div className="space-y-4">
                    {topSkills.length === 0 ? (
                      <p className="text-sm text-gray-400 text-center py-8">No data yet.</p>
                    ) : (
                      topSkills.map(([label, count], idx) => {
                        const percent = totalCount > 0 ? Math.round((count / totalCount) * 100) : 0;
                        return (
                          <div key={label} className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-medium text-gray-700 dark:text-gray-300 truncate max-w-[70%]">{label}</span>
                              <span className="font-bold text-gray-900 dark:text-white">{count} <span className="font-normal text-gray-400">({percent}%)</span></span>
                            </div>
                            <div className="h-2.5 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${chartBarColors[(idx + 2) % chartBarColors.length]} dash-bar-animated`}
                                style={{ width: `${percent}%`, animationDelay: `${idx * 100 + 200}ms` }}
                              />
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>

              <div className="dash-fade-in dash-delay-3 bg-white dark:bg-[#1a1a1d] rounded-2xl border border-gray-200/60 dark:border-white/5 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white">
                    Recent Applications
                  </h3>
                  <button
                    onClick={() => setActiveTab("volunteers")}
                    className="text-[11px] font-semibold text-primary hover:text-primary-dark transition-colors"
                  >
                    View All →
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-xs">
                    <thead>
                      <tr className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-white/5">
                        <th className="py-2.5 pr-4">Name</th>
                        <th className="py-2.5 pr-4">Email</th>
                        <th className="py-2.5 pr-4">Campaign</th>
                        <th className="py-2.5 pr-4">Status</th>
                        <th className="py-2.5">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                      {volunteers.slice(0, 5).map((v) => (
                        <tr key={v.id} className="hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors">
                          <td className="py-3 pr-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{v.fullName}</td>
                          <td className="py-3 pr-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">{v.email}</td>
                          <td className="py-3 pr-4 whitespace-nowrap">
                            <span className="inline-flex px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-medium">
                              {v.interests.split(", ")[0]}
                            </span>
                          </td>
                          <td className="py-3 pr-4 whitespace-nowrap">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${statusColors[v.status] || statusColors.Pending}`}>
                              <span className={`h-1.5 w-1.5 rounded-full ${
                                v.status === "Approved" ? "bg-emerald-500" :
                                v.status === "Contacted" ? "bg-blue-500" :
                                v.status === "Rejected" ? "bg-red-500" :
                                "bg-amber-500"
                              }`} />
                              {v.status}
                            </span>
                          </td>
                          <td className="py-3 text-gray-400 font-mono text-[10px] whitespace-nowrap">{v.createdAt.split("T")[0]}</td>
                        </tr>
                      ))}
                      {volunteers.length === 0 && (
                        <tr>
                          <td colSpan="5" className="text-center py-8 text-gray-400">No registrations yet.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === "volunteers" && (
            <div className="dash-fade-in space-y-5">
              <div className="bg-white dark:bg-[#1a1a1d] rounded-2xl border border-gray-200/60 dark:border-white/5 p-5">
                <div className="flex flex-col lg:flex-row lg:items-end gap-4">
                  <div className="flex-1 space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Search</label>
                    <div className="relative">
                      <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search by name, email, phone, skills..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        suppressHydrationWarning={true}
                        className="w-full rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#111113] pl-10 pr-4 py-2.5 text-sm placeholder-gray-400 focus:border-primary focus:bg-white dark:focus:bg-black/20 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Status</label>
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="w-full lg:w-36 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#111113] px-3 py-2.5 text-sm focus:outline-none focus:border-primary cursor-pointer text-gray-700 dark:text-gray-300"
                    >
                      <option value="All">All Statuses</option>
                      <option value="Pending">Pending</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Availability</label>
                    <select
                      value={availFilter}
                      onChange={(e) => setAvailFilter(e.target.value)}
                      className="w-full lg:w-40 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#111113] px-3 py-2.5 text-sm focus:outline-none focus:border-primary cursor-pointer text-gray-700 dark:text-gray-300"
                    >
                      <option value="All">All Availabilities</option>
                      <option value="Weekdays">Weekdays</option>
                      <option value="Weekends">Weekends</option>
                      <option value="Flexible">Flexible</option>
                      <option value="Holidays">Holidays Only</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Campaign</label>
                    <select
                      value={interestFilter}
                      onChange={(e) => setInterestFilter(e.target.value)}
                      className="w-full lg:w-40 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#111113] px-3 py-2.5 text-sm focus:outline-none focus:border-primary cursor-pointer text-gray-700 dark:text-gray-300"
                    >
                      <option value="All">All Campaigns</option>
                      <option value="Food Drive">Food Drive</option>
                      <option value="Sanitary Napkins">Sanitary Napkins</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Education">Education</option>
                      <option value="Animals Rescue">Animal Rescue</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-white/5">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Showing <span className="font-bold text-gray-900 dark:text-white">{filteredVolunteers.length}</span> of {totalCount} records
                  </p>
                  <button
                    onClick={handleExportCSV}
                    className="sm:hidden inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 text-[11px] font-semibold transition-all"
                  >
                    <IconDownload className="h-3 w-3" />
                    CSV
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-[#1a1a1d] rounded-2xl border border-gray-200/60 dark:border-white/5 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200/60 dark:divide-white/5 text-left text-xs sm:text-sm">
                    <thead className="bg-gray-50/80 dark:bg-[#111113]/80">
                      <tr className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        <th className="px-5 py-3.5">Volunteer</th>
                        <th className="px-5 py-3.5">Skills & Availability</th>
                        <th className="px-5 py-3.5">Campaigns</th>
                        <th className="px-5 py-3.5">Status</th>
                        <th className="px-5 py-3.5 text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                      {filteredVolunteers.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center py-16">
                            <div className="flex flex-col items-center gap-2">
                              <IconSearch className="h-8 w-8 text-gray-300 dark:text-gray-600" />
                              <p className="text-sm text-gray-400">No records matched your search criteria.</p>
                              <button
                                onClick={() => { setSearch(""); setStatusFilter("All"); setAvailFilter("All"); setInterestFilter("All"); }}
                                className="text-[11px] font-semibold text-primary hover:text-primary-dark mt-1"
                              >
                                Clear all filters
                              </button>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        filteredVolunteers.map((v, idx) => (
                          <tr
                            key={v.id}
                            className="hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors group"
                          >
                            <td className="px-5 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/20 to-amber-400/20 dark:from-primary/10 dark:to-amber-400/10 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">
                                  {v.fullName.charAt(0).toUpperCase()}
                                </div>
                                <div className="min-w-0">
                                  <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{v.fullName}</p>
                                  <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{v.email}</p>
                                  <p className="text-[10px] text-gray-400 font-mono">{v.phone}</p>
                                </div>
                              </div>
                            </td>

                            <td className="px-5 py-4 max-w-[220px] whitespace-nowrap">
                              <div className="flex flex-wrap gap-1 mb-1.5">
                                {v.skills.split(", ").slice(0, 3).map((s) => (
                                  <span
                                    key={s}
                                    className="inline-flex rounded-md bg-indigo-500/8 dark:bg-indigo-500/10 border border-indigo-500/15 dark:border-indigo-500/15 px-1.5 py-0.5 text-[9px] font-medium text-indigo-600 dark:text-indigo-400"
                                  >
                                    {s}
                                  </span>
                                ))}
                                {v.skills.split(", ").length > 3 && (
                                  <span className="text-[9px] text-gray-400 self-center">+{v.skills.split(", ").length - 3}</span>
                                )}
                              </div>
                              <p className="text-[10px] text-gray-500 dark:text-gray-400">
                                🗓️ {v.availability}
                              </p>
                            </td>

                            <td className="px-5 py-4 max-w-[200px] whitespace-nowrap">
                              <div className="flex flex-wrap gap-1">
                                {v.interests.split(", ").map((i) => (
                                  <span
                                    key={i}
                                    className="inline-flex rounded-md bg-amber-500/8 dark:bg-amber-500/10 border border-amber-500/15 dark:border-amber-500/15 px-1.5 py-0.5 text-[9px] font-medium text-amber-600 dark:text-amber-400"
                                  >
                                    {i}
                                  </span>
                                ))}
                              </div>
                            </td>

                            <td className="px-5 py-4 whitespace-nowrap">
                              <div className="space-y-2">
                                <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${statusColors[v.status] || statusColors.Pending}`}>
                                  <span className={`h-1.5 w-1.5 rounded-full ${
                                    v.status === "Approved" ? "bg-emerald-500" :
                                    v.status === "Contacted" ? "bg-blue-500" :
                                    v.status === "Rejected" ? "bg-red-500" :
                                    "bg-amber-500"
                                  }`} />
                                  {v.status}
                                </span>
                                <select
                                  value={v.status}
                                  onChange={(e) => handleUpdateStatus(v.id, e.target.value)}
                                  className="block w-full rounded-lg border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#111113] px-2 py-1 text-[11px] focus:outline-none focus:border-primary cursor-pointer text-gray-700 dark:text-gray-300"
                                >
                                  <option value="Pending">Pending</option>
                                  <option value="Contacted">Contacted</option>
                                  <option value="Approved">Approved</option>
                                  <option value="Rejected">Rejected</option>
                                </select>
                              </div>
                            </td>

                            <td className="px-5 py-4 text-center whitespace-nowrap">
                              <button
                                onClick={() => handleDeleteVolunteer(v.id)}
                                className="p-2 rounded-xl text-gray-400 hover:text-red-500 hover:bg-red-500/10 transition-all opacity-60 group-hover:opacity-100"
                                aria-label="Delete registration"
                              >
                                <IconTrash className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="dash-fade-in space-y-6">
              <div className="bg-white dark:bg-[#1a1a1d] rounded-2xl border border-gray-200/60 dark:border-white/5 p-6">
                <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white mb-5">
                  Status Distribution
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: "Pending", count: pendingCount, color: "amber" },
                    { label: "Contacted", count: contactedCount, color: "blue" },
                    { label: "Approved", count: approvedCount, color: "emerald" },
                    { label: "Rejected", count: rejectedCount, color: "red" },
                  ].map((s) => {
                    const pct = totalCount > 0 ? Math.round((s.count / totalCount) * 100) : 0;
                    const cardColors = statusCardColors[s.color] || statusCardColors.amber;
                    return (
                      <div key={s.label} className={`rounded-xl border ${cardColors.border} ${cardColors.bgLight} p-4 text-center`}>
                        <p className={`text-2xl font-extrabold ${cardColors.text} font-display`}>{s.count}</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">{s.label}</p>
                        <div className="mt-2 h-1.5 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${cardColors.bgBar} dash-bar-animated`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1">{pct}%</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#1a1a1d] rounded-2xl border border-gray-200/60 dark:border-white/5 p-6">
                  <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white mb-1">
                    Campaign Interest Breakdown
                  </h3>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-5">Based on applicant campaign preferences</p>
                  <div className="space-y-4">
                    {topInterests.length === 0 ? (
                      <p className="text-sm text-gray-400 text-center py-8">No data yet.</p>
                    ) : (
                      topInterests.map(([label, count], idx) => {
                        const percent = totalCount > 0 ? Math.round((count / totalCount) * 100) : 0;
                        return (
                          <div key={label} className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-medium text-gray-700 dark:text-gray-300">{label}</span>
                              <span className="font-bold text-gray-900 dark:text-white">{count} <span className="font-normal text-gray-400">({percent}%)</span></span>
                            </div>
                            <div className="h-3 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${chartBarColors[idx % chartBarColors.length]} dash-bar-animated`}
                                style={{ width: `${percent}%`, animationDelay: `${idx * 120}ms` }}
                              />
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

                <div className="bg-white dark:bg-[#1a1a1d] rounded-2xl border border-gray-200/60 dark:border-white/5 p-6">
                  <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white mb-1">
                    Volunteer Skills Breakdown
                  </h3>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-5">Based on volunteer talent listings</p>
                  <div className="space-y-4">
                    {topSkills.length === 0 ? (
                      <p className="text-sm text-gray-400 text-center py-8">No data yet.</p>
                    ) : (
                      topSkills.map(([label, count], idx) => {
                        const percent = totalCount > 0 ? Math.round((count / totalCount) * 100) : 0;
                        return (
                          <div key={label} className="space-y-1.5">
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-medium text-gray-700 dark:text-gray-300">{label}</span>
                              <span className="font-bold text-gray-900 dark:text-white">{count} <span className="font-normal text-gray-400">({percent}%)</span></span>
                            </div>
                            <div className="h-3 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${chartBarColors[(idx + 2) % chartBarColors.length]} dash-bar-animated`}
                                style={{ width: `${percent}%`, animationDelay: `${idx * 120}ms` }}
                              />
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-amber-500/10 dark:from-primary/5 dark:to-amber-500/5 rounded-2xl border border-primary/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white">
                    Generate Report
                  </h3>
                  <p className="text-[11px] text-gray-600 dark:text-gray-400 mt-0.5">
                    Export current volunteer data to CSV format for offline analysis.
                  </p>
                </div>
                <button
                  onClick={handleExportCSV}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-amber-500 text-white px-6 py-2.5 text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <IconDownload className="h-4 w-4" />
                  Download CSV Report
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
