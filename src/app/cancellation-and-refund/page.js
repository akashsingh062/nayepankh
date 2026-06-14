import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CancellationAndRefund() {
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
                Cancellation & Refund
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Last updated: June 2026</p>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                As a non-profit organization carrying out charitable social welfare activities, NayePankh Foundation relies on voluntary contributions to run our operations. Please read our policy regarding cancellations and refunds carefully.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">1. Donations</h2>
              <p>
                All donations made to NayePankh Foundation are final. Since resources are immediately allocated to active social campaigns (such as food distribution drives, animal welfare, and educational initiatives), we generally do not offer refunds or cancellations of completed transactions.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">2. Error in Transaction</h2>
              <p>
                In case of any technical error or accidental duplicate payment processing (where the same amount is debited twice due to network delay or API gateway error), donors should contact us within **7 working days** of the transaction.
              </p>
              <p>
                Please email your payment receipt and bank deduction statement to **contact@nayepankh.com** with details of the transaction. Upon verifying the discrepancy, a refund will be processed to the original payment source within 10-15 working days.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">3. Refund Processing Fee</h2>
              <p>
                Any transaction charges or gateway processing fees deducted by bank/gateway providers during refund settlements are to be borne by the donor, and the remaining net amount will be credited back.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
