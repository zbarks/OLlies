import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ollie's — The Bunker | Edinburgh's Underground Sports Bar",
  description:
    "Ollie's – Edinburgh's most electric underground sports bar beneath Dublin Street Social. Live sport, DJ nights, TrackMan golf simulator, private hire. New Town, Edinburgh EH3 6NN.",
  keywords: "sports bar Edinburgh, underground bar Edinburgh, golf simulator Edinburgh, private hire Edinburgh, Dublin Street Social",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
