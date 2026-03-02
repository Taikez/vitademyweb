"use client";

import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { SessionProvider, useSession } from "next-auth/react";
import PageLoader from "./ui/page-loader";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <SessionContent>{children}</SessionContent>
    </SessionProvider>
  );
}

function capitalize(word?: string | null) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function SessionContent({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  // Show loader while session is loading
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <PageLoader />
      </div>
    );
  }

  const formattedUser = session?.user
    ? {
        ...session.user,
        name: capitalize(session.user.name),
      }
    : null;

  return (
    <>
      <Navbar user={formattedUser} />
      {children}
      <Footer user={formattedUser} />
    </>
  );
}
