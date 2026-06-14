import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function OurCertificates() {
  const certificates = [
    {
      title: "Society Registration Certificate",
      description: "Official registration certificate under the Societies Registration Act, establishing NayePankh Foundation as a recognized non-governmental organization in Uttar Pradesh.",
      url: "https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/society-AE0Ex6MNpMHg9VRg.png",
      badge: "Govt Registered",
      delay: "",
    },
    {
      title: "12A Registration Certificate",
      description: "Granted by the Income Tax Department of India, certifying NayePankh Foundation as an organization established for charitable purposes and granting tax-exemption on its income.",
      url: "https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/12a-YD0r5NDqyJSZVE5b.png",
      badge: "Charitable Status",
      delay: "delay-100",
    },
    {
      title: "80G Registration Certificate",
      description: "Tax deduction registration certificate enabling our supporters and corporate partners to claim deductions under Section 80G of the Income Tax Act on their contributions.",
      url: "https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/80g-YX429rXBwRhPoXMl.png",
      badge: "Tax Benefits (80G)",
      delay: "delay-200",
    },
   
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
              Transparency & Trust
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Our Certificates
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              NayePankh Foundation is a fully compliant, government-registered NGO. Here are our official registration and tax exemption documents.
            </p>
          </div>
        </section>

        {/* Certificates Grid */}
        <section className="py-24 bg-white dark:bg-[#18191a] transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {certificates.map((cert, index) => (
                <ScrollReveal
                  key={index}
                  delay={cert.delay}
                  className="rounded-3xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#202124] p-6 sm:p-8 shadow-xl flex flex-col justify-between group hover:border-primary/20 dark:hover:border-primary/20 transition-all transform hover:-translate-y-1"
                >
                  <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
                      {cert.badge}
                    </div>

                    {/* Image Container with Zoom hover effect */}
                    <div className="aspect-[4/5] sm:aspect-[3/4] relative overflow-hidden rounded-2xl bg-black/5 dark:bg-black/40 border border-gray-200 dark:border-white/10 flex items-center justify-center p-4">
                      <Image
                        src={cert.url}
                        alt={cert.title}
                        fill
                        className="object-contain p-4 rounded shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Text content */}
                    <div className="space-y-3">
                      <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 mt-6 border-t border-gray-200 dark:border-white/5">
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:text-amber-500 transition-colors"
                    >
                      View Original Document
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
