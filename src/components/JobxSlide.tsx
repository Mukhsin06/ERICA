"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Bot, Code, Cpu, Link, Settings, Key, Mic, FileText, User, ArrowRight, Zap } from "lucide-react";

export const JobxSlide = () => {
    const t = useTranslations("HomePage.jobx");

    const features = [
        { icon: FileText, key: 0, color: "text-blue-500", bg: "bg-blue-50" },
        { icon: Code, key: 1, color: "text-purple-500", bg: "bg-purple-50" },
        { icon: Cpu, key: 2, color: "text-indigo-500", bg: "bg-indigo-50" },
        { icon: Link, key: 3, color: "text-green-500", bg: "bg-green-50" },
        { icon: Settings, key: 4, color: "text-orange-500", bg: "bg-orange-50" },
        { icon: Key, key: 5, color: "text-red-500", bg: "bg-red-50" },
        { icon: Zap, key: 6, color: "text-yellow-500", bg: "bg-yellow-50" }, // Using Zap as simplified icon for Voice/AI
        { icon: FileText, key: 7, color: "text-teal-500", bg: "bg-teal-50" },
        { icon: User, key: 8, color: "text-cyan-500", bg: "bg-cyan-50" },
    ];

    return (
        <section className="h-[90vh] max-h-[90vh] min-h-[600px] w-full flex items-center justify-center bg-slate-900 py-2 overflow-hidden relative">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
            </div>

            <div className="container-padding w-full max-w-[1200px] h-full flex flex-col justify-center relative z-10">

                <div className="flex flex-col lg:flex-row gap-8 items-center h-full">

                    {/* Left: Content & Features */}
                    <div className="flex-1 w-full lg:w-[60%] flex flex-col justify-center h-full py-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="mb-3"
                        >
                            <span className="inline-block px-2 py-0.5 bg-blue-600 text-white text-[9px] uppercase font-bold tracking-widest rounded-full mb-2 shadow-lg shadow-blue-500/30">
                                {t("Badge")}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-black text-white mb-1 leading-tight">
                                {t("Title")}
                            </h2>
                            <p className="text-white text-xs md:text-sm font-medium mb-1">
                                {t("Subtitle")}
                            </p>
                            <p className="text-gray-200 text-[10px] md:text-xs max-w-xl leading-snug">
                                {t("Description")}
                            </p>
                        </motion.div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                            {features.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 * idx }}
                                        className="bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-lg p-2.5 flex flex-col gap-1.5 transition-all group hover:bg-slate-800"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className={`p-1 rounded-md ${item.bg} ${item.color} bg-opacity-10`}>
                                                <Icon className="w-3 h-3" />
                                            </div>
                                            <h3 className="text-white font-bold text-[11px] line-clamp-1">
                                                {t(`Features.List.${item.key}.Title`)}
                                            </h3>
                                        </div>
                                        <p className="text-gray-300 text-[9px] leading-relaxed line-clamp-2">
                                            {t(`Features.List.${item.key}.Desc`)}
                                        </p>
                                        <div className="mt-auto pt-0.5 flex items-center text-[8px] font-bold text-blue-400 group-hover:text-blue-300 transition-colors uppercase tracking-wide gap-1 cursor-pointer">
                                            {t(`Features.List.${item.key}.Button`)}
                                            <ArrowRight className="w-2 h-2 group-hover:translate-x-0.5 transition-transform" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Visuals */}
                    <div className="hidden lg:flex flex-1 w-full lg:w-[40%] flex-col gap-4 justify-center relative perspective-[1000px]">

                        <motion.div
                            initial={{ opacity: 0, x: 20, rotateY: -10 }}
                            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-slate-800 rounded-xl p-1 shadow-2xl border border-slate-700 overflow-hidden relative z-10"
                        >
                            <img
                                src="/jobx_dashboard.png"
                                alt="JobX Dashboard"
                                className="w-full h-auto rounded-lg shadow-inner"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, y: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="bg-white rounded-xl p-1 shadow-2xl border border-gray-200 overflow-hidden w-[85%] self-end absolute -bottom-10 -right-4 z-20"
                        >
                            <img
                                src="/jobx_landing.png"
                                alt="JobX Landing"
                                className="w-full h-auto rounded-lg"
                            />
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};
