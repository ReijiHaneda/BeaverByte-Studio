'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpDown, Gamepad2 } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Update active section based on scroll position
            const sections = ['home', 'games', 'updates', 'devs', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        // Prevent body scroll when menu is open
        document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'unset';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <>
            {/* Skip to content link for accessibility */}
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-gradient-to-r focus:from-emerald-600 focus:to-teal-600 focus:text-white focus:rounded-xl focus:font-medium focus:shadow-lg"
            >
                Skip to content
            </a>

            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-200/80'
                        : 'bg-white/80 backdrop-blur-md border-b border-gray-200/50'
                    }`}
            >
                <div className="container mx-auto px-4 lg:px-6">
                    <div className="flex h-16 lg:h-20 items-center justify-between gap-4">
                        {/* Logo and Brand */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 group relative"
                        >
                            {/* Logo with hover effect */}
                            <div className="relative w-11 h-11 lg:w-12 lg:h-12 flex-shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
                                <div className="relative w-full h-full bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                                    <Gamepad2 className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                                </div>
                            </div>

                            {/* Brand Text */}
                            <div className="hidden sm:flex flex-col">
                                <span className="font-bold text-base lg:text-lg leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-emerald-700 group-hover:to-teal-700 transition-all duration-300">
                                    Beaver Byte Studio
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs lg:text-sm text-emerald-600 font-semibold">Verdant</span>
                                    <span className="text-xs text-gray-400">•</span>
                                    <span className="text-xs text-gray-500">Indie Studio</span>
                                </div>
                            </div>

                            {/* Mobile Brand */}
                            <div className="sm:hidden flex flex-col">
                                <span className="font-bold text-base leading-tight text-gray-900">
                                    Verdant
                                </span>
                                <span className="text-xs text-emerald-600 font-medium">Beaver Byte</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
                            <NavLink href="#home" isActive={activeSection === 'home'}>
                                Home
                            </NavLink>
                            <NavLink href="#games" isActive={activeSection === 'games'}>
                                Games
                            </NavLink>
                            <NavLink href="#updates" isActive={activeSection === 'updates'}>
                                Updates
                            </NavLink>
                            <NavLink href="#devs" isActive={activeSection === 'devs'}>
                                Developers
                            </NavLink>
                            <NavLink href="#contact" isActive={activeSection === 'contact'}>
                                Contact
                            </NavLink>
                        </nav>

                        {/* Controls */}
                        <div className="flex items-center gap-2">
                            {/* Sort Toggle - Desktop */}
                            <button
                                id="sortToggle"
                                className="hidden md:flex items-center justify-center w-10 h-10 lg:w-11 lg:h-11 rounded-xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 active:scale-95 transition-all duration-200 group"
                                aria-label="Sort updates (newest/oldest)"
                                title="Sort updates"
                            >
                                <ArrowUpDown className="w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-colors" />
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-teal-50 active:scale-95 transition-all duration-200 group"
                                aria-expanded={mobileMenuOpen}
                                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-6 h-6 text-gray-700 group-hover:text-emerald-600 transition-colors" />
                                ) : (
                                    <Menu className="w-6 h-6 text-gray-700 group-hover:text-emerald-600 transition-colors" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation - Sliding Panel */}
                <div
                    className={`md:hidden fixed inset-0 top-16 transition-all duration-300 ease-in-out ${mobileMenuOpen
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none'
                        }`}
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                        onClick={toggleMobileMenu}
                    />

                    {/* Menu Panel */}
                    <div
                        className={`relative bg-white border-t border-gray-200 shadow-2xl transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
                            }`}
                    >
                        <nav
                            className="container mx-auto px-4 py-6 flex flex-col gap-1"
                            aria-label="Mobile Navigation"
                        >
                            <MobileNavLink
                                href="#home"
                                onClick={toggleMobileMenu}
                                isActive={activeSection === 'home'}
                            >
                                Home
                            </MobileNavLink>
                            <MobileNavLink
                                href="#games"
                                onClick={toggleMobileMenu}
                                isActive={activeSection === 'games'}
                            >
                                Games
                            </MobileNavLink>
                            <MobileNavLink
                                href="#updates"
                                onClick={toggleMobileMenu}
                                isActive={activeSection === 'updates'}
                            >
                                Updates
                            </MobileNavLink>
                            <MobileNavLink
                                href="#devs"
                                onClick={toggleMobileMenu}
                                isActive={activeSection === 'devs'}
                            >
                                Developers
                            </MobileNavLink>
                            <MobileNavLink
                                href="#contact"
                                onClick={toggleMobileMenu}
                                isActive={activeSection === 'contact'}
                            >
                                Contact
                            </MobileNavLink>

                            {/* Divider */}
                            <div className="my-2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                            {/* Sort button in mobile menu */}
                            <button
                                id="sortToggleMobile"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 active:scale-98 transition-all duration-200 text-left group"
                                aria-label="Sort updates"
                            >
                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                                    <ArrowUpDown className="w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-colors" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-gray-900">Sort Updates</span>
                                    <span className="text-xs text-gray-500">Change order</span>
                                </div>
                            </button>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}

// Desktop Nav Link Component with Active State
function NavLink({
    href,
    children,
    isActive
}: {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}) {
    return (
        <a
            href={href}
            className={`
                relative px-4 py-2 text-sm lg:text-base font-medium rounded-xl transition-all duration-200
                ${isActive
                    ? 'text-emerald-700 bg-gradient-to-br from-emerald-50 to-teal-50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }
                active:scale-95
            `}
        >
            {children}
            {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full" />
            )}
        </a>
    );
}

// Mobile Nav Link Component with Active State
function MobileNavLink({
    href,
    children,
    onClick,
    isActive
}: {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
    isActive?: boolean;
}) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`
                relative px-4 py-3 text-base font-medium rounded-xl transition-all duration-200
                ${isActive
                    ? 'text-emerald-700 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-sm'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }
                active:scale-98
            `}
        >
            <span className="flex items-center justify-between">
                {children}
                {isActive && (
                    <span className="w-2 h-2 bg-emerald-600 rounded-full" />
                )}
            </span>
        </a>
    );
}