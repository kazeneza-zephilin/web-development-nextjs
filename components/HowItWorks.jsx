"use client";

import SectionHeader from "./SectionHeader";
import ShapeDivider from "./ShapeDivider";
import { MessageCircle, Lightbulb, Hammer, Rocket } from "lucide-react";

export default function HowItWorks({ data }) {
    const headline = data?.headline || "How We Work – Wexly Process";
    const supportiveText =
        data?.supportiveText ||
        "Our proven approach to building your online presence";

    const steps = [
        {
            number: "1",
            title: "Consultation & Business Understanding",
            description:
                "We start by understanding your business, your goals, and your customers. You share your ideas, and we help you define the right online solution.",
            Icon: MessageCircle,
        },
        {
            number: "2",
            title: "Solution Strategy",
            description:
                "Instead of selling fixed packages, we design a custom website solution based on what your business actually needs to grow and attract customers.",
            Icon: Lightbulb,
        },
        {
            number: "3",
            title: "Design & Development",
            description:
                "We build your website with modern technology, fast loading speed, and mobile-first design. You'll review the progress and suggest changes during development.",
            Icon: Hammer,
        },
        {
            number: "4",
            title: "Launch & Support",
            description:
                "After approval, we launch your website, connect your domain, secure it with SSL, and provide ongoing support to keep everything running smoothly.",
            Icon: Rocket,
        },
    ];

    return (
        <section className="bg-gradient-to-b from-white to-neutral-50 py-24 relative">
            <ShapeDivider className="fill-gray-50" />
            <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
                <SectionHeader
                    headline={headline}
                    supportiveText={supportiveText}
                />

                {/* Beautiful Step Cards Grid */}
                <div className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step, index) => {
                            const { Icon, title, description, number } = step;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-2xl p-8 shadow-lg border-2 border-neutral-100 hover:border-primary-300 hover:shadow-2xl transition-all duration-300"
                                >
                                    {/* Decorative corner gradient */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    {/* Step number badge */}
                                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-primary-600 shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                        <span className="text-white font-bold text-xl">
                                            {number}
                                        </span>
                                    </div>

                                    {/* Icon container */}
                                    <div className="mb-6 relative z-10">
                                        <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 group-hover:from-primary-200 group-hover:to-primary-100 transition-colors">
                                            <Icon className="w-10 h-10 text-primary-600" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                            {title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
