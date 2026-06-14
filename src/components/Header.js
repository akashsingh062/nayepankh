"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Certificates", href: "/our-certificates" },
    { name: "NewsPaper-Recognition", href: "/newspaper-recognition" },
    { name: "Volunteer", href: "/volunteer" },
  ];

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    Promise.resolve().then(() => {
      setTheme(isDark ? "dark" : "light");
      setMounted(true);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  const isHome = pathname === "/";
  const isDarkHeroPage = pathname === "/" || pathname === "/about-us";
  const useTransparent = !isScrolled;
  const useWhiteText = useTransparent && isDarkHeroPage;

  const headerPositionClass = "fixed top-0 left-0 w-full";
  const headerBgClass = useTransparent
    ? "bg-transparent border-transparent py-4 shadow-none"
    : "bg-white/95 dark:bg-[#18191a]/95 border-black/5 dark:border-white/5 py-2.5 shadow-md backdrop-blur-md";

  const brandTextClass = useWhiteText
    ? "text-white"
    : "text-black dark:text-white";

  const navLinkClass = (href) => {
    if (isActive(href)) {
      return "text-primary font-semibold";
    }
    return useWhiteText
      ? "text-white/80 hover:text-white"
      : "text-gray-700 dark:text-gray-300 hover:text-primary";
  };

  const iconButtonClass = useWhiteText
    ? "text-white/80 hover:bg-white/10 hover:text-white"
    : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5";

  const adminIconClass = useWhiteText
    ? "text-white/80 hover:text-white hover:bg-white/10"
    : "text-gray-500 dark:text-gray-400 hover:text-primary hover:bg-primary/5";

  const mobileMenuToggleClass = useWhiteText
    ? "text-white hover:bg-white/10"
    : "text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5";

  return (
    <header
      className={`${headerPositionClass} z-50 transition-all duration-300 border-b ${headerBgClass}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between transition-all duration-300">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 transition-all duration-300">
                <Image
                  src="https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png"
                  alt="NayePankh Logo"
                  width={56}
                  height={56}
                  className="object-contain h-full w-full"
                />
              </div>
              <span className={`font-display text-base sm:text-lg font-bold tracking-wider ${brandTextClass} hidden sm:block`}>
                NAYEPANKH
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-display text-sm font-medium transition-colors whitespace-nowrap ${navLinkClass(link.href)}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-colors focus:outline-none ${iconButtonClass}`}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <svg className="h-5 w-5 text-amber-400 rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.727l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-indigo-600 rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <Link
              href="/admin/login"
              className={`p-2.5 rounded-full transition-colors focus:outline-none ${adminIconClass}`}
              aria-label="Admin Portal"
              title="Admin Portal"
            >
              <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-radius-xs bg-gradient-to-r from-primary to-amber-500 px-6 py-2.5 font-display text-sm font-semibold text-white transition-all duration-fast hover:scale-[1.03] active:scale-[0.97]"
            >
              Donate Now
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors focus:outline-none ${iconButtonClass}`}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? (
                <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.727l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center rounded-md p-2 focus:outline-none ${mobileMenuToggleClass}`}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#18191a] px-4 pt-2 pb-4 space-y-2 animate-fade-in-up">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/admin/login"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            Admin Portal
          </Link>

          <div className="pt-4">
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center rounded-radius-xs bg-gradient-to-r from-primary to-amber-500 py-3 font-display text-base font-semibold text-white transition-all duration-fast"
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
