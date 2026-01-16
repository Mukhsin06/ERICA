"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, BarChart, Settings, FileText, Globe } from "lucide-react";

export const CapabilitiesSlide = () => {
    const t = useTranslations("HomePage.capabilities");

    const features = [
        { key: "1", icon: LayoutDashboard }, // Yagona Panel
        { key: "2", icon: Settings },        // Oson Boshqaruv
        { key: "3", icon: BarChart },        // Statistika
        { key: "4", icon: Users },           // Mijozlar Bazasi
        { key: "5", icon: FileText },        // Kontent
        { key: "6", icon: Globe },           // Integratsiya
    ];

    return (
        <section className="min-h-full w-full flex items-center justify-center bg-white pt-10 pb-24">
            <div className="container-padding w-full max-w-[1400px]">

                {/* Header Centered */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-4 mb-3"
                    >
                        <div className="h-px w-10 bg-gray-300" />
                        <span className="text-sm font-bold tracking-[0.2em] text-[#2e7d32] uppercase">{t("Badge")}</span>
                        <div className="h-px w-10 bg-gray-300" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
                    >
                        {t("Title")}{" "}
                        <span className="text-[#2e7d32]">{t("TitleHighlight")}</span>
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group flex flex-col gap-4"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-[#e8f5e9] flex items-center justify-center text-[#2e7d32] group-hover:scale-110 transition-transform">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{t(`cards.${feature.key}.Title`)}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{t(`cards.${feature.key}.Description`)}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Footer Pills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center mt-8"
                >
                    <div className="bg-[#f5f7f6] px-6 py-2 rounded-full text-sm font-medium text-[#2e7d32] border border-[#e8f5e9]">
                        {t("Footer")}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
