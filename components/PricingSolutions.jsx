import SectionHeader from "./SectionHeader";
import { Check } from "lucide-react";

export default function PricingSolutions() {
    const solutions = [
        {
            title: "Starter",
            subtitle: "Get organized and set up simple sales processes",
            price: "50,000",
            period: "/project",
            buttonText: "Get Started",
            buttonStyle: "outline",
            trial: "Free consultation. No upfront payment required.",
            features: [
                "Up to 3 pages",
                "Mobile responsive layout",
                "Contact form integration",
                "Free domain & hosting (1 year)",
                "Basic SEO setup",
                "1 month support",
            ],
        },
        {
            title: "Professional",
            subtitle: "Everything you need to boost performance and revenue",
            price: "73,000",
            period: "/project",
            buttonText: "Get Started",
            buttonStyle: "solid",
            recommended: true,
            trial: "Free consultation. No credit card required.",
            features: [
                "Up to 5 pages",
                "Professional modern design",
                "SEO-optimized structure",
                "Free hosting + domain (1st year)",
                "SSL certificate included",
                "Mobile & tablet responsive",
                "Contact form integration",
                "3 months free support",
                "Google indexing",
                "Speed optimization",
            ],
        },
        {
            title: "Enterprise",
            subtitle: "Customize without limits and access unrivaled support",
            price: "150,000+",
            period: "/project",
            buttonText: "Get Started",
            buttonStyle: "outline",
            trial: "Free consultation. Custom pricing available.",
            features: [
                "Unlimited pages",
                "Full online store / E-Commerce",
                "Product & category management",
                "Secure payment gateway",
                "Order & customer dashboard",
                "Advanced SEO optimization",
                "Admin training included",
                "Custom features & integrations",
                "Priority support",
                "Booking systems available",
            ],
        },
    ];

    return (
        <section className="bg-gradient-to-b from-white to-neutral-50 py-24">
            <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
                <SectionHeader
                    headline="Choose Your Solution"
                    supportiveText="Transparent pricing for professional websites tailored to Rwandan businesses"
                />

                {/* Pricing Grid */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {solutions.map((solution, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white rounded-2xl border transition-all duration-300 ${
                                solution.recommended
                                    ? "border-primary-500 shadow-2xl scale-105 md:scale-110"
                                    : "border-neutral-200 hover:border-primary-200 hover:shadow-lg"
                            }`}
                        >
                            {/* Recommended badge */}
                            {solution.recommended && (
                                <div className="absolute -top-0 left-0 right-0 bg-primary-600 text-white py-2 px-4 rounded-t-2xl text-xs font-bold text-center uppercase">
                                    Recommended
                                </div>
                            )}

                            <div
                                className={`p-8 ${
                                    solution.recommended ? "pt-12" : ""
                                }`}
                            >
                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {solution.title}
                                </h3>

                                {/* Subtitle */}
                                <p className="text-sm text-gray-600 mb-6 min-h-[40px]">
                                    {solution.subtitle}
                                </p>

                                {/* Price */}
                                <div className="mb-6">
                                    <span className="text-4xl font-bold text-gray-900">
                                        {solution.price}
                                    </span>
                                    <span className="text-gray-600 ml-1">
                                        RWF
                                    </span>
                                    <span className="text-gray-500 text-sm ml-1">
                                        {solution.period}
                                    </span>
                                </div>

                                {/* CTA Button */}
                                <a
                                    href="/contact"
                                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all mb-4 ${
                                        solution.buttonStyle === "solid"
                                            ? "bg-primary-600 text-white hover:bg-primary-700 shadow-md"
                                            : "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50"
                                    }`}
                                >
                                    {solution.buttonText}
                                </a>

                                {/* Trial info */}
                                <p className="text-xs text-gray-500 text-center mb-6">
                                    {solution.trial}
                                </p>

                                {/* Divider */}
                                <div className="border-t border-gray-200 mb-6"></div>

                                {/* Features */}
                                <ul className="space-y-3">
                                    {solution.features.map((feature, fIdx) => (
                                        <li
                                            key={fIdx}
                                            className="flex items-start gap-3 text-sm"
                                        >
                                            <div className="flex-shrink-0 mt-0.5">
                                                <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                                                    <Check className="w-3 h-3 text-primary-600" />
                                                </div>
                                            </div>
                                            <span className="text-gray-700">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Solutions */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Other Solutions We Offer
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
                        <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                Website Redesign & Fixing
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                                From 40,000 RWF
                            </p>
                            <p className="text-sm text-gray-700 mb-4">
                                Speed optimization, UI/UX improvements, bug
                                fixing, mobile responsiveness, and SEO
                                enhancements.
                            </p>
                            <a
                                href="/contact"
                                className="text-primary-600 font-semibold hover:text-primary-700 text-sm"
                            >
                                Learn More →
                            </a>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-primary-200 hover:shadow-lg transition-all">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                Custom Web Solutions
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Custom Pricing
                            </p>
                            <p className="text-sm text-gray-700 mb-4">
                                Unique features, advanced integrations, scalable
                                architecture, and personalized ongoing support
                                for your specific needs.
                            </p>
                            <a
                                href="/contact"
                                className="text-primary-600 font-semibold hover:text-primary-700 text-sm"
                            >
                                Discuss Your Project →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
