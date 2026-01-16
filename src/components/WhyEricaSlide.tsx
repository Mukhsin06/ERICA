"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Shield, Briefcase, Clock, Users, Zap, CheckCircle, Handshake } from "lucide-react";

export const WhyEricaSlide = () => {
    const t = useTranslations("HomePage.why_erica");

    const features = [
        { icon: Briefcase, color: "text-blue-600", bg: "bg-blue-50" },
        { icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
        { icon: Shield, color: "text-green-600", bg: "bg-green-50" },
        { icon: Clock, color: "text-orange-600", bg: "bg-orange-50" },
        { icon: Handshake, color: "text-pink-600", bg: "bg-pink-50" },
    ];

    return (
        <section className="h-[90vh] max-h-[90vh] min-h-[600px] w-full flex flex-col items-center justify-center bg-white overflow-hidden py-4">
            <div className="container-padding w-full max-w-[1000px] flex flex-col justify-center h-full">

                {/* Header */}
                <div className="text-center mb-4 md:mb-6 shrink-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="w-12 h-12 mx-auto bg-green-50 rounded-full flex items-center justify-center text-[#2e7d32] mb-2 shadow-sm"
                    >
                        <Shield className="w-6 h-6" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-4xl font-bold text-gray-900 mb-1"
                    >
                        {t("Title")}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-400 font-medium text-xs md:text-sm"
                    >
                        {t("Subtitle")}
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="flex flex-col gap-3 mb-6 shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
                        {features.slice(0, 3).map((feature, idx) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-3 group h-full justify-center min-h-[100px]"
                                >
                                    <div className={`w-8 h-8 rounded-lg ${feature.bg} flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <h3 className="font-bold text-gray-800 leading-tight text-sm">
                                        {t(`Cards.${idx}.Title`)}
                                    </h3>
                                    <div className="absolute top-3 right-3 text-gray-200 font-bold text-[10px]">{idx + 1}</div>
                                </motion.div>
                            )
                        })}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full md:w-3/4 mx-auto">
                        {features.slice(3, 5).map((feature, idx) => {
                            const realIdx = idx + 3;
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={realIdx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: realIdx * 0.1 }}
                                    className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-start gap-3 group h-full justify-center min-h-[100px]"
                                >
                                    <div className={`w-8 h-8 rounded-lg ${feature.bg} flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <h3 className="font-bold text-gray-800 leading-tight text-sm">
                                        {t(`Cards.${realIdx}.Title`)}
                                    </h3>
                                    <div className="absolute top-3 right-3 text-gray-200 font-bold text-[10px]">{realIdx + 1}</div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* Metrics Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-emerald-50/50 rounded-xl p-3 md:p-4 flex flex-wrap md:flex-nowrap justify-between items-center gap-2 text-center md:text-left shrink-0"
                >
                    <div className="flex items-center gap-2 justify-center w-full md:w-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-gray-700 font-bold text-xs">{t("Metrics.Projects")}</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-emerald-100" />
                    <div className="flex items-center gap-2 justify-center w-full md:w-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-gray-700 font-bold text-xs">{t("Metrics.Experience")}</span>
                    </div>
                    <div className="hidden md:block w-px h-4 bg-emerald-100" />
                    <div className="flex items-center gap-2 justify-center w-full md:w-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-gray-700 font-bold text-xs">{t("Metrics.Clients")}</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
