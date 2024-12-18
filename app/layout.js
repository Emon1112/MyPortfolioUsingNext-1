import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";


export const metadata = {
  title: "My Portfolio",
  description: "Portfolio site by next.js for MD. EMON SHEIKH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4 sticky top-0 flex justify-between">
          <p className="text-cyan-400 font-bold ">My<span className="text-orange-600">Portfolio</span></p>
          <nav >            {/*   className="flex justify-end" */}
            <ul className="flex space-x-4 font-bold">
              <li className="hover:bg-green-800 p-1 rounded-full"><Link href="/">Home</Link></li>
              <li className="hover:bg-green-800 p-1 rounded-full"><Link href="/about">About</Link></li>
              <li className="hover:bg-green-800 p-1 rounded-full"><Link href="/projects">Projects</Link></li>
              <li className="hover:bg-green-800 p-1 rounded-full"><Link href="/Contact">Contact</Link></li>
            </ul>
          </nav>

        </header>
        <main className="p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center sticky bottom-0">
          <p>&copy; 2024 My Portfolio</p>

        </footer>


      </body>
    </html>
  );
}
