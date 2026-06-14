"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    subject: "",
    content: "",
  });

  const [formState, setFormState] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ loading: true, success: false, error: null });

    setTimeout(() => {
      if (!formData.firstName || !formData.email || !formData.content) {
        setFormState({
          loading: false,
          success: false,
          error: "Please fill in all required fields.",
        });
      } else {
        setFormState({
          loading: false,
          success: true,
          error: null,
        });
        setFormData({ firstName: "", email: "", subject: "", content: "" });
      }
    }, 1500);
  };

  return (
    <>
      <Header />

      <main className="flex-grow bg-white dark:bg-[#18191a] text-[#1d1e20] dark:text-[#f5f6f7] transition-colors duration-300">
        {/* Banner Section */}
        <section className="bg-gray-50 dark:bg-[#1e2022] py-20 border-b border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Connect With Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Contact Us
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Feel free to reach out with any questions, partnership opportunities, or concerns.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white dark:bg-[#18191a] transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Info Card */}
              <div className="lg:col-span-5 space-y-8">
                <ScrollReveal className="rounded-3xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#202124] p-8 shadow-xl space-y-8">
                  <div className="space-y-3">
                    <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Reach out to our leadership directly or visit our main office in Kanpur.
                    </p>
                  </div>

                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Headquarters</span>
                        <span className="text-sm text-gray-800 dark:text-gray-300">104A/279 P Road, Kanpur, Uttar Pradesh, 208012</span>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Call Us</span>
                        <a href="tel:+918318500748" className="text-sm text-gray-800 dark:text-gray-300 hover:text-primary transition-colors">+91-8318500748</a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Email Us</span>
                        <a href="mailto:contact@nayepankh.com" className="text-sm text-gray-800 dark:text-gray-300 hover:text-primary transition-colors">contact@nayepankh.com</a>
                      </div>
                    </li>
                  </ul>
                </ScrollReveal>

                {/* Simulated Map */}
                <ScrollReveal className="rounded-3xl overflow-hidden border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#202124] aspect-video flex items-center justify-center p-6 text-center text-gray-500 dark:text-gray-400" delay="delay-150">
                  <div className="space-y-2">
                    <svg className="h-8 w-8 text-primary mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 12l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span className="block text-sm font-semibold text-gray-900 dark:text-white">Google Maps Location</span>
                    <span className="block text-xs">P Road Market, Kanpur, UP, India</span>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right Column: Contact Form */}
              <ScrollReveal className="lg:col-span-7" delay="delay-100">
                <div className="rounded-3xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#202124] p-8 shadow-2xl space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">Send a Message</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Fill in this form and our team coordinator will reach out to you within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {formState.error && (
                      <div className="rounded-xl bg-accent/15 border border-accent/35 p-4 text-sm text-accent">
                        {formState.error}
                      </div>
                    )}
                    {formState.success && (
                      <div className="rounded-xl bg-green-500/10 border border-green-500/30 p-4 text-sm text-green-600 dark:text-green-400">
                        Thank you for reaching out! Your message was submitted successfully.
                      </div>
                    )}

                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="block w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#18191a] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="block w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#18191a] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Subject input */}
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Volunteer/Internship/Donation Question"
                        className="block w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#18191a] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>

                    {/* Message body input */}
                    <div className="space-y-1.5">
                      <label htmlFor="content" className="block text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Your Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="content"
                        name="content"
                        required
                        rows="5"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Enter your message details here..."
                        className="block w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#18191a] px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formState.loading}
                        className="w-full flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-amber-500 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-primary/10 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all"
                      >
                        {formState.loading ? "Submitting..." : "Submit Message"}
                      </button>
                    </div>

                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
