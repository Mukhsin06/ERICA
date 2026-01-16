"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { BarChart2, Users, Settings, Layout, Check, X, Shield } from "lucide-react";

export const StartPackageAdminSlide = () => {
    const t = useTranslations("HomePage.start_package_admin");

    return (
        <section className="min-h-full w-full flex items-center justify-center bg-white pt-6 pb-20">
            <div className="container-padding w-full max-w-[1000px]">

                {/* Header */}
                <div className="text-center mb-5">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-1"
                    >
                        {t("Title")}
                    </motion.h2>
                    <p className="text-gray-500 text-sm">{t("Subtitle")}</p>
                </div>

                {/* Top Metrics Row */}
                <div className="grid grid-cols-2 gap-4 mb-5">
                    {[
                        { icon: BarChart2, key: "Ads", color: "text-[#2e7d32]", bg: "bg-[#e8f5e9]", trend: "+12%" },
                        { icon: Users, key: "Users", color: "text-[#2e7d32]", bg: "bg-[#e8f5e9]", trend: "+0%" }
                    ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm flex items-center justify-between group hover:shadow-md transition-all"
                            >
                                <div>
                                    <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.color} flex items-center justify-center mb-1.5 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="text-gray-500 text-[10px] font-medium mb-0.5">{t(`Metrics.${item.key}.Label`)}</div>
                                    <div className="text-xl font-black text-gray-900 tracking-tight">{t(`Metrics.${item.key}.Value`)}</div>
                                </div>
                                <div className="bg-[#e8f5e9] text-[#2e7d32] px-1.5 py-0.5 rounded-md text-[10px] font-bold">
                                    {t(`Metrics.${item.key}.Growth`)}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 mb-5 relative overflow-hidden group"
                >
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2 text-[#2e7d32] font-bold text-xs">
                            <Shield className="w-3.5 h-3.5" />
                            {t("Panel.Title")}
                        </div>
                        <div className="flex gap-3">
                            <div className="flex items-center gap-1.5 bg-green-50 px-2 py-0.5 rounded-md">
                                <Layout className="w-2.5 h-2.5 text-green-600" />
                                <span className="text-[10px] font-medium text-green-700">{t("Panel.Features.0.Title")}</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-0.5 rounded-md">
                                <Settings className="w-2.5 h-2.5 text-gray-500" />
                                <span className="text-[10px] font-medium text-gray-600">{t("Panel.Features.1.Title")}</span>
                            </div>
                        </div>
                    </div>

                    {/* Fake Bar Chart */}
                    <div className="relative pt-1">
                        <div className="text-[10px] text-gray-400 mb-1 absolute top-0 left-0">{t("Panel.ChartTitle")}</div>
                        <div className="flex items-end justify-between h-16 gap-1.5 border-b border-gray-100 pb-1">
                            {[30, 45, 25, 60, 40, 75, 50, 65, 45, 80, 55, 90].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 0.8, delay: 0.4 + (i * 0.05) }}
                                    className="w-full bg-gradient-to-t from-[#00e676] to-[#00c853] rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>


                {/* Checklist Footer */}
                <div className="bg-[#fcfdfc] border border-gray-100 rounded-xl p-4 mb-5">
                    <h3 className="font-bold text-gray-900 mb-2 text-xs">{t("Why.Title")}</h3>
                    <div className="flex flex-wrap gap-2 md:justify-between items-center">
                        {[0, 1, 2].map((i) => (
                            <div key={i} className="flex items-center gap-1.5 text-xs text-gray-700 font-medium">
                                <Check className="w-3 h-3 text-white bg-[#2e7d32] rounded-full p-0.5" />
                                {t(`Why.Pros.${i}`)}
                            </div>
                        ))}
                        <div className="flex items-center gap-1.5 text-xs text-red-500 opacity-80 font-medium bg-red-50 px-2 py-0.5 rounded-md">
                            <X className="w-3 h-3" /> {t("Why.Cons.0")}
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#00c853] text-white py-3 rounded-lg text-center font-bold text-sm shadow-md shadow-green-200 cursor-pointer flex items-center justify-center gap-2"
                >
                    <Check className="w-4 h-4" />
                    {t("FooterButton")}
                </motion.div>


            </div>
        </section>
    );
};
