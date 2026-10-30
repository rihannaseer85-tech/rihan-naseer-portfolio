import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rihan Naseer | Full Stack Developer",
  description:
    "Portfolio of Rihan Naseer, Python Full Stack Developer building Django REST APIs, React and Next.js applications.",
  keywords: [
    "Rihan Naseer",
    "Python Developer",
    "Django REST Framework",
    "React",
    "Next.js",
    "TypeScript",
    "Full Stack Developer"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
