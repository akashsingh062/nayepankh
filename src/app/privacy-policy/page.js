import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
                Privacy Policy
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">Last updated: June 2026</p>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                At NayePankh Foundation, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">1. Information We Collect</h2>
              <p>
                We may collect personal identification information from users in various ways, including when users visit our site, register, make a donation, fill out a contact form, or subscribe to our updates. This may include your name, email address, mailing address, phone number, and PAN details (required for tax deduction certificates).
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">2. How We Use Collected Information</h2>
              <p>
                NayePankh Foundation may collect and use personal information to:
                <br />- Process donations and issue tax exemption receipts (80G).
                <br />- Respond to inquiries, feedback, or support requests sent via our contact forms.
                <br />- Send periodic update emails concerning NGO activities and fundraising programs (if opted in).
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">3. Data Protection</h2>
              <p>
                We adopt appropriate data collection, storage, and processing practices, as well as security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data and transaction logs. Payment transactions are executed securely through industry-standard payment gateways.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">4. Sharing Your Personal Information</h2>
              <p>
                We do not sell, trade, or rent users&apos; personal identification information to third parties. We may share generic aggregated demographic information not linked to any personal identification details with our trusted partners, advisors, and corporate sponsors for reporting and compliance purposes.
              </p>

              <h2 className="font-display text-lg font-bold text-gray-900 dark:text-white pt-4">5. Consent</h2>
              <p>
                By using our site, you consent to our website privacy policy.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
