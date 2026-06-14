import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function AboutUs() {
  const coreAreas = [
    {
      title: "Food Distribution",
      description: "Providing hot nutritious meals to underprivileged families, homeless individuals, and extending support to feeding stray animals in urban areas.",
      delay: "",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.727l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Sanitary Napkins & Hygiene",
      description: "Breaking taboos and educating women in rural and slum communities about menstrual hygiene. We distribute free sanitary napkins to promote health and dignity.",
      delay: "delay-100",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Clothing Distribution",
      description: "Collecting, sorting, and distributing clothes and blankets to help the homeless survive harsh winters and rebuild after natural disasters.",
      delay: "delay-200",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Underprivileged Education",
      description: "Empowering children with educational materials, informal tutoring, and literacy sessions to enable equal developmental opportunities.",
      delay: "delay-300",
      icon: (
        <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow bg-white dark:bg-[#18191a] text-[#1d1e20] dark:text-[#f5f6f7] transition-colors duration-300">
        {/* Banner Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center py-20 border-b border-gray-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.06-am-mp8eQ9De2eHjvE3j.jpeg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/65" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10 space-y-4 w-full">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Who We Are
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              About Us
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Learn about our journey, our values, and our commitment to building a progressive India.
            </p>
          </div>
        </section>

        {/* History / How it Started Section */}
        <section className="py-24 bg-white dark:bg-[#18191a] transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Text Area */}
              <ScrollReveal className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2">
                  <span className="h-1 w-8 bg-primary rounded" />
                  <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                    Our Roots
                  </span>
                </div>
                <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  How it started?
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  As we all know, 2020 was a year the world was striving to survive the global pandemic of COVID-19. During these dire times, when communities were broken and families were struggling for basic survival, we felt a deep urge to make an impact with whatever we had.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  What started as a small initiative by passionate high schoolers to provide food packets and emergency sanitary supplies has since expanded into a state-wide youth-led movement.
                </p>
                <div className="rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#202124] p-5">
                  <p className="text-sm italic text-gray-800 dark:text-gray-300 leading-relaxed">
                    &ldquo;We officially launched on <span className="text-primary font-semibold">28th March 2021</span>. Since then, our resolve to serve has only strengthened, growing from a small group of friends into a network spanning multiple cities.&rdquo;
                  </p>
                </div>
              </ScrollReveal>

              {/* Graphical / Collage Area */}
              <ScrollReveal className="lg:col-span-5 relative" delay="delay-150">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 relative bg-gray-100">
                  <Image
                    src="https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-05-at-9.13.05-am-AzGEo7LOeZi2gn9v.jpeg"
                    alt="Volunteers in action"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Floating Metric */}
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-gradient-to-br from-primary to-amber-500 p-6 text-white shadow-xl max-w-[200px]">
                  <span className="block font-display text-3xl font-extrabold">2021</span>
                  <span className="text-xs font-medium text-white/80">Year of Foundation & Official Registry</span>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Focus Areas Section */}
        <section className="py-24 bg-gray-50 dark:bg-[#1e2022] border-t border-gray-200 dark:border-white/5 transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                Our Mission
              </span>
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                What is NayePankh?
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                NayePankh is one of the eminent youth NGOs in India, espoused in providing essential relief and long-term support to underprivileged sectors of our society. We operate along four core pillars:
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreAreas.map((area, index) => (
                <ScrollReveal
                  key={index}
                  delay={area.delay}
                  className="rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#242629] p-8 shadow-lg hover:border-primary/20 dark:hover:border-primary/20 hover:bg-gray-100/50 dark:hover:bg-[#282a2d] transition-all transform hover:-translate-y-1"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    {area.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {area.description}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Impact Banner */}
            <ScrollReveal className="mt-16">
              <div className="rounded-3xl border border-gray-200 dark:border-white/5 bg-gradient-to-r from-primary/10 to-amber-500/10 p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full blur-2xl" />
                <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  Motto: BADALTE BHARAT KI NAYI TASVEER
                </h3>
                <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  To date, we have touched the lives of over <span className="text-primary font-semibold">2,00,000+ individuals</span>. With a strong army of young school and college volunteers, we are working every single day to repaint the picture of a developing India.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
