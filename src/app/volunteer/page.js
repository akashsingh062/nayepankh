"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function VolunteerRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: [],
    availability: "",
    interests: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const skillsList = [
    "Social Media & Marketing",
    "Content Writing / Blogging",
    "Event Organizing",
    "Graphic Design & Branding",
    "Photography & Video Editing",
    "Teaching & Child Tutoring",
    "Fundraising & Partnerships",
    "Logistics & Field Support",
  ];

  const interestList = [
    "Food Drive & Nutrition Support",
    "Sanitary Napkins Distribution",
    "Clothing & Blanket Drives",
    "Kids Education & Activity Camps",
    "Stray Animals Rescue & Care",
  ];

  const availabilityOptions = [
    "Weekdays (Mon - Fri)",
    "Weekends (Sat - Sun)",
    "Flexible (Both Weekdays & Weekends)",
    "Holidays / Special Events Only",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name, item) => {
    setFormData((prev) => {
      const current = prev[name];
      const updated = current.includes(item)
        ? current.filter((x) => x !== item)
        : [...current, item];
      return { ...prev, [name]: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const scrollToTop = () => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch (err) {
        window.scrollTo(0, 0);
      }
    };

    if (formData.skills.length === 0) {
      setError("Please select at least one skill.");
      setIsSubmitting(false);
      scrollToTop();
      return;
    }

    if (formData.interests.length === 0) {
      setError("Please select at least one area of interest.");
      setIsSubmitting(false);
      scrollToTop();
      return;
    }

    try {
      const response = await fetch("/api/volunteer/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          skills: formData.skills.join(", "),
          interests: formData.interests.join(", "),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to register.");
      }

      setSuccess(true);
      scrollToTop();
    } catch (err) {
      setError(err.message);
      scrollToTop();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="volunteer-main flex-grow bg-gray-50 dark:bg-[#18191a] text-[#1d1e20] dark:text-[#f5f6f7] transition-colors duration-300 py-space-2">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <span className="font-display text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Be the Change
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Join Us as a Volunteer
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
              Lend your hands, share your skills, and impact lives. Together, let&apos;s create a better tomorrow for those in need.
            </p>
          </div>

          <ScrollReveal className="bg-white dark:bg-[#202124] rounded-3xl border border-gray-200 dark:border-white/5 p-6 sm:p-10 shadow-shadow-1 transition-colors">
            {success ? (
              <div className="text-center py-10 space-y-6 animate-fade-in">
                <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/20 text-emerald-500">
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                    Registration Successful!
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                    Thank you for signing up to volunteer with NayePankh Foundation. Our operations coordinator will review your skills and contact you shortly.
                  </p>
                </div>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        skills: [],
                        availability: "",
                        interests: [],
                      });
                    }}
                    className="inline-flex items-center justify-center rounded-radius-xs bg-primary hover:bg-primary-dark text-white px-6 py-2.5 font-display text-sm font-semibold shadow-shadow-1 transition-all duration-fast hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {error && (
                  <div className="flex items-center gap-3 rounded-radius-xs border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-950/20 px-4 py-3 text-sm text-red-600 dark:text-red-400">
                    <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <span>{error}</span>
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="font-display text-base sm:text-lg font-bold border-b border-gray-150 dark:border-white/5 pb-2 text-gray-900 dark:text-white">
                    Personal Details
                  </h3>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        suppressHydrationWarning={true}
                        className="w-full rounded-radius-xs border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#18191a] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:bg-white dark:focus:bg-black/20 focus:outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        suppressHydrationWarning={true}
                        className="w-full rounded-radius-xs border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#18191a] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:bg-white dark:focus:bg-black/20 focus:outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-1.5 sm:col-span-2">
                      <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        suppressHydrationWarning={true}
                        className="w-full rounded-radius-xs border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#18191a] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary focus:bg-white dark:focus:bg-black/20 focus:outline-none transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-base sm:text-lg font-bold border-b border-gray-150 dark:border-white/5 pb-2 text-gray-900 dark:text-white">
                    Skills & Talents
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Select the skills you would like to offer (Select all that apply):
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {skillsList.map((skill) => {
                      const selected = formData.skills.includes(skill);
                      return (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => handleCheckboxChange("skills", skill)}
                          className={`flex items-center gap-3 rounded-radius-xs border p-4 text-left text-sm transition-all focus:outline-none ${
                            selected
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#18191a] text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white/10"
                          }`}
                        >
                          <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border transition-all ${
                            selected ? "border-primary bg-primary text-white" : "border-gray-300 dark:border-white/20"
                          }`}>
                            {selected && (
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            )}
                          </div>
                          <span className="font-medium">{skill}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-base sm:text-lg font-bold border-b border-gray-150 dark:border-white/5 pb-2 text-gray-900 dark:text-white">
                    Areas of Interest
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Which NayePankh social campaign triggers your passion? (Select all that apply):
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {interestList.map((interest) => {
                      const selected = formData.interests.includes(interest);
                      return (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleCheckboxChange("interests", interest)}
                          className={`flex items-center gap-3 rounded-radius-xs border p-4 text-left text-sm transition-all focus:outline-none ${
                            selected
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#18191a] text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-white/10"
                          }`}
                        >
                          <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border transition-all ${
                            selected ? "border-primary bg-primary text-white" : "border-gray-300 dark:border-white/20"
                          }`}>
                            {selected && (
                              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            )}
                          </div>
                          <span className="font-medium">{interest}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-base sm:text-lg font-bold border-b border-gray-150 dark:border-white/5 pb-2 text-gray-900 dark:text-white">
                    Availability & Schedule
                  </h3>
                  <div className="space-y-1.5">
                    <label htmlFor="availability" className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Standard Availability
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full rounded-radius-xs border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#18191a] px-4 py-3 text-sm focus:border-primary focus:bg-white dark:focus:bg-black/20 focus:outline-none transition-all cursor-pointer text-gray-700 dark:text-gray-300"
                    >
                      <option value="" disabled className="bg-white dark:bg-[#202124] text-gray-500 dark:text-gray-400">Select your availability</option>
                      {availabilityOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white dark:bg-[#202124] text-gray-900 dark:text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-150 dark:border-white/5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center rounded-radius-xs bg-gradient-to-r from-primary to-amber-500 px-8 py-3 text-base font-semibold text-white shadow-shadow-1 transition-all duration-fast hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting Application...
                      </span>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
