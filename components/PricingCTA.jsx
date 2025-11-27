import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function PricingCTA() {
    return (
        <section className="bg-primary-800 py-20 relative overflow-hidden">
            {/* Animated dots background */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute w-2 h-2 bg-primary-300 rounded-full top-[10%] left-[5%] animate-pulse"></div>
                <div
                    className="absolute w-1.5 h-1.5 bg-primary-400 rounded-full top-[20%] left-[15%] animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                    className="absolute w-2 h-2 bg-primary-200 rounded-full top-[60%] left-[8%] animate-pulse"
                    style={{ animationDelay: "1s" }}
                ></div>
                <div
                    className="absolute w-1 h-1 bg-primary-300 rounded-full top-[40%] left-[12%] animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                ></div>
                <div
                    className="absolute w-2.5 h-2.5 bg-primary-300 rounded-full top-[15%] right-[10%] animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                ></div>
                <div
                    className="absolute w-1.5 h-1.5 bg-primary-400 rounded-full top-[25%] right-[20%] animate-pulse"
                    style={{ animationDelay: "0.8s" }}
                ></div>
                <div
                    className="absolute w-2 h-2 bg-primary-200 rounded-full top-[50%] right-[5%] animate-pulse"
                    style={{ animationDelay: "1.2s" }}
                ></div>
                <div
                    className="absolute w-1 h-1 bg-primary-300 rounded-full top-[70%] right-[15%] animate-pulse"
                    style={{ animationDelay: "1.7s" }}
                ></div>
                <div
                    className="absolute w-2 h-2 bg-primary-300 rounded-full top-[80%] left-[25%] animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                ></div>
                <div
                    className="absolute w-1.5 h-1.5 bg-primary-400 rounded-full top-[45%] right-[30%] animate-pulse"
                    style={{ animationDelay: "1.4s" }}
                ></div>
            </div>

            <div className="relative mx-auto max-w-4xl px-6 md:px-10 lg:px-12">
                <div className="text-center">
                    {/* Main heading */}
                    <h2 className="text-white font-bold text-3xl sm:text-4xl tracking-tight mb-4">
                        Get a professional website
                    </h2>

                    {/* Large Price Display */}
                    <div className="mb-8">
                        <div className="text-primary-100 text-sm mb-2">
                            Starting from
                        </div>
                        <div className="text-white font-bold text-5xl sm:text-6xl mb-2">
                            50,000{" "}
                            <span className="text-3xl sm:text-4xl">RWF</span>
                        </div>
                        <div className="text-primary-200 text-sm">
                            Get a cool website for your business
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-primary-800 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
                        >
                            Contact Us 
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
