import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShippingAndExchange() {
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
                Shipping & Exchange
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Last updated: June 2026</p>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                At NayePankh Foundation, we operate as a registered non-profit organization dedicated to social welfare projects in India. As such, our operational structure is different from standard commercial stores.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">1. Physical Goods</h2>
              <p>
                We do not sell commercial products, merchandise, or physical goods through our website. All contributions made on the site are formatted strictly as charitable donations to sustain our community development programs.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">2. Shipping of Donation Certificates / Receipts</h2>
              <p>
                Donation tax-exemption receipts (under section 80G) and appreciation certificates are sent digitally to the donor&apos;s registered email address within **24 to 48 hours** of transaction verification. We do not dispatch paper-based printed materials via courier or physical postal services unless explicitly requested and arranged.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">3. Exchanges</h2>
              <p>
                Since we do not deal in physical goods or commercial products, requests for product exchanges, returns, or replacements are not applicable to transactions on this website.
              </p>

              <p className="pt-4">
                If you have any queries regarding your transaction receipt delivery, please contact our support team at **contact@nayepankh.com** or call us at **+91-8318500748**.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
