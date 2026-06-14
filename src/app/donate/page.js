"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Donate() {
  const [copiedField, setCopiedField] = useState(null);

  const bankDetails = {
    accountName: "NayePankh Foundation",
    accountNumber: "50200067341850",
    bankName: "HDFC Bank",
    ifscCode: "HDFC0000279",
    branch: "P Road, Kanpur",
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const impactPoints = [
    { amount: "₹500", detail: "Provides hot, fresh meals to a family for one whole week.", delay: "" },
    { amount: "₹1,200", detail: "Sponsors an educational kit (books, bag, stationery) for a child.", delay: "delay-100" },
    { amount: "₹2,500", detail: "Distributes sanitary pads to 15 rural women for three months.", delay: "delay-200" },
    { amount: "₹5,000", detail: "Supports stray animal medical treatments and feeding for a month.", delay: "delay-300" },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow bg-white dark:bg-[#18191a] text-[#1d1e20] dark:text-[#f5f6f7] transition-colors duration-300">
        {/* Banner Section */}
        <section className="bg-gray-50 dark:bg-[#1e2022] py-20 border-b border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Empower Others
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Together, Let&apos;s Make a Difference!
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Your contribution, no matter how small, has the power to feed a family, educate a child, or save a life.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white dark:bg-[#18191a] transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Appeal Letter */}
              <div className="lg:col-span-7 space-y-8">
                {/* Founder Appeal */}
                <ScrollReveal className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-8 bg-primary rounded" />
                    <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                      A Personal Appeal
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                    Dear Supporters, Friends, and Well-wishers,
                  </h2>
                  <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    <p>
                      Imagine for a moment that you are struggling for your next meal, or that your children are unable to go to school because of the lack of basic books and pens. For millions in underprivileged communities across India, this struggle is a daily reality.
                    </p>
                    <p>
                      NayePankh Foundation was initiated to bring about actual ground-level change. During COVID-19, our young student team mobilized to save lives. Today, we continue that fight against poverty, hunger, and poor sanitization.
                    </p>
                    <p>
                      All our efforts are made possible only because of your support. By contributing, you are partnering with us to build a better future. 100% of your contributions go directly into funding our relief and educational operations.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full border border-gray-200 dark:border-white/10 overflow-hidden bg-gray-100 dark:bg-black/20">
                      <div className="h-full w-full bg-gradient-to-tr from-primary to-amber-500 flex items-center justify-center font-bold text-white">
                        PS
                      </div>
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-gray-900 dark:text-white">Prashant Shukla</span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">Founder & President, NayePankh Foundation</span>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Impact breakdown */}
                <div className="space-y-6 pt-6">
                  <ScrollReveal>
                    <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white">How Your Gift is Spent</h3>
                  </ScrollReveal>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {impactPoints.map((item, idx) => (
                      <ScrollReveal
                        key={idx}
                        delay={item.delay}
                        className="rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#202124] p-5 space-y-2"
                      >
                        <span className="block text-xl font-bold text-primary">{item.amount}</span>
                        <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{item.detail}</p>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Donation Widget */}
              <div className="lg:col-span-5 space-y-8">
                {/* Razorpay Donation Box */}
                <ScrollReveal className="rounded-3xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#202124] p-8 shadow-2xl space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">Secure Donation</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Donate safely using Credit Cards, Debit Cards, NetBanking, UPI, or Wallets.</p>
                  </div>

                  <a
                    href="https://pages.razorpay.com/pl_NUcVhpQzK8rI1b/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-amber-500 py-4 font-display text-base font-semibold text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Proceed to Donation Portal
                    <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>

                  <div className="rounded-2xl bg-white dark:bg-[#18191a] border border-gray-200 dark:border-white/5 p-4 flex items-start gap-3">
                    <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-normal">
                      Payments are processed securely via **Razorpay**. Your donations are eligible for tax deductions under **Section 80G** of the IT Act.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Bank Transfer Box */}
                <ScrollReveal className="rounded-3xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#202124] p-8 shadow-2xl space-y-6" delay="delay-150">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">Direct Bank Transfer</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Transfer donations directly to our organization account using NEFT/IMPS/RTGS.</p>
                  </div>

                  <div className="space-y-4 text-sm">
                    {/* Account Name */}
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/5 pb-2">
                      <div>
                        <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase">Account Name</span>
                        <span className="font-medium text-gray-900 dark:text-white">{bankDetails.accountName}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(bankDetails.accountName, "name")}
                        className="text-xs text-primary hover:text-amber-500 transition-colors font-semibold"
                      >
                        {copiedField === "name" ? "Copied!" : "Copy"}
                      </button>
                    </div>

                    {/* Account Number */}
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/5 pb-2">
                      <div>
                        <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase">Account Number</span>
                        <span className="font-mono font-medium text-gray-900 dark:text-white">{bankDetails.accountNumber}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(bankDetails.accountNumber, "number")}
                        className="text-xs text-primary hover:text-amber-500 transition-colors font-semibold"
                      >
                        {copiedField === "number" ? "Copied!" : "Copy"}
                      </button>
                    </div>

                    {/* Bank Name */}
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/5 pb-2">
                      <div>
                        <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase">Bank Name</span>
                        <span className="font-medium text-gray-900 dark:text-white">{bankDetails.bankName}</span>
                      </div>
                    </div>

                    {/* IFSC Code */}
                    <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/5 pb-2">
                      <div>
                        <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase">IFSC Code</span>
                        <span className="font-mono font-medium text-gray-900 dark:text-white">{bankDetails.ifscCode}</span>
                      </div>
                      <button
                        onClick={() => copyToClipboard(bankDetails.ifscCode, "ifsc")}
                        className="text-xs text-primary hover:text-amber-500 transition-colors font-semibold"
                      >
                        {copiedField === "ifsc" ? "Copied!" : "Copy"}
                      </button>
                    </div>

                    {/* Branch */}
                    <div className="flex items-center justify-between pb-2">
                      <div>
                        <span className="block text-xs text-gray-500 dark:text-gray-400 uppercase">Branch</span>
                        <span className="font-medium text-gray-900 dark:text-white">{bankDetails.branch}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
