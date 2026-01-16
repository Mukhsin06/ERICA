"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Crown, Star } from "lucide-react";

export const PackagesSummarySlide = () => {
    const t = useTranslations("HomePage.packages_summary");

    const packages = [
        {
            key: "start",
            icon: Rocket,
            bg: "bg-emerald-50",
            iconColor: "text-emerald-600",
            border: "hover:border-emerald-200",
            glow: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]",
        },
        {
            key: "premium",
            icon: TrendingUp,
            bg: "bg-blue-50",
            iconColor: "text-blue-600",
            border: "hover:border-blue-200",
            glow: "group-hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]",
            featured: true,
        },
        {
            key: "vip",
            icon: Crown,
            bg: "bg-purple-50",
            iconColor: "text-purple-600",
            border: "hover:border-purple-200",
            glow: "group-hover:shadow-[0_0_40px_-10px_rgba(147,51,234,0.3)]",
        },
    ];

    return (
        <section className="h-[90vh] max-h-[90vh] min-h-[600px] w-full flex items-center justify-center bg-white relative overflow-hidden py-4">
            {/* Background Gradients */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-50/50 via-blue-50/50 to-purple-50/50 rounded-full blur-[120px] pointer-events-none opacity-60" />

            <div className="container-padding w-full max-w-[1200px] relative z-10 flex flex-col justify-center h-full">

                {/* Header */}
                <div className="text-center mb-6 shrink-0">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-tight"
                    >
                        {t("Title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm text-gray-500 font-medium max-w-xl mx-auto"
                    >
                        {t("Subtitle")}
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-4 lg:gap-6 items-stretch shrink-0">
                    {packages.map((pkg, index) => {
                        const Icon = pkg.icon;
                        return (
                            <motion.div
                                key={pkg.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className={`group relative bg-white/60 backdrop-blur-xl border border-white/50 rounded-[1.5rem] p-5 lg:p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-1 ${pkg.border} ${pkg.glow} ${pkg.featured ? 'md:scale-105 z-10 shadow-xl shadow-blue-900/5 border-blue-100/50' : 'hover:bg-white/80'}`}
                            >
                                {pkg.featured && (
                                    <div className="absolute -top-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-blue-500/20 tracking-wide uppercase">
                                        <Star className="w-3 h-3 fill-current" />
                                        {t(`cards.${pkg.key}.Badge`)}
                                    </div>
                                )}

                                <div className={`w-12 h-12 mb-4 rounded-xl ${pkg.bg} ${pkg.iconColor} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3 className={`font-bold text-sm uppercase tracking-widest mb-2 text-gray-400 group-hover:text-gray-600 transition-colors`}>
                                    {t(`cards.${pkg.key}.Title`)}
                                </h3>

                                <div className="text-3xl lg:text-4xl font-black text-gray-900 mb-3 tracking-tighter">
                                    {t(`cards.${pkg.key}.Price`)}
                                </div>

                                <p className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed mb-4 grow">
                                    {t(`cards.${pkg.key}.Description`)}
                                </p>

                                {/* Button always visible but subtle */}
                                <div className="w-full pt-4 border-t border-gray-100">
                                    <div className={`w-full py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide cursor-pointer transition-colors ${pkg.featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                                        Tanlash
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center mt-6 opacity-60 shrink-0"
                >
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium bg-gray-50 px-3 py-1.5 rounded-full">
                        <span className="text-amber-500">⚡</span>
                        {t("FooterNote")}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
