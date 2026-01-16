"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const SolutionSlide = () => {
    const t = useTranslations("HomePage.solution");

    return (
        <section className="min-h-full w-full flex items-center justify-center bg-white py-6 md:py-0">
            <div className="container-padding w-full max-w-[1200px]">

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                    {/* Left: Text Content */}
                    <div className="max-w-lg">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[#2e7d32] text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-2"
                        >
                            <span className="w-8 h-px bg-[#2e7d32]/50"></span>
                            {t("Tag")}
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                        >
                            ERICA taklif qiladigan <span className="text-[#2e7d32]">yechim</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-500 text-lg mb-8 leading-relaxed"
                        >
                            {t("Description")}
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-2 text-[#2e7d32] font-bold text-sm hover:gap-3 transition-all group"
                        >
                            {t("Link")}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>

                    {/* Right: Checklist Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#e8f5e9]/30 border border-[#e8f5e9] rounded-3xl p-8 relative"
                    >
                        {/* Decorative Blur */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#2e7d32]/10 rounded-full blur-3xl -z-10" />

                        <ul className="space-y-6 mb-8">
                            {[0, 1, 2, 3, 4].map((i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#2e7d32] flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-800 font-medium text-base">
                                        {t(`List.${i}`)}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="pt-6 border-t border-[#2e7d32]/10 flex items-center justify-between">
                            <span className="text-[#2e7d32] font-semibold text-xs tracking-wide uppercase opacity-70">
                                {t("Footer")}
                            </span>
                            <div className="flex gap-1">
                                {[0, 1, 2, 3, 4].map((d) => (
                                    <div key={d} className="w-1 h-1 rounded-full bg-[#2e7d32]" style={{ opacity: 0.3 + (d * 0.15) }} />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
