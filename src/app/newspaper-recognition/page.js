import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export default function NewspaperRecognition() {
  return (
    <>
      <Header />

      <main className="flex-grow bg-white dark:bg-[#18191a] text-[#1d1e20] dark:text-[#f5f6f7] transition-colors duration-300">
        {/* Banner Section */}
        <section className="bg-gray-50 dark:bg-[#1e2022] py-20 border-b border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              NayePankh in the Press
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Newspaper Recognition
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Our humble efforts have been noticed and appreciated by leading news publications. Here is some of our press coverage.
            </p>
          </div>
        </section>

        {/* Media Collage Section */}
        <section className="py-24 bg-white dark:bg-[#18191a] transition-colors duration-300">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Introductory Text */}
            <ScrollReveal className="rounded-3xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#202124] p-8 sm:p-10 text-center max-w-4xl mx-auto space-y-4">
              <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                Spreading Hope, One Headline at a Time
              </h2>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Prominent national and regional newspapers have featured NayePankh Foundation for our student-led food drives, sanity napkins distribution, clothing distribution, and rescue operations for stray animals. This press recognition motivates our young team of volunteers to reach even more lives.
              </p>
            </ScrollReveal>

            {/* Collage Display Card */}
            <ScrollReveal className="rounded-3xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#202124] p-4 sm:p-8 shadow-2xl flex flex-col items-center gap-6 group hover:border-primary/20 dark:hover:border-primary/20 transition-colors">
              <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-black/5 dark:bg-black/40 p-2 sm:p-4">
                <Image
                  src="https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/media-AR0ezRyVXqSaNNg2.jpeg"
                  alt="NayePankh Newspaper Coverage Collage"
                  width={960}
                  height={720}
                  className="w-full h-auto object-contain rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
              <div className="text-center max-w-2xl px-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary mb-3">
                  Media Collage
                </span>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Collage of various coverage clips from Amar Ujala, Dainik Jagran, Hindustan, and other leading publications.
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
