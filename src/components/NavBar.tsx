"use client";

// Tailwind CSS Layer: Layout - Flex/Grid - Positioning - Box Model - Sizing - Typography - Color - Effects - Transitions - Transforms - Miscellaneous

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/compare", label: "So sánh" },
        { href: "/viettel", label: "Viettel" },
        { href: "/vinaphone", label: "Vinaphone" },
        { href: "/mobifone", label: "Mobifone" },
        { href: "/tips", label: "Mẹo" }
    ];

    return (
    <div className="w-full bg-[#F6FAFF] shadow-md">
        <nav className="max-w-screen-xl mx-auto w-full px-4 md:px-8 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center">
            <Link href="/">
                <Image src="/logo.png" alt="Logo" width={75} height={75} />
            </Link>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600 text-2xl">
            {navLinks.map((link) => (
            <li key={link.href}>
                <Link
                href={link.href}
                className="hover:text-blue-600 transition-colors"
                >
                {link.label}
                </Link>
            </li>
            ))}
        </ul>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-blue-600"
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
        </nav>

        {/* MOBILE MENU */}
        {isOpen && (
        <div className="md:hidden bg-[#001533] text-white w-full px-4 py-2 z-40">
            <ul className="flex flex-col gap-2 border-t border-gray-200">
            {navLinks.map((link) => (
                <li key={link.href}>
                <Link
                    href={link.href}
                    className="block py-2 text-gray-200 hover:text-blue-400 border-b border-gray-600"
                    onClick={() => setIsOpen(false)}
                >
                    {link.label}
                </Link>
                </li>
            ))}
            </ul>
        </div>
        )}
    </div>
    );
}

export default Navbar;

{/*
    
*/}
