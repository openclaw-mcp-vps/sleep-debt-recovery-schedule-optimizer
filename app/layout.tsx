import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sleep Debt Recovery Schedule Optimizer",
  description: "Optimize your sleep schedule to recover from sleep debt efficiently. Personalized recovery plans for professionals, students, and shift workers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="13d00fbb-0938-4c33-9094-1b7715dbc376"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
