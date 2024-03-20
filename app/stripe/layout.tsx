import type { Metadata } from "next";

import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "TypeScript Next.js Stripe Example",
    template: "%s | Next.js + TypeScript Example",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Full-stack TypeScript example using Next.js, react-stripe-js, and stripe-node.",
    images: [
      {
        url: "https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png",
      },
    ],
    site: "@StripeDev",
    title: "TypeScript Next.js Stripe Example",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <div>
        <div className="container">
          <header>
            <div className="header-content">
              <Link href="/" className="logo">
                <img src="/logo.png" />
              </Link>
              <h1>
                <span className="light">Artur Stripe Next, Supabase</span>
                <br />
                Next.js, TypeScript, Stripe and Supabase 🔒💸
              </h1>
            </div>
          </header>
          {children}
        </div>
    </div>
  );
}