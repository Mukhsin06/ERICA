"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BarChart2, MessageSquare, Bot, FileText, CheckCircle2, LineChart, Type, X } from "lucide-react";

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

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 h-full">

                    {/* 1. JobX Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900 rounded-3xl p-6 relative overflow-hidden flex flex-col w-full max-w-md border border-slate-700 shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-20 text-blue-500">
                            <Bot className="w-20 h-20" />
                        </div>

                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                                <Bot className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-white">{t("JobXSummary.Title")}</h3>
                        </div>

                        {/* JobX Mockup / Visual */}
                        <div className="bg-slate-800 rounded-xl border border-slate-600 p-4 mb-4 w-full relative z-10 flex flex-col items-center justify-center gap-3 min-h-[120px]">
                            <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                JOB X
                            </div>
                            <div className="px-3 py-1 bg-blue-500/20 rounded-full border border-blue-500/30 text-blue-300 text-[10px] font-medium">
                                AI HR AUTOMATION
                            </div>
                        </div>

                        <ul className="space-y-3 relative z-10 mt-auto">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                                    </div>
                                    <span className="text-gray-300 text-sm font-medium">{t(`JobXSummary.Features.${i}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* 2. AI Chatbot Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-blue-50/80 rounded-3xl p-6 relative overflow-hidden flex flex-col w-full max-w-md border border-blue-100"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 text-blue-600">
                            <MessageSquare className="w-20 h-20" />
                        </div>

                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900">{t("AiBot.Title")}</h3>
                        </div>

                        {/* Chat Interface Mockup */}
                        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-3 mb-4 w-full relative z-10">
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
                                    <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
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
