import { Inter } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'


const Bahnschrift = localFont({
  src: "../public/fonts/bahnschrift.ttf",
});



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pruthvil",
  description: "Thought Dump",
  icons: {
    icon: 'app/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Bahnschrift.className}>{children}</body>
    </html>
  );
}
