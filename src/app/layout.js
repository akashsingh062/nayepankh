import { DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const dmsans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "NayePankh Foundation - UP Govt. | 80G & 12 A Registered NGO",
  description: "NayePankh Foundation is a UP Government registered NGO and one of the biggest student organizations in India. We have helped over 2 lakh underprivileged people by providing free food, sanitary pads, clothes and education. Join us in our mission to uplift the underprivileged.",
  keywords: "NGO, Internship, student organization, NayePankh Foundation, charity, donate, India NGO",
  icons: {
    icon: [
      { url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=32,h=32,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png" }
    ],
    apple: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=180,h=180,fit=crop,f=png/YKbL494Mv8Ip3qgy/logo-AVLW2LLWZkI8v845.png"
  }
};

export default function RootLayout({ children }) {
  const themeScript = `
    (function() {
      try {
        var theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {}
    })()
  `;

  return (
    <html lang="en" className={`${dmsans.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-[#18191a] text-[#1d1e20] dark:text-[#f5f6f7] antialiased transition-colors duration-300">
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
