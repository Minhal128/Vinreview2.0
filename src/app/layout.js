import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SearchContextProvider } from "./context/search";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Assigning `inter` to a const
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vinreview",
  description: "A international campaign to provide the vin report of a vehicle",
};

export default function RootLayout({ children }) {
  return (
    <SearchContextProvider>
      <html lang="en">
        {/* Ensure no key prop or invalid props are spread into <body> */}
        <body className={inter.className}>{children}</body>
      </html>
    </SearchContextProvider>
  );
}
