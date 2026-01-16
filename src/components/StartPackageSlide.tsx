"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check, Smartphone, Monitor, Zap, Layout, Play, ChevronRight } from "lucide-react";

export const StartPackageSlide = () => {
    const t = useTranslations("HomePage.start_package");

    // Mapping for feature icons (adjust as needed based on json keys or fixed indices)
    const highlights = [
        { icon: Layout, color: "text-blue-500", bg: "bg-blue-50" },
        { icon: Monitor, color: "text-purple-500", bg: "bg-purple-50" },
        { icon: Smartphone, color: "text-amber-500", bg: "bg-amber-50" },
        { icon: Zap, color: "text-emerald-500", bg: "bg-emerald-50" },
    ];

    return (
        <section className="min-h-full w-full flex items-center justify-center bg-white relative overflow-hidden pt-4 pb-20">
            {/* Background Decorations */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[100px] opacity-40 pointer-events-none" />
            <div className="absolute top-1/2 left-10 w-32 h-32 bg-blue-50 rounded-full blur-[80px] opacity-60 pointer-events-none" />

            <div className="container-padding w-full h-full flex items-center justify-center">
                <div className="max-w-[1280px] w-full mx-auto grid lg:grid-cols-2 gap-8 items-center">

                    {/* Left: Content */}
                    <div className="flex flex-col justify-center text-left relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 mb-3"
                        >
                            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                                {t("Badge")}
                            </span>
                            <span className="h-px w-6 bg-emerald-200"></span>
                            <span className="text-emerald-600 font-bold text-base">{t("Price")}</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl lg:text-5xl font-bold mb-3 text-gray-900 leading-tight tracking-tight"
                        >
                            {t("Title")}
                            <span className="block text-lg lg:text-xl font-normal text-gray-500 mt-1">
                                {t("Subtitle")}
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-sm lg:text-base text-gray-600 mb-6 leading-relaxed max-w-xl"
                        >
                            {t("Description")}
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-6">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2 text-sm flex items-center gap-2">
                                    <Layout className="w-4 h-4 text-gray-400" />
                                    {t("Features.Title")}
                                </h4>
                                <ul className="space-y-1.5">
                                    {[0, 1, 2, 3].map((i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + (i * 0.1) }}
                                            className="flex items-center gap-2 text-gray-600 text-sm"
                                        >
                                            <div className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-2.5 h-2.5 text-emerald-600" />
                                            </div>
                                            {t(`Features.List.${i}`)}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-2">
                                {[0, 1, 2, 3].map((i) => {
                                    const Icon = highlights[i].icon;
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + (i * 0.1) }}
                                            className="flex items-center gap-2.5 p-2 rounded-lg bg-gray-50/80 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-sm transition-all"
                                        >
                                            <div className={`w-7 h-7 rounded-lg ${highlights[i].bg} ${highlights[i].color} flex items-center justify-center`}>
                                                <Icon className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="text-xs font-semibold text-gray-700">{t(`Highlights.${i}`)}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="p-4 rounded-xl bg-[#2e7d32] text-white relative overflow-hidden group"
                        >
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors" />

                            <h4 className="font-bold text-sm mb-2 relative z-10">{t("Advantages.Title")}</h4>
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {[0, 1, 2].map((i) => (
                                    <span key={i} className="px-2.5 py-1 rounded-md bg-white/10 text-emerald-50 text-xs font-medium border border-white/5">
                                        {t(`Advantages.List.${i}`)}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Visual / Mockup */}
                    <div className="relative h-full flex items-center justify-center">
                        <div className="relative z-10 w-full max-w-[320px] lg:max-w-[360px] aspect-[4/5] bg-gray-100 rounded-[2.5rem] border-[6px] border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden scale-90 lg:scale-100 origin-center">
                            {/* Abstract UI Representation */}
                            <div className="absolute inset-0 bg-white flex flex-col">
                                <div className="h-12 border-b border-gray-50 flex items-center justify-between px-5">
                                    <div className="w-6 h-6 bg-gray-100 rounded-full" />
                                    <div className="w-20 h-1.5 bg-gray-100 rounded-full" />
                                    <div className="w-5 h-5 bg-gray-100 rounded-lg" />
                                </div>
                                <div className="flex-1 p-5 space-y-5 bg-gray-50/30">
                                    <div className="w-full aspect-video bg-gray-100 rounded-xl animate-pulse" />
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="aspect-square bg-emerald-50 rounded-xl" />
                                        <div className="aspect-square bg-blue-50 rounded-xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="w-full h-2.5 bg-gray-100 rounded-full" />
                                        <div className="w-2/3 h-2.5 bg-gray-100 rounded-full" />
                                    </div>
                                    <div className="mt-auto pt-4">
                                        <div className="w-full h-10 bg-[#2e7d32] rounded-lg shadow-lg shadow-emerald-200" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 -right-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3 z-20"
                            >
                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <Zap className="w-5 h-5 fill-current" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-bold uppercase">Speed</div>
                                    <div className="text-sm font-bold text-gray-900">0.4s Load</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-1/4 -left-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3 z-20"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Layout className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-bold uppercase">Design</div>
                                    <div className="text-sm font-bold text-gray-900">Modern UI</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
