import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <>
      <Header />

      <main className="flex-grow bg-white dark:bg-[#18191a] text-[#1d1e20] dark:text-[#f5f6f7] py-24 transition-colors duration-300">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#202124] p-8 sm:p-12 shadow-xl space-y-8">
            <div className="space-y-4 border-b border-gray-200 dark:border-white/5 pb-6">
              <span className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
                Legal
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                Terms & Conditions
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Last updated: June 2026</p>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                Welcome to NayePankh Foundation. By accessing or using our website (https://nayepankh.com/), you agree to be bound by these terms and conditions. If you do not agree to all of these terms, please do not use our website.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">1. Use of the Site</h2>
              <p>
                The content on this website is for your general information and personal use only. It is subject to change without notice. You agree to use the site only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use and enjoyment of this site by any third party.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">2. Donations</h2>
              <p>
                All donations made through our secure payment gateway links (such as Razorpay) are voluntary. Supporter information collected during donations is stored securely. Donations are tax-deductible under Section 80G of the Indian Income Tax Act. Please ensure all details entered during transaction processing are correct.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">3. Intellectual Property</h2>
              <p>
                This website contains material which is owned by or licensed to NayePankh Foundation. This material includes, but is not limited to, the design, layout, look, appearance, logo, and graphics. Unauthorized reproduction or misuse of these intellectual assets is strictly prohibited.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">4. Limitation of Liability</h2>
              <p>
                NayePankh Foundation will not be liable for any direct, indirect, or consequential damages arising out of the use or inability to use this website, or any errors or omissions in the content thereof.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">5. Governing Law</h2>
              <p>
                Your use of this website and any dispute arising out of such use of the website is subject to the laws of India, under the jurisdiction of the courts in Kanpur, Uttar Pradesh.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
