"use client";

// Tailwind CSS Layer: Layout - Flex/Grid - Positioning - Box Model - Sizing - Typography - Color - Effects - Transitions - Transforms - Miscellaneous

import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="grid grid-cols-3 items-center m-5 p-4 bg-amber-200 shadow-md rounded-2xl">
            {/* LOGO */}
            <div className="text-left text-2xl ml-30 font-bold text-black">
                <Link href="/">CodeCodeCode</Link>
            </div>

            {/* MENU */}
            <ul className="flex justify-around space-x-6 text-lg text-black">
                <li>
                    <Link href="/viettel" className="text-gray-400 hover:text-blue-500">Code</Link>
                </li>
                <li>
                    <Link href="/vinaphone" className="text-gray-400 hover:text-blue-500">Code</Link>
                </li>
                <li>
                    <Link href="/mobifone" className="text-gray-400 hover:text-blue-500">Code</Link>
                </li>
                <li>
                    <Link href="/fpt" className="text-gray-400 hover:text-blue-500">Code</Link>
                </li>
                <li>
                    <Link href="/vnpt" className="text-gray-400 hover:text-blue-500">Code</Link>
                </li>
                <li>
                    <Link href="/compare" className="text-gray-400 hover:text-blue-500">Code</Link>
                </li>
            </ul>  

                {/* Right - Placeholder (để menu ở giữa thực sự) */}
            <div className="w-32">{/* trống hoặc sau này là Login/Search */}</div>
        </nav>
    )
}

export default Navbar;
