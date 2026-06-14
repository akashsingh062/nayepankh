import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificateSlider from "@/components/CertificateSlider";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const stats = [
    { value: "2 Lakh+", label: "People Impacted", delay: "" },
    { value: "10+", label: "Cities Covered", delay: "delay-100" },
    { value: "100%", label: "Student Led Team", delay: "delay-200" },
    { value: "80G", label: "Tax Benefits", delay: "delay-300" },
  ];

  return (
    <>
      <Header />

      <main className="home-main flex-grow bg-white dark:bg-[#18191a] text-[#1d1e20] dark:text-[#f5f6f7] transition-colors duration-300">
        <section className="relative min-h-[90vh] flex items-center justify-center py-space-2 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/whatsapp-image-2023-01-31-at-9.40.45-pm-dWxpDb2pNbCaxERZ.jpeg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <ScrollReveal className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2.5 rounded-radius-xs border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-8">
                <svg className="h-4 w-4 text-primary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708.523L4.547 7.75H1.75a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h2.797l1.012 3.772a.75.75 0 00.708.523h7.466a.75.75 0 00.708-.523L15.453 13.75h2.797a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-2.797l-1.012-3.772a.75.75 0 00-.708-.523H6.267zm4.316 2.045H7.135l-.837 3.125h7.404l-.837-3.125h-3.119zm3.523 4.625H5.894l-.837 3.125h8.886l-.837-3.125z" clipRule="evenodd" />
                </svg>
                UP Government, 80G & 12A Registered NGO
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-8">
                It&apos;s that easy to bring a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-amber-400">
                  Smile
                </span>{" "}
                on Their Faces
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
                We don&apos;t ask for much, just help us with what you can - Be it Money, Skill, or Your Time.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Link
                  href="/donate"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-radius-xs bg-gradient-to-r from-primary to-amber-500 px-8 py-4 font-display text-base font-semibold text-white transition-all duration-fast hover:scale-[1.03] active:scale-[0.97]"
                >
                  Donate Now
                </Link>
                <Link
                  href="/about-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-radius-xs bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 font-display text-base font-semibold text-white hover:bg-white/20 transition-all duration-fast"
                >
                  Learn More
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#18191a] to-transparent transition-all duration-300" />
        </section>

        <section className="py-space-2 bg-white dark:bg-[#18191a] relative transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal className="space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-8 bg-primary rounded" />
                  <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                    About Us
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Think global, Act local.
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  NayePankh Foundation is a non-governmental organisation with a strong desire to help society and make it a better place for everyone. We believe that small, locally-driven steps can solve the most challenging global issues.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  As one of India&apos;s leading youth-driven NGOs, our mission focuses on immediate relief and long-term empowerment—providing food, clothes, education, and raising awareness about menstrual health.
                </p>
                <div className="pt-4">
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:text-amber-500 transition-colors group"
                  >
                    LEARN MORE
                    <svg
                      className="h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <ScrollReveal
                    key={idx}
                    delay={stat.delay}
                    className="rounded-2xl bg-gray-50 dark:bg-[#202124] border border-gray-200 dark:border-white/5 p-6 text-center shadow-shadow-1 hover:border-primary/20 dark:hover:border-primary/20 transition-all hover:scale-[1.02]"
                  >
                    <span className="block font-display text-4xl font-extrabold text-primary mb-2">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {stat.label}
                    </span>
                  </ScrollReveal>
                ))}
              </div>

            </div>
          </div>
        </section>

        <section className="py-space-2 bg-gray-50 dark:bg-[#1e2022] border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <ScrollReveal className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2.5 rounded-radius-xs bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                UP GOVT. | 80G & 12A Registered
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                Welcome to NayePankh Foundation
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                We are one of the biggest student-led NGOs in India with operations extended across Kanpur, Ghaziabad, and various other cities. We mobilize the youth power of India to create systemic change.
              </p>
            </ScrollReveal>

            <ScrollReveal className="py-6">
              <h3 className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-8">
                Our Registrations & Certificates
              </h3>
              <CertificateSlider />
            </ScrollReveal>
          </div>
        </section>

        <section className="relative py-space-3 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
            style={{
              backgroundImage: `url('https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center z-10">
            <ScrollReveal className="space-y-8">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Join Our Team
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Become part of a passionate movement to uplift society. Whether you want to share your professional skills, donate your time, or gain hands-on internship experience as a student, we have a place for you.
              </p>
              <div className="pt-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-radius-xs bg-gradient-to-r from-primary to-amber-500 px-8 py-4 font-display text-base font-semibold text-white transition-all duration-fast hover:scale-[1.03] active:scale-[0.97]"
                >
                  JOIN US NOW
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-space-2 bg-white dark:bg-[#18191a] transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="relative rounded-3xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-[#1f2023]/60 p-8 sm:p-16 max-w-4xl mx-auto text-center shadow-shadow-1 overflow-hidden">
                <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-[100px]" />
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-amber-500/10 blur-[100px]" />

                <span className="block font-serif text-8xl text-primary/20 leading-none h-6 select-none -translate-y-4">
                  &ldquo;
                </span>

                <p className="relative font-display text-lg sm:text-2xl font-medium italic text-gray-900 dark:text-white leading-relaxed z-10 mb-8">
                  If we all do something, then together there is no problem that we cannot solve!
                </p>

                <div className="relative z-10">
                  <span className="block text-sm font-semibold uppercase tracking-wider text-primary">
                    PRASHANT SHUKLA
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Founder & President, NayePankh Foundation
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
