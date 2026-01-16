"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Users, TrendingUp, Zap } from "lucide-react";

export const AboutSection = () => {
    const t = useTranslations("HomePage.about");

    const cards = [
        { key: "Technology", icon: Cpu, colSpan: "col-span-1 md:col-span-2", bg: "bg-emerald-50" },
        { key: "Team", icon: Users, colSpan: "col-span-1", bg: "bg-gray-50" },
        { key: "Growth", icon: TrendingUp, colSpan: "col-span-1", bg: "bg-gray-50" },
        { key: "Speed", icon: Zap, colSpan: "col-span-1 md:col-span-2", bg: "bg-gray-900 text-white", dark: true },
    ];

    return (
        <section className="h-full w-full flex items-center justify-center bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px] opacity-60 pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="container-padding w-full h-full flex items-center py-12 md:py-8">
                <div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-center">

                    {/* Left: Text Content - Spans 5 columns */}
                    <div className="lg:col-span-5 flex flex-col justify-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 w-fit mb-8"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2d8b66]" />
                            <span className="text-xs font-bold tracking-widest uppercase text-[#2d8b66]">
                                {t("Badge")}
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tight text-gray-900"
                        >
                            {t("Title").split(" ").map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-3"
                        >
                            {[1, 2, 3, 4].map((item, index) => (
                                <div
                                    key={item}
                                    className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 text-sm font-medium text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-100 transition-colors cursor-default"
                                >
                                    {t(`Points.${item}`)}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Bento Grid - Spans 7 columns */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                        {cards.map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={card.key}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className={`${card.colSpan} ${card.bg} p-8 rounded-3xl flex flex-col justify-between min-h-[180px] group hover:shadow-xl transition-all duration-500 border border-transparent hover:border-emerald-100/20 relative overflow-hidden`}
                                >
                                    {/* Hover Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${card.dark ? 'bg-white/10 text-white' : 'bg-white text-[#2d8b66] shadow-sm'}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className={`text-2xl font-bold mb-2 ${card.dark ? 'text-white' : 'text-gray-900'}`}>{t(`cards.${card.key}.Title`)}</h3>
                                        <p className={`text-sm ${card.dark ? 'text-gray-300' : 'text-gray-500'} leading-relaxed`}>{t(`cards.${card.key}.Description`)}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};
