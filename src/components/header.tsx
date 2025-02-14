"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for the mobile menu

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full py-6 px-4 bg-gray-950 border-b border-purple-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-500">
          AI Revolution
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="text-purple-300 hover:text-purple-400">
            Home
          </Link>
          <Link href="#ai-agents" className="text-purple-300 hover:text-purple-400">
            Agents
          </Link>
          <Link href="#technologies" className="text-purple-300 hover:text-purple-400">
            Technology
          </Link>
          <Link href="#pricing-plans" className="text-purple-300 hover:text-purple-400">
            Pricing
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-purple-300 hover:text-purple-400 focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Get Started Button */}
        <Button
          variant="outline"
          className="hidden md:inline-flex text-purple-500 border-purple-500 hover:bg-purple-950"
        >
          Get Started
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4">
          <div className="flex flex-col space-y-2">
            <Link href="#" className="text-purple-300 hover:text-purple-400 p-2">
              Home
            </Link>
            <Link href="#ai-agents" className="text-purple-300 hover:text-purple-400 p-2">
              Agents
            </Link>
            <Link href="#technologies" className="text-purple-300 hover:text-purple-400 p-2">
              Technology
            </Link>
            <Link href="#pricing-plans" className="text-purple-300 hover:text-purple-400 p-2">
              Pricing
            </Link>
            <Button
              variant="outline"
              className="w-full text-purple-500 border-purple-500 hover:bg-purple-950"
            >
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
