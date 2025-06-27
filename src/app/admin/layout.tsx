import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AppSidebar } from "@/components/admin/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vitademy",
  description: "A great space to ask.",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ClerkProvider>
        <html lang="en" className={inter.className}>
          <body>
            <div className="flex"></div>
            <SidebarProvider
              style={
                {
                  "--sidebar-width": "calc(var(--spacing) * 72)",
                  "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
              }
            >
              <AppSidebar />
            </SidebarProvider>
            {children}
          </body>
        </html>
      </ClerkProvider>
    </ThemeProvider>
  );
}
