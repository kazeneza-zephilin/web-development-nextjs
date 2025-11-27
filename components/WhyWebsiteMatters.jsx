"use client";

import SectionHeader from "./SectionHeader";
import ShapeDivider from "./ShapeDivider";
import {
    Globe,
    Handshake,
    TrendingUp,
    Images,
    BadgeDollarSign,
    Zap,
} from "lucide-react";

export default function WhyWebsiteMatters() {
    const headline = "Why a Website Matters";
    const supportiveText = "Your business deserves to be online";

    const benefits = [
        {
            Icon: Globe,
            title: "Always Open, Always Visible",
            description:
                "Your business is online 24/7 — customers can find you anytime.",
        },
        {
            Icon: Handshake,
            title: "Build Trust & Credibility",
            description:
                "A modern website shows professionalism and inspires confidence.",
        },
        {
            Icon: TrendingUp,
            title: "Reach More Customers",
            description:
                "Expand beyond walk-ins and social media followers to anyone searching online.",
        },
        {
            Icon: Images,
            title: "Showcase Products & Services",
            description:
                "Share your portfolio, menu, services, or projects in an attractive way.",
        },
        {
            Icon: BadgeDollarSign,
            title: "Cost-effective Marketing",
            description:
                "Websites are more affordable and measurable than traditional ads.",
        },
        {
            Icon: Zap,
            title: "Stay Ahead of Competitors",
            description:
                "Businesses without websites miss opportunities — be the modern choice.",
        },
    ];

    // Chart.js donut config (client-side via ChartCSR)
    const chartData = {
        type: "doughnut",
        data: {
            labels: benefits.map((b) => b.title),
            datasets: [
                {
                    data: [16, 17, 17, 17, 16, 17],
                    backgroundColor: [
                        "#DBEAFE", // primary-100
                        "#BFDBFE", // primary-200
                        "#93C5FD", // primary-300
                        "#E5E7EB", // neutral-200
                        "#D1D5DB", // neutral-300
                        "#9CA3AF", // neutral-400
                    ],
                    borderWidth: 0,
                    cutout: "65%",
                },
            ],
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: true,
                },
            },
        },
    };

    return (
        <section className="bg-white py-24 relative">
            <ShapeDivider className="fill-neutral-50" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
                <SectionHeader
                    headline={headline}
                    supportiveText={supportiveText}
                />

                {/* Grid layout with custom SVG illustration */}
                <div className="relative mt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Custom SVG Illustration */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-md">
                                <svg
                                    viewBox="0 0 400 300"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-auto"
                                >
                                    {/* Background circles */}
                                    <circle
                                        cx="200"
                                        cy="150"
                                        r="120"
                                        fill="#DBEAFE"
                                        opacity="0.5"
                                    />
                                    <circle
                                        cx="200"
                                        cy="150"
                                        r="90"
                                        fill="#93C5FD"
                                        opacity="0.3"
                                    />

                                    {/* Globe/World */}
                                    <circle
                                        cx="200"
                                        cy="150"
                                        r="60"
                                        fill="#3B82F6"
                                        opacity="0.2"
                                    />
                                    <circle
                                        cx="200"
                                        cy="150"
                                        r="55"
                                        stroke="#3B82F6"
                                        strokeWidth="3"
                                        fill="none"
                                    />

                                    {/* Globe lines */}
                                    <ellipse
                                        cx="200"
                                        cy="150"
                                        rx="55"
                                        ry="20"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <line
                                        x1="200"
                                        y1="95"
                                        x2="200"
                                        y2="205"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M 170 150 Q 200 130, 230 150 Q 200 170, 170 150"
                                        stroke="#3B82F6\"
                                        strokeWidth="2"
                                        fill="none"
                                    />

                                    {/* Floating devices */}
                                    <g transform="translate(280, 100)">
                                        <rect
                                            x="0"
                                            y="0"
                                            width="60"
                                            height="40"
                                            rx="4"
                                            fill="white"
                                            stroke="#3B82F6"
                                            strokeWidth="2"
                                        />
                                        <rect
                                            x="5"
                                            y="5"
                                            width="50"
                                            height="25"
                                            fill="#DBEAFE"
                                        />
                                        <rect
                                            x="5"
                                            y="32"
                                            width="15"
                                            height="3"
                                            rx="1"
                                            fill="#93C5FD"
                                        />
                                    </g>

                                    {/* Mobile device */}
                                    <g transform="translate(60, 180)">
                                        <rect
                                            x="0"
                                            y="0"
                                            width="35"
                                            height="60"
                                            rx="6"
                                            fill="white"
                                            stroke="#3B82F6"
                                            strokeWidth="2"
                                        />
                                        <rect
                                            x="5"
                                            y="8"
                                            width="25"
                                            height="40"
                                            fill="#DBEAFE"
                                        />
                                        <circle
                                            cx="17.5"
                                            cy="53"
                                            r="3"
                                            fill="#93C5FD"
                                        />
                                    </g>

                                    {/* Connecting lines */}
                                    <path
                                        d="M 200 150 L 280 120"
                                        stroke="#3B82F6"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                        opacity="0.5"
                                    />
                                    <path
                                        d="M 200 150 L 77 210"
                                        stroke="#3B82F6"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                        opacity="0.5"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Right side - Benefits list */}
                        <div className="space-y-6">
                            {benefits.map((b, i) => (
                                <div
                                    key={b.title}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-50 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                        <b.Icon
                                            className="w-6 h-6 text-primary-500"
                                            aria-hidden
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900 text-lg">
                                            {b.title}
                                        </div>
                                        <div className="text-sm text-gray-600 mt-1">
                                            {b.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
