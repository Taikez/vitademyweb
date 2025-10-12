import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Vitademy",
  description: "The greatest space to ask.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/public/logo-small.png", // Path to your light mode icon
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/public/logo-small.png", // Path to your dark mode icon
      },
    ],
  },
};

export default async function UserLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../../../messages/${locale}.json`))
    .default;

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
