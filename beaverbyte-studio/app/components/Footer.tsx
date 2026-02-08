'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    Mail,
    MessageCircle,
    Twitter,
    Facebook,
    Instagram,
    Send,
    Gamepad2,
    Heart,
    ExternalLink,
    ArrowRight
} from 'lucide-react';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number>(2024);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="relative border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white mt-20 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-50 to-teal-50 rounded-full blur-3xl" />
            </div>

            <div className="relative container mx-auto px-4 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* About Section */}
                    <div className="lg:col-span-2">
                        {/* Logo and Brand */}
                        <div className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-12 h-12 flex-shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl opacity-20 blur transition-opacity duration-300" />
                                <div className="relative w-full h-full bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                                    <Gamepad2 className="w-7 h-7 text-white" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-xl leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                    Beaver Byte Studio
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-emerald-600 font-semibold">Verdant</span>
                                    <span className="text-xs text-gray-400">•</span>
                                    <span className="text-xs text-gray-500">Indie Studio</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-md">
                            Creating <span className="font-semibold text-emerald-700">Verdant</span> — a top-down 2D sandbox adventure about farming, building and surviving in dynamic, living worlds.
                        </p>

                        {/* Game Info Cards */}
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-700">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                PC & Mobile
                            </span>
                            <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-700">
                                Sandbox / Farming / Survival
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-sm mb-4 text-gray-900 flex items-center gap-2">
                            Quick Links
                            <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent max-w-[60px]" />
                        </h3>
                        <ul className="space-y-2.5">
                            <FooterLink href="#home">Home</FooterLink>
                            <FooterLink href="#games">Games</FooterLink>
                            <FooterLink href="#updates">Latest Updates</FooterLink>
                            <FooterLink href="#devs">Developers</FooterLink>
                            <FooterLink href="#contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="font-bold text-sm mb-4 text-gray-900 flex items-center gap-2">
                            Connect With Us
                            <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent max-w-[40px]" />
                        </h3>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <a
                                href="mailto:play.verdant@gmail.com"
                                className="group flex items-center gap-2.5 text-sm text-gray-600 hover:text-emerald-700 transition-all duration-200"
                            >
                                <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-emerald-50 group-hover:to-teal-50 flex items-center justify-center transition-all duration-200">
                                    <Mail className="w-4 h-4 group-hover:text-emerald-600 transition-colors" />
                                </div>
                                <span className="font-medium">play.verdant@gmail.com</span>
                            </a>
                            <a
                                href="https://discord.gg/hSDqqvKnbA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2.5 text-sm text-gray-600 hover:text-emerald-700 transition-all duration-200"
                            >
                                <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-emerald-50 group-hover:to-teal-50 flex items-center justify-center transition-all duration-200">
                                    <MessageCircle className="w-4 h-4 group-hover:text-emerald-600 transition-colors" />
                                </div>
                                <span className="font-medium">Join our Discord</span>
                                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2">
                            <SocialIcon
                                href="https://x.com/"
                                icon={<Twitter className="w-4 h-4" />}
                                label="Twitter"
                            />
                            <SocialIcon
                                href="https://discord.gg/hSDqqvKnbA"
                                icon={<MessageCircle className="w-4 h-4" />}
                                label="Discord"
                            />
                            <SocialIcon
                                href="#"
                                icon={<Facebook className="w-4 h-4" />}
                                label="Facebook"
                            />
                            <SocialIcon
                                href="#"
                                icon={<Instagram className="w-4 h-4" />}
                                label="Instagram"
                            />
                            <SocialIcon
                                href="#"
                                icon={<Send className="w-4 h-4" />}
                                label="Telegram"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-gray-600">
                            <span>© {currentYear} Dream Team. All rights reserved.</span>
                            <span className="hidden sm:inline text-gray-400">•</span>
                            <span className="flex items-center gap-1.5">
                                Made with
                                <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
                                by indie developers
                            </span>
                        </div>

                        <div className="flex items-center gap-6">
                            <Link
                                href="/privacy"
                                className="text-sm text-gray-600 hover:text-emerald-700 transition-colors font-medium"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-sm text-gray-600 hover:text-emerald-700 transition-colors font-medium"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/cookies"
                                className="text-sm text-gray-600 hover:text-emerald-700 transition-colors font-medium"
                            >
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Footer Link Component with Hover Animation
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <a
                href={href}
                className="group text-sm text-gray-600 hover:text-emerald-700 transition-all duration-200 inline-flex items-center gap-2"
            >
                <span className="w-0 h-px bg-emerald-600 group-hover:w-4 transition-all duration-300" />
                <span className="font-medium">{children}</span>
            </a>
        </li>
    );
}

// Enhanced Social Icon Component
function SocialIcon({
    href,
    icon,
    label
}: {
    href: string;
    icon: React.ReactNode;
    label: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-white hover:border-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
        >
            {/* Gradient background that appears on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </span>
        </a>
    );
}