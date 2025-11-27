"use client";

import SectionHeader from "./SectionHeader";
import {
    Building2,
    ShoppingCart,
    Palette,
    Calendar,
    Wrench,
} from "lucide-react";

export default function WexlyHelps() {
    const items = [
        {
            Icon: Building2,
            title: "Business Websites",
            desc: "Professional websites that showcase your business and attract customers",
        },
        {
            Icon: ShoppingCart,
            title: "Online Stores",
            desc: "E-commerce solutions to sell your products online 24/7",
        },
        {
            Icon: Palette,
            title: "Portfolios",
            desc: "Beautiful portfolios to showcase your work and talent",
        },
        {
            Icon: Calendar,
            title: "Booking Sites",
            desc: "Online booking systems for appointments and reservations",
        },
        {
            Icon: Wrench,
            title: "Maintenance & Support",
            desc: "Ongoing support to keep your website running smoothly",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-neutral-50 to-white py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
                <SectionHeader
                    headline="How Wexly Helps Your Business"
                    supportiveText="Professional web solutions tailored to your needs"
                />

                <div className="mt-16">
                    {/* Custom SVG Illustration at top center */}
                    <div className="flex justify-center mb-12">
                        <div className="w-full max-w-lg">
                            <svg
                                viewBox="0 0 600 300"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-auto"
                            >
                                {/* Background decorative circles */}
                                <circle
                                    cx="100"
                                    cy="50"
                                    r="40"
                                    fill="#DBEAFE"
                                    opacity="0.4"
                                />
                                <circle
                                    cx="500"
                                    cy="250"
                                    r="35"
                                    fill="#93C5FD"
                                    opacity="0.3"
                                />
                                <circle
                                    cx="520"
                                    cy="80"
                                    r="50"
                                    fill="#BFDBFE"
                                    opacity="0.3"
                                />

                                {/* Main laptop/screen */}
                                <g transform="translate(200, 100)">
                                    {/* Screen */}
                                    <rect
                                        x="0"
                                        y="0"
                                        width="200"
                                        height="130"
                                        rx="8"
                                        fill="white"
                                        stroke="#3B82F6"
                                        strokeWidth="3"
                                    />
                                    <rect
                                        x="8"
                                        y="8"
                                        width="184"
                                        height="100"
                                        fill="#EFF6FF"
                                    />

                                    {/* Browser chrome */}
                                    <rect
                                        x="8"
                                        y="8"
                                        width="184"
                                        height="20"
                                        fill="#3B82F6"
                                        rx="4"
                                    />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="3"
                                        fill="white"
                                        opacity="0.8"
                                    />
                                    <circle
                                        cx="28"
                                        cy="18"
                                        r="3"
                                        fill="white"
                                        opacity="0.8"
                                    />
                                    <circle
                                        cx="38"
                                        cy="18"
                                        r="3"
                                        fill="white"
                                        opacity="0.8"
                                    />

                                    {/* Content lines */}
                                    <rect
                                        x="20"
                                        y="40"
                                        width="80"
                                        height="8"
                                        rx="2"
                                        fill="#3B82F6"
                                    />
                                    <rect
                                        x="20"
                                        y="55"
                                        width="160"
                                        height="4"
                                        rx="1"
                                        fill="#93C5FD"
                                    />
                                    <rect
                                        x="20"
                                        y="65"
                                        width="140"
                                        height="4"
                                        rx="1"
                                        fill="#93C5FD"
                                    />
                                    <rect
                                        x="20"
                                        y="75"
                                        width="150"
                                        height="4"
                                        rx="1"
                                        fill="#93C5FD"
                                    />

                                    {/* Image placeholder */}
                                    <rect
                                        x="20"
                                        y="88"
                                        width="50"
                                        height="40"
                                        rx="4"
                                        fill="#DBEAFE"
                                    />
                                    <rect
                                        x="75"
                                        y="88"
                                        width="50"
                                        height="40"
                                        rx="4"
                                        fill="#DBEAFE"
                                    />
                                    <rect
                                        x="130"
                                        y="88"
                                        width="50"
                                        height="40"
                                        rx="4"
                                        fill="#DBEAFE"
                                    />

                                    {/* Laptop base */}
                                    <path
                                        d="M -15 130 L 215 130 L 205 145 L -5 145 Z"
                                        fill="#3B82F6"
                                    />
                                </g>

                                {/* Code brackets left */}
                                <g transform="translate(110, 130)">
                                    <text
                                        x="0"
                                        y="0"
                                        fill="#3B82F6"
                                        fontSize="48"
                                        fontWeight="bold"
                                        fontFamily="monospace"
                                    >
                                        &lt;/&gt;
                                    </text>
                                </g>

                                {/* Target/focus icon */}
                                <g transform="translate(460, 140)">
                                    <circle
                                        cx="0"
                                        cy="0"
                                        r="28"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="3"
                                    />
                                    <circle
                                        cx="0"
                                        cy="0"
                                        r="18"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                    />
                                    <circle
                                        cx="0"
                                        cy="0"
                                        r="8"
                                        fill="#3B82F6"
                                    />
                                    <line
                                        x1="-35"
                                        y1="0"
                                        x2="-28"
                                        y2="0"
                                        stroke="#3B82F6"
                                        strokeWidth="3"
                                    />
                                    <line
                                        x1="28"
                                        y1="0"
                                        x2="35"
                                        y2="0"
                                        stroke="#3B82F6"
                                        strokeWidth="3"
                                    />
                                    <line
                                        x1="0"
                                        y1="-35"
                                        x2="0"
                                        y2="-28"
                                        stroke="#3B82F6"
                                        strokeWidth="3"
                                    />
                                    <line
                                        x1="0"
                                        y1="28"
                                        x2="0"
                                        y2="35"
                                        stroke="#3B82F6"
                                        strokeWidth="3"
                                    />
                                </g>

                                {/* Success checkmark */}
                                <g transform="translate(480, 220)">
                                    <circle
                                        cx="0"
                                        cy="0"
                                        r="22"
                                        fill="#10B981"
                                    />
                                    <path
                                        d="M -10 0 L -4 7 L 10 -8"
                                        stroke="white"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>

                    {/* Clean professional grid layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item, idx) => {
                            const { Icon, title, desc } = item;
                            return (
                                <div
                                    key={title}
                                    className="group bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                                >
                                    {/* Icon with primary color */}
                                    <div className="w-12 h-12 mb-4 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                                        <Icon
                                            className="w-6 h-6 text-primary-500"
                                            aria-hidden
                                        />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                                        {title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-gray-600">
                            Ready to elevate your business online?{" "}
                            <a
                                href="/contact"
                                className="text-primary-600 font-semibold hover:underline"
                            >
                                Get started today
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
