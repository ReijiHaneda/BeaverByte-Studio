'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpDown } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            {/* Skip to content link for accessibility */}
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded"
            >
                Skip to content
            </a>

            <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto px-4">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo and Brand */}
                        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <div className="relative w-10 h-10 flex-shrink-0">
                                <Image
                                    src="/logo.svg"
                                    alt="Beaver Byte Studio logo"
                                    width={40}
                                    height={40}
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="hidden sm:flex flex-col">
                                <span className="font-archivo-black text-sm lg:text-base leading-tight text-gray-900">
                                    Beaver Byte Studio — Verdant
                                </span>
                                <span className="text-xs text-gray-500 font-inter">Indie studio</span>
                            </div>
                            <div className="sm:hidden flex flex-col">
                                <span className="font-archivo-black text-sm leading-tight text-gray-900">
                                    Verdant
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
                            <NavLink href="#home">Home</NavLink>
                            <NavLink href="#games">Games</NavLink>
                            <NavLink href="#updates">Updates</NavLink>
                            <NavLink href="#devs">Developers</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </nav>

                        {/* Controls */}
                        <div className="flex items-center gap-2">
                            {/* Sort Toggle - Desktop */}
                            <button
                                id="sortToggle"
                                className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Sort updates (newest/oldest)"
                                title="Sort updates"
                            >
                                <ArrowUpDown className="w-5 h-5 text-gray-600" />
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-expanded={mobileMenuOpen}
                                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-6 h-6 text-gray-600" />
                                ) : (
                                    <Menu className="w-6 h-6 text-gray-600" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 bg-white">
                        <nav className="container mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile Navigation">
                            <MobileNavLink href="#home" onClick={() => setMobileMenuOpen(false)}>
                                Home
                            </MobileNavLink>
                            <MobileNavLink href="#games" onClick={() => setMobileMenuOpen(false)}>
                                Games
                            </MobileNavLink>
                            <MobileNavLink href="#updates" onClick={() => setMobileMenuOpen(false)}>
                                Updates
                            </MobileNavLink>
                            <MobileNavLink href="#devs" onClick={() => setMobileMenuOpen(false)}>
                                Developers
                            </MobileNavLink>
                            <MobileNavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>
                                Contact
                            </MobileNavLink>

                            {/* Sort button in mobile menu */}
                            <button
                                id="sortToggleMobile"
                                className="flex items-center gap-2 px-4 py-2.5 rounded-lg hover:bg-gray-100 transition-colors text-left"
                                aria-label="Sort updates"
                            >
                                <ArrowUpDown className="w-5 h-5 text-gray-600" />
                                <span className="text-sm font-medium text-gray-700">Sort Updates</span>
                            </button>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
}

// Desktop Nav Link Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
            {children}
        </a>
    );
}

// Mobile Nav Link Component
function MobileNavLink({
    href,
    children,
    onClick
}: {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
}) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
        >
            {children}
        </a>
    );
}