import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      href: "http://www.instagram.com/nayepankhfoundation",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.002 5.848c-3.405 0-6.152 2.747-6.152 6.152s2.747 6.152 6.152 6.152 6.152-2.747 6.152-6.152-2.747-6.152-6.152-6.152zm0 10.152c-2.201 0-4-1.794-4-4s1.799-4 4-4 4 1.794 4 4-1.801 4-4 4zm7.839-10.404c0 .798-.642 1.435-1.435 1.435s-1.435-.642-1.435-1.435.642-1.435 1.435-1.435 1.435.637 1.435 1.435zm4.075 1.456c-.091-1.922-.53-3.625-1.938-5.028-1.403-1.403-3.106-1.842-5.028-1.938-1.981-.112-7.919-.112-9.9 0-1.917.091-3.62.53-5.022 1.938-1.408 1.403-1.842 3.106-1.938 5.028-.112 1.981-.112 7.919 0 9.9.091 1.917.53 3.62 1.938 5.022 1.403 1.408 3.106 1.842 5.028 1.938 1.981.112 7.919.112 9.9 0 1.922-.091 3.625-.53 5.028-1.938 1.403-1.403 1.842-3.106 1.938-5.028.112-1.981.112-7.919 0-9.9zm-2.559 12.02c-.418 1.05-1.226 1.858-2.281 2.281-1.579.626-5.327.482-7.072.482s-5.499.139-7.073-.482c-1.049-.418-1.858-1.226-2.281-2.281-.626-1.579-.482-5.327-.482-7.072s-.139-5.499.482-7.073c.418-1.05 1.226-1.858 2.281-2.281 1.579-.626 5.327-.482 7.072-.482s5.499-.139 7.073.482c1.05.418 1.858 1.226 2.281 2.281.626 1.579.482 5.327.482 7.072s.145 5.499-.482 7.072z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/nayepankh",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@nayepankhfoundation",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.525 3.545 12 3.545 12 3.545s-7.525 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.027 0 12 0 12s0 3.973.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.863.508 9.388.508 9.388.508s7.525 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.973 24 12 24 12s0-3.973-.502-5.837zm-13.953 9.422V8.415l6.273 3.585-6.273 3.585z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "http://www.facebook.com/nayepankhfoundation",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "http://www.twitter.com/nayepankh",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-[#1e2022] dark:bg-[#111213] border-t border-white/5 pt-space-2 pb-space-2 text-gray-400 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Image
                  src="https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png"
                  alt="NayePankh Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <span className="font-display text-lg font-bold tracking-wider text-white">
                  NAYEPANKH
                </span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed">
                NayePankh Foundation is a government-registered NGO helping underprivileged communities with food, clothes, education, and health.
              </p>
              <div className="rounded-xl bg-white/5 p-4 border border-white/5">
                <span className="block text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Tax Exemption
                </span>
                <p className="text-xs text-gray-300 leading-normal">
                  Donations are tax exempted under section 80G & 12A of the Indian Income Tax Act.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/our-certificates" className="hover:text-primary transition-colors">
                    Our Certificates
                  </Link>
                </li>
                <li>
                  <Link href="/newspaper-recognition" className="hover:text-primary transition-colors">
                    News Recognition
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="hover:text-primary transition-colors font-semibold text-primary">
                    Donate Now
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-white">
                Legal & Policies
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link href="/contact-us" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions" className="hover:text-primary transition-colors">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation-and-refund" className="hover:text-primary transition-colors">
                    Cancellation and Refund
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation-and-refund" className="hover:text-primary transition-colors">
                    Shipping and Exchange
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h4 className="font-display text-xs font-semibold uppercase tracking-wider text-white">
                Get in Touch
              </h4>
              <p className="text-xs sm:text-sm text-gray-300">
                contact@nayepankh.com
                <br />
                Mobile No: +91- 8318500748
              </p>
            </div>

            <div className="flex gap-3.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-radius-xs bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-fast transform hover:-translate-y-1"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="rounded-2xl border border-white/5 overflow-hidden shadow-shadow-1 max-w-[340px] md:max-w-md lg:max-w-[420px] bg-black/20 p-2">
              <Image
                src="https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/whatsapp-image-2023-02-15-at-9.17.30-pm-AVLPXr08jETq2nyv.jpeg"
                alt="WhatsApp contact graphic"
                width={420}
                height={210}
                className="object-cover rounded-xl w-full h-auto"
              />
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs">
          <p>&copy; {currentYear} NayePankh Foundation. All Rights Reserved. UP Government Registered NGO.</p>
        </div>
      </div>
    </footer>
  );
}
