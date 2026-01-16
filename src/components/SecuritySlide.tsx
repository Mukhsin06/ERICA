"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Search, Globe, MapPin, Zap, Settings, TrendingUp, Shield, Lock, Database, FileText } from "lucide-react";

export const SecuritySlide = () => {
    const t = useTranslations("HomePage.security");

    const chartData = [
        { height: "20%", label: "20%", month: "Jan" },
        { height: "35%", label: "35%", month: "Feb" },
        { height: "45%", label: "45%", month: "Mar" },
        { height: "55%", label: "58%", month: "Apr" },
        { height: "70%", label: "70%", month: "May" },
        { height: "85%", label: "85%", month: "Jun" },
        { height: "100%", label: "100%", month: "Jul" },
    ];

    const cards = [
        { icon: Globe, key: "1" },
        { icon: MapPin, key: "2" },
        { icon: Zap, key: "3" },
        { icon: Settings, key: "4" },
    ];

    return (
        <section className="min-h-full w-full flex flex-col items-center justify-center bg-white pt-10 pb-24">
            <div className="container-padding w-full max-w-[1000px]">

                {/* Header */}
                <div className="text-center mb-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-2"
                    >
                        {t("Title")}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-md mx-auto bg-white border border-gray-200 rounded-full px-4 py-2 flex items-center shadow-sm"
                    >
                        <Shield className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-gray-500 text-xs md:text-sm">{t("SearchBarPlaceholder")}</span>
                        <div className="ml-auto w-16 h-4 bg-green-50 rounded text-green-600 flex items-center justify-center text-[10px] font-bold">
                            SECURE
                        </div>
                    </motion.div>
                </div>

                {/* Chart Section - Refined for Security (Logs) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white border border-gray-100 rounded-[28px] p-5 mb-4 shadow-sm relative overflow-hidden"
                >
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />

                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-lg">
                                <Shield className="w-5 h-5 text-[#2e7d32]" />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900">{t("ChartTitle")}</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-white bg-green-500 px-3 py-1.5 rounded-full shadow-sm">
                            <Lock className="w-3 h-3" />
                            <span>100% Protected</span>
                        </div>
                    </div>

                    <div className="flex items-end justify-between h-40 gap-3 sm:gap-6 px-4 relative z-10 w-full">
                        {chartData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-end h-full gap-2 flex-1 group w-full">
                                {/* Bar Value (Logs Count) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + (index * 0.1) }}
                                    className="text-[10px] font-bold text-gray-400 mb-1"
                                >
                                    {item.label}
                                </motion.div>

                                {/* Bar - Representing stored logs/backups */}
                                <motion.div
                                    initial={{ height: "4px" }}
                                    whileInView={{ height: item.height }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "circOut" }}
                                    className="w-full max-w-[50px] bg-gradient-to-t from-gray-100 to-gray-300 rounded-t-md relative hover:from-green-100 hover:to-green-300 transition-colors border-t border-x border-gray-200"
                                >
                                    {/* Top line to look like a stack */}
                                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-green-500/50 rounded-t-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>

                                {/* Month Label */}
                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mt-1">{t(`Months.${item.month}`)}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {/* Explicitly mapped icons for security context */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white border border-gray-100 rounded-2xl p-3 flex items-center gap-3 hover:shadow-md transition-shadow"
                    >
                        <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                            <FileText className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{t("Cards.1")}</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white border border-gray-100 rounded-2xl p-3 flex items-center gap-3 hover:shadow-md transition-shadow"
                    >
                        <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                            <Database className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{t("Cards.2")}</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-white border border-gray-100 rounded-2xl p-3 flex items-center gap-3 hover:shadow-md transition-shadow"
                    >
                        <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                            <Shield className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{t("Cards.3")}</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-white border border-gray-100 rounded-2xl p-3 flex items-center gap-3 hover:shadow-md transition-shadow"
                    >
                        <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                            <Lock className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{t("Cards.4")}</span>
                    </motion.div>
                </div>

                {/* Footer Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="bg-[#e8f5e9] text-[#2e7d32] px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        {t("FooterBadge")}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
