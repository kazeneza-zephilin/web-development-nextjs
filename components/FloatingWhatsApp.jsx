"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
    const whatsappUrl =
        "https://wa.me/250790005933?text=Hi%20Wexly%2C%20I'm%20interested%20in%20getting%20a%20website%20for%20my%20business.%20Can%20we%20discuss%3F";

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Chat with us
            </span>
        </a>
    );
}
