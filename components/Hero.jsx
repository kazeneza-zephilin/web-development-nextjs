import BtnPrimary from "./BtnPrimary";
import ShapeDivider from "./ShapeDivider";
import { Flame } from "lucide-react";

export default function Hero() {
    // Static, partnership-focused marketing copy per request
    const headline = "Custom Tech Solutions for";
    const headlineItalic = "Unique Challenges";
    const supportiveText =
        "For over a decade, we've delivered digital solutions that streamline processes and boost efficiency, offering services like custom development.";
    const primaryButton = { label: "Let's Collaborate", url: "/contact" };

    return (
        <section className="bg-gradient-to-b from-neutral-50 to-primary-50/30 relative overflow-hidden">
            <ShapeDivider className="fill-white" />
            <div className="relative z-50 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pt-[168px] pb-40 sm:pt-52 sm:pb-48">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Top badge */}
                        <div className="inline-flex items-center gap-2 bg-white border border-neutral-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                            <Flame className="w-4 h-4 text-orange-500" />
                            <span className="text-sm text-gray-700">
                                We are a{" "}
                                <span className="italic font-semibold">
                                    top tier
                                </span>{" "}
                                Digital Agency
                            </span>
                        </div>

                        <h1 className="text-gray-900 font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                            {headline}
                        </h1>
                        <h1 className="text-gray-900 font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight italic mt-2">
                            {headlineItalic}
                        </h1>

                        <p className="text-gray-600 text-base sm:text-lg mt-6 max-w-xl mx-auto lg:mx-0">
                            {supportiveText}
                        </p>

                        <div className="mt-8">
                            <BtnPrimary
                                className="w-full sm:w-auto"
                                label={primaryButton.label}
                                url={primaryButton.url}
                                showIcon={false}
                            />
                        </div>
                    </div>

                    {/* Right Side - Floating Project Mockups */}
                    <div className="hidden lg:block relative h-[500px]">
                        {/* Decorative circles */}
                        <div className="absolute top-10 left-10 w-24 h-24 bg-primary-100 rounded-full opacity-40 blur-xl"></div>
                        <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-200 rounded-full opacity-30 blur-xl"></div>
                        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-60 blur-md"></div>

                        {/* Project Cards - Floating Layout */}
                        <div className="absolute top-0 left-0 w-64 h-72 bg-white rounded-xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                            <div className="bg-gradient-to-br from-primary-500 to-primary-700 h-8 flex items-center px-4 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-4">
                                <div className="bg-neutral-100 h-3 w-20 rounded mb-3"></div>
                                <div className="space-y-2">
                                    <div className="bg-neutral-200 h-2 w-full rounded"></div>
                                    <div className="bg-neutral-200 h-2 w-3/4 rounded"></div>
                                    <div className="bg-neutral-200 h-2 w-5/6 rounded"></div>
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    <div className="bg-neutral-100 h-16 rounded"></div>
                                    <div className="bg-neutral-100 h-16 rounded"></div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute top-16 right-0 w-72 h-80 bg-white rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                            <div className="bg-gradient-to-br from-purple-500 to-pink-600 h-8 flex items-center px-4 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-neutral-100 h-4 w-28 rounded"></div>
                                    <div className="bg-primary-500 h-8 w-8 rounded-full"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-primary-400"></div>
                                        <div className="bg-neutral-200 h-2 w-full rounded"></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        <div className="bg-neutral-200 h-2 w-4/5 rounded"></div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="bg-neutral-200 h-2 w-3/4 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-1/4 w-56 h-64 bg-white rounded-xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                            <div className="bg-gradient-to-br from-green-500 to-teal-600 h-8 flex items-center px-4 gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-4">
                                <div className="text-center mb-4">
                                    <div className="bg-neutral-100 h-20 w-20 rounded-full mx-auto mb-2"></div>
                                    <div className="bg-neutral-200 h-2 w-24 rounded mx-auto"></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-neutral-100 h-12 rounded"></div>
                                    <div className="bg-neutral-100 h-12 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
