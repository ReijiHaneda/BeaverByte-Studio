'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    Mail,
    MessageCircle,
    Twitter,
    Facebook,
    Instagram,
    Send
} from 'lucide-react';

export default function Footer() {
    const [currentYear, setCurrentYear] = useState<number>(2024);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="border-t border-gray-200 bg-gray-50/50 mt-20">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h3 className="font-archivo-black text-lg mb-3 text-gray-900">
                            Beaver Byte Studio
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            Creating Verdant — a top-down 2D sandbox adventure about farming, building and surviving in dynamic, living worlds.
                        </p>
                        <p className="text-xs text-gray-500">
                            Platform: PC & Mobile<br />
                            Genre: Sandbox / Farming / Survival
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-sm mb-3 text-gray-900">Quick Links</h3>
                        <ul className="space-y-2">
                            <FooterLink href="#home">Home</FooterLink>
                            <FooterLink href="#games">Games</FooterLink>
                            <FooterLink href="#updates">Latest Updates</FooterLink>
                            <FooterLink href="#devs">Developers</FooterLink>
                            <FooterLink href="#contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="font-semibold text-sm mb-3 text-gray-900">Connect With Us</h3>

                        {/* Contact Info */}
                        <div className="space-y-2 mb-4">
                            <a
                                href="mailto:play.verdant@gmail.com"
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                play.verdant@gmail.com
                            </a>
                            <a
                                href="https://discord.gg/hSDqqvKnbA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                                Join our Discord
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
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
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-600">
                            © {currentYear} Dream Team. All rights reserved.
                        </p>

                        <div className="flex items-center gap-4">
                            <Link
                                href="/privacy"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Footer Link Component
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <a
                href={href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block"
            >
                {children}
            </a>
        </li>
    );
}

// Social Icon Component
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
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-colors"
        >
            {icon}
        </a>
    );
}