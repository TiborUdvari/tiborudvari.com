import "./globals.css";
import localFont from "next/font/local";
const myFont = localFont({
  src: "./miniature-display.woff2",
  variable: "--font-miniature-display",
});

export const metadata = {
  title: "Tibor Udvari",
  description: "Creative individual",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <main className="mx-auto max-w-6xl sm:px-8 lg:px-10">{children} </main>
      </body>
    </html>
  );
}
