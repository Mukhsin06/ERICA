"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Palette, MessageSquare, Bot, FileText, CheckCircle2, Layers, Type, X } from "lucide-react";

export const VipBrandingAiSlide = () => {
    const t = useTranslations("HomePage.vip_branding");

    return (
        <section className="min-h-full w-full flex items-center justify-center bg-white overflow-hidden py-6 md:py-0">
            <div className="container-padding w-full max-w-[1200px]">

                {/* Header */}
                <div className="text-center mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-xs font-bold tracking-widest text-[#2e7d32] uppercase mb-1.5"
                    >
                        {t("Badge")}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900"
                    >
                        {t("Title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 mt-2 font-medium text-sm md:text-base"
                    >
                        {t("Subtitle")}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 items-stretch h-full">

                    {/* Left: Branding Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-purple-50 rounded-3xl p-6 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-purple-600">
                            <Palette className="w-24 h-24" />
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                                <Layers className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{t("Branding.Title")}</h3>
                        </div>

                        {/* Mock Visuals for Branding */}
                        <div className="mb-6 flex gap-3">
                            <div className="h-12 w-24 bg-white rounded-lg shadow-sm flex items-center justify-center text-purple-600 font-bold border border-purple-100 text-xs">LOGO</div>
                            <div className="flex gap-1.5">
                                <div className="w-6 h-6 rounded-full bg-purple-600"></div>
                                <div className="w-6 h-6 rounded-full bg-[#2e7d32]"></div>
                                <div className="w-6 h-6 rounded-full bg-gray-900"></div>
                            </div>
                        </div>

                        <ul className="space-y-3 relative z-10">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <li key={i} className="flex items-center gap-2.5">
                                    <div className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-700" />
                                    </div>
                                    <span className="text-gray-700 font-medium text-sm">{t(`Branding.Items.${i}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right: AI Chatbot Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-blue-50 rounded-3xl p-6 relative overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-0 right-0 p-6 opacity-10 text-blue-600">
                            <Bot className="w-24 h-24" />
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                                <Bot className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{t("AiBot.Title")}</h3>
                        </div>

                        {/* Chat Interface Mockup */}
                        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-3 mb-4 max-w-sm mx-auto w-full relative z-10">
                            <div className="flex items-start gap-2 mb-2">
                                <div className="w-6 h-6 bg-gray-100 rounded-full flex-shrink-0" />
                                <div className="bg-gray-100 rounded-xl rounded-tl-none px-3 py-1.5 text-[10px] text-gray-600">
                                    {t("AiBot.Questions.0")}
                                </div>
                            </div>
                            <div className="flex items-start gap-2 justify-end mb-1">
                                <div className="bg-blue-600 text-white rounded-xl rounded-tr-none px-3 py-1.5 text-[10px]">
                                    {t("AiBot.Questions.1")}
                                </div>
                            </div>
                        </div>

                        <ul className="space-y-2 relative z-10 mt-auto">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <li key={i} className="flex items-center gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    <span className="text-gray-700 text-sm font-medium">{t(`AiBot.Features.${i}`)}</span>
                                </li>
                            ))}
                        </ul>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};
