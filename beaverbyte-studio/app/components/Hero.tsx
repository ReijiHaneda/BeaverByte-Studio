'use client';

import { useState, useEffect, JSX } from 'react';
import {
    ArrowRight,
    Play,
    Calendar,
    Sparkles,
    Trees,
    Hammer,
    Heart,
    Users
} from 'lucide-react';

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [mounted, setMounted] = useState(false);

    // Countdown to release date (example: 90 days from now)
    useEffect(() => {
        setMounted(true);
        const releaseDate = new Date();
        releaseDate.setDate(releaseDate.getDate() + 90);

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = releaseDate.getTime() - now;

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main id="main" className="relative">
            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating Shapes */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-float-delayed" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-100/20 rounded-full blur-3xl" />

                    {/* Decorative Grid Pattern */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" className="text-emerald-900" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8 animate-fade-in-up">
                            {/* New Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 animate-pulse-glow">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-sm font-semibold">New Release Coming Soon</span>
                            </div>

                            {/* Main Heading */}
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                                    <span className="block text-gray-900">Verdant:</span>
                                    <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 bg-clip-text text-transparent">
                                        Blooming Horizons
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
                                    A top-down 2D sandbox adventure about <span className="font-semibold text-emerald-700">farming</span>, <span className="font-semibold text-emerald-700">building</span> and <span className="font-semibold text-emerald-700">surviving</span> in dynamic, living worlds.
                                </p>

                                <p className="text-base text-gray-600 max-w-xl">
                                    Clean UX, mobile-first controls, and handcrafted-feeling procedural maps.
                                </p>
                            </div>

                            {/* Countdown */}
                            {mounted && (
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-emerald-700">
                                        <Calendar className="w-5 h-5" />
                                        <span className="font-semibold">Coming Soon</span>
                                    </div>
                                    <div className="flex gap-3">
                                        <CountdownBox value={timeLeft.days} label="Days" />
                                        <CountdownBox value={timeLeft.hours} label="Hours" />
                                        <CountdownBox value={timeLeft.minutes} label="Mins" />
                                        <CountdownBox value={timeLeft.seconds} label="Secs" />
                                    </div>
                                </div>
                            )}

                            {/* Platform Icons */}
                            <div className="flex items-center gap-6">
                                <span className="text-sm text-gray-600 font-medium">Available on:</span>
                                <div className="flex items-center gap-4">
                                    <PlatformIcon name="Windows" />
                                    <PlatformIcon name="Android" />
                                    <PlatformIcon name="iOS" />
                                    <PlatformIcon name="Desktop" />
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#updates"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-100 transition-all duration-200"
                                >
                                    Read Devlogs
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#games"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-900 font-semibold hover:bg-gray-50 hover:border-emerald-300 hover:scale-105 active:scale-100 transition-all duration-200"
                                >
                                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    View Gallery
                                </a>
                            </div>

                            {/* Discord CTA */}
                            <div className="flex items-center gap-3 pt-4">
                                <span className="text-sm text-gray-600">Join our community</span>
                                <a
                                    href="https://discord.gg/hSDqqvKnbA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5865F2] text-white font-medium hover:bg-[#4752C4] hover:scale-105 active:scale-100 transition-all duration-200"
                                >
                                    <DiscordIcon />
                                    <span>Discord</span>
                                </a>
                            </div>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-700">
                                    <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                                    Sandbox
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-700">
                                    <span className="w-2 h-2 bg-teal-500 rounded-full" />
                                    Farming
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-700">
                                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                                    Survival
                                </span>
                            </div>
                        </div>

                        {/* Right Content - Hero Image with Decorative Elements */}
                        <div className="relative animate-fade-in-up-delayed">
                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl rotate-12 blur-xl opacity-50 animate-float" />
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-green-400 rounded-2xl -rotate-12 blur-xl opacity-50 animate-float-delayed" />

                            {/* Main Image Container */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20 border-4 border-white bg-white">
                                {/* Placeholder SVG Illustration */}
                                <div className="aspect-video bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                                    <GamePreviewIllustration />
                                </div>

                                {/* Overlay Badge */}
                                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
                                    <span className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                        In Development
                                    </span>
                                </div>
                            </div>

                            {/* Floating Feature Cards */}
                            <div className="hidden lg:block absolute -left-8 top-1/4 animate-float">
                                <FeatureCard icon={<Trees />} title="Living Worlds" color="emerald" />
                            </div>
                            <div className="hidden lg:block absolute -right-8 bottom-1/4 animate-float-delayed">
                                <FeatureCard icon={<Hammer />} title="Build & Craft" color="teal" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-emerald-600/50 flex items-start justify-center p-2">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="relative py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Why <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Verdant?</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Experience farming and survival gameplay reimagined with modern UX and boundless creativity
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureBigCard
                            icon={<Trees className="w-8 h-8" />}
                            title="Dynamic Biomes"
                            description="Explore procedurally generated worlds that feel handcrafted with unique ecosystems"
                            color="emerald"
                        />
                        <FeatureBigCard
                            icon={<Hammer className="w-8 h-8" />}
                            title="Deep Crafting"
                            description="Build and customize your farm with hundreds of items and structures"
                            color="teal"
                        />
                        <FeatureBigCard
                            icon={<Heart className="w-8 h-8" />}
                            title="Mobile-First"
                            description="Optimized controls and UI designed for seamless touch gameplay"
                            color="green"
                        />
                        <FeatureBigCard
                            icon={<Users className="w-8 h-8" />}
                            title="Community"
                            description="Join a growing community of players shaping the game's future"
                            color="emerald"
                        />
                    </div>
                </div>
            </section>

            {/* Add required animations to global CSS or style tag */}
            <style jsx global>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fade-in-up-delayed {
                    0% {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    50% {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-20px) rotate(5deg);
                    }
                }

                @keyframes float-delayed {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-30px) rotate(-5deg);
                    }
                }

                @keyframes pulse-glow {
                    0%, 100% {
                        box-shadow: 0 10px 40px -10px rgba(16, 185, 129, 0.3);
                    }
                    50% {
                        box-shadow: 0 10px 60px -10px rgba(16, 185, 129, 0.5);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out;
                }

                .animate-fade-in-up-delayed {
                    animation: fade-in-up-delayed 1.2s ease-out;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 8s ease-in-out infinite;
                }

                .animate-pulse-glow {
                    animation: pulse-glow 2s ease-in-out infinite;
                }
            `}</style>
        </main>
    );
}

// Countdown Box Component
function CountdownBox({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-white border-2 border-emerald-200 shadow-md">
            <span className="text-2xl font-bold text-emerald-700">{value}</span>
            <span className="text-xs text-gray-500 font-medium">{label}</span>
        </div>
    );
}

// Platform Icon Component
function PlatformIcon({ name }: { name: string }) {
    const icons: Record<string, JSX.Element> = {
        Windows: (
            <svg className="w-6 h-6 text-gray-600 hover:text-emerald-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>
        ),
        Android: (
            <svg className="w-6 h-6 text-gray-600 hover:text-emerald-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.341c-.54 0-.979.44-.979.98s.439.98.979.98c.541 0 .98-.44.98-.98s-.439-.98-.98-.98zm-11.046 0c-.54 0-.98.44-.98.98s.44.98.98.98c.54 0 .979-.44.979-.98s-.439-.98-.979-.98zm11.405-6.594l1.997-3.467a.416.416 0 00-.156-.569.416.416 0 00-.569.156l-2.018 3.499a8.157 8.157 0 00-3.58-.816 8.157 8.157 0 00-3.58.816L7.958 4.867a.416.416 0 00-.569-.156.416.416 0 00-.156.569l1.997 3.467C6.906 9.925 5.25 12.426 5.25 15.341h13.5c0-2.915-1.656-5.416-3.868-6.594z" />
            </svg>
        ),
        iOS: (
            <svg className="w-6 h-6 text-gray-600 hover:text-emerald-600 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
        ),
        Desktop: (
            <svg className="w-6 h-6 text-gray-600 hover:text-emerald-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        )
    };

    return icons[name] || null;
}

// Feature Card Component (floating)
function FeatureCard({ icon, title, color }: { icon: React.ReactNode; title: string; color: string }) {
    const colorClasses = {
        emerald: 'from-emerald-500 to-emerald-600',
        teal: 'from-teal-500 to-teal-600',
        green: 'from-green-500 to-green-600'
    };

    return (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white shadow-lg border border-gray-100">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center text-white`}>
                {icon}
            </div>
            <span className="font-semibold text-sm text-gray-900 whitespace-nowrap">{title}</span>
        </div>
    );
}

