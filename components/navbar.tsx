// "use client";

// import { Button } from "@/components/ui/button";
// import { Bot, Menu } from "lucide-react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import type React from "react"; // Added import for React

// export default function Navbar() {
//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
//     >
//       <div className="flex space-x-12">
//         <Link href="/" className="flex items-center space-x-2">
//           <Bot className="w-8 h-8 text-purple-500" />
//           <span className="text-white font-medium text-xl">
//             AlphaGen {"  "}
//           </span>
//         </Link>

//         <div className="hidden md:flex items-center space-x-10">
//           <NavLink href="/features">Features</NavLink>
//           <NavLink href="/how-it-works">How it Works</NavLink>
//           <NavLink href="/examples">Examples</NavLink>
//           <NavLink href="/pricing">Pricing</NavLink>
//         </div>

//         <div className="hidden md:flex items-center space-x-4">
//           <Link href="/sign-in">
//             <Button
//               variant="ghost"
//               className="text-white hover:text-purple-400"
//             >
//               Sign In
//             </Button>
//             {/* <Button className="bg-purple-600 hover:bg-purple-700 text-white">
//           Get Started
//           </Button> */}
//           </Link>
//         </div>
//       </div>

//       <Button variant="ghost" size="icon" className="md:hidden text-white">
//         <Menu className="w-6 h-6" />
//       </Button>
//     </motion.nav>
//   );
// }

// function NavLink({
//   href,
//   children,
// }: {
//   href: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <Link
//       href={href}
//       className="text-gray-300 hover:text-white transition-colors relative group"
//     >
//       {children}
//       <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
//     </Link>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { Bot, Menu } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-lg"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto mr-10">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-purple-500 animate-pulse" />
          <span className="text-white font-semibold text-2xl tracking-wide">
            AlphaGen 🚀
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/how-it-works">How it Works</NavLink>
          <NavLink href="/examples">Examples</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/sign-in">
            <Button
              variant="ghost"
              className="text-white hover:text-purple-400 transition-all duration-300"
            >
              Sign In
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-7 h-7" />
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col mt-4 space-y-3 bg-black/30 backdrop-blur-lg p-4 rounded-xl border border-white/10 shadow-lg"
        >
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/how-it-works">How it Works</NavLink>
          <NavLink href="/examples">Examples</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <Link href="/sign-in">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Sign In
            </Button>
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-white transition-all relative group text-lg"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300 group-hover:w-full rounded-lg" />
    </Link>
  );
}
