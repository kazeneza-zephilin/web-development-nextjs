import ShapeDivider from "./ShapeDivider";
import SectionHeader from "./SectionHeader";

export default function WexlyServices({ data }) {
    const headline = data?.headline || "Our Services";
    const supportiveText =
        data?.supportiveText ||
        "Professional web solutions for every business need";

    const services = [
        {
            title: "Business Websites",
            icon: "🏢",
            description:
                "Professional websites that showcase your business and attract customers",
        },
        {
            title: "Online Stores",
            icon: "🛒",
            description:
                "E-commerce solutions to sell your products online 24/7",
        },
        {
            title: "Portfolios",
            icon: "🎨",
            description:
                "Beautiful portfolios to showcase your work and talent",
        },
        {
            title: "Booking Sites",
            icon: "📅",
            description:
                "Online booking systems for appointments and reservations",
        },
        {
            title: "Maintenance & Support",
            icon: "🔧",
            description:
                "Ongoing support to keep your website running smoothly",
        },
    ];

    return (
        <section className="bg-neutral-50 py-24 relative">
            <ShapeDivider className="fill-white" />
            <div className="relative mx-auto max-w-5xl px-4">
                <SectionHeader
                    headline={headline}
                    supportiveText={supportiveText}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 border border-neutral-200 hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="text-5xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