// Feature Big Card Component
function FeatureBigCard({
    icon,
    title,
    description,
    color
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
}) {
    const colorClasses = {
        emerald: 'from-emerald-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-emerald-700',
        teal: 'from-teal-500 to-teal-600 group-hover:from-teal-600 group-hover:to-teal-700',
        green: 'from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700'
    };

    return (
        <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

// Discord Icon Component
function DiscordIcon() {
    return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
    );
}

// Game Preview Illustration SVG Component
function GamePreviewIllustration() {
    return (
        <svg
            className="w-full h-full max-w-2xl"
            viewBox="0 0 800 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Sky */}
            <rect width="800" height="450" fill="url(#skyGradient)" />

            {/* Sun */}
            <circle cx="650" cy="100" r="40" fill="#FCD34D" opacity="0.8" />
            <circle cx="650" cy="100" r="50" fill="#FCD34D" opacity="0.3" />

            {/* Mountains Background */}
            <path d="M0 250 L200 150 L400 200 L600 120 L800 180 L800 450 L0 450 Z" fill="#10B981" opacity="0.3" />
            <path d="M0 280 L150 200 L350 240 L550 170 L800 220 L800 450 L0 450 Z" fill="#059669" opacity="0.4" />

            {/* Ground */}
            <rect y="300" width="800" height="150" fill="#047857" />

            {/* Farm Plot Grid */}
            <g opacity="0.6">
                <rect x="100" y="320" width="60" height="60" fill="#065F46" stroke="#10B981" strokeWidth="2" />
                <rect x="170" y="320" width="60" height="60" fill="#065F46" stroke="#10B981" strokeWidth="2" />
                <rect x="240" y="320" width="60" height="60" fill="#065F46" stroke="#10B981" strokeWidth="2" />
                <rect x="100" y="390" width="60" height="60" fill="#065F46" stroke="#10B981" strokeWidth="2" />
                <rect x="170" y="390" width="60" height="60" fill="#065F46" stroke="#10B981" strokeWidth="2" />
                <rect x="240" y="390" width="60" height="60" fill="#065F46" stroke="#10B981" strokeWidth="2" />
            </g>

            {/* Trees */}
            <g>
                {/* Tree 1 */}
                <rect x="500" y="270" width="20" height="40" fill="#92400E" />
                <circle cx="510" cy="265" r="30" fill="#059669" />
                <circle cx="495" cy="255" r="25" fill="#10B981" />
                <circle cx="525" cy="255" r="25" fill="#10B981" />

                {/* Tree 2 */}
                <rect x="600" y="290" width="20" height="40" fill="#92400E" />
                <circle cx="610" cy="285" r="30" fill="#059669" />
                <circle cx="595" cy="275" r="25" fill="#10B981" />
                <circle cx="625" cy="275" r="25" fill="#10B981" />
            </g>

            {/* House/Barn */}
            <g>
                <rect x="350" y="240" width="100" height="80" fill="#B45309" />
                <polygon points="350,240 400,200 450,240" fill="#DC2626" />
                <rect x="380" y="280" width="30" height="40" fill="#78350F" />
                <rect x="365" y="250" width="20" height="20" fill="#FEF3C7" opacity="0.8" />
                <rect x="415" y="250" width="20" height="20" fill="#FEF3C7" opacity="0.8" />
            </g>

            {/* Crops/Plants */}
            <g opacity="0.9">
                <circle cx="120" cy="340" r="8" fill="#34D399" />
                <circle cx="140" cy="345" r="8" fill="#34D399" />
                <circle cx="130" cy="355" r="8" fill="#34D399" />

                <circle cx="190" cy="340" r="8" fill="#FBBF24" />
                <circle cx="210" cy="345" r="8" fill="#FBBF24" />
                <circle cx="200" cy="355" r="8" fill="#FBBF24" />

                <circle cx="260" cy="340" r="8" fill="#F87171" />
                <circle cx="280" cy="345" r="8" fill="#F87171" />
                <circle cx="270" cy="355" r="8" fill="#F87171" />
            </g>

            {/* Clouds */}
            <g opacity="0.5">
                <ellipse cx="150" cy="80" rx="40" ry="20" fill="white" />
                <ellipse cx="130" cy="85" rx="30" ry="15" fill="white" />
                <ellipse cx="170" cy="85" rx="35" ry="18" fill="white" />

                <ellipse cx="550" cy="120" rx="50" ry="25" fill="white" />
                <ellipse cx="520" cy="125" rx="40" ry="20" fill="white" />
                <ellipse cx="580" cy="125" rx="45" ry="22" fill="white" />
            </g>

            {/* Gradients */}
            <defs>
                <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#93C5FD" />
                    <stop offset="100%" stopColor="#DBEAFE" />
                </linearGradient>
            </defs>
        </svg>
    );
}