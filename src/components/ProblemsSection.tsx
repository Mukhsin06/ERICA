"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Palette, Clock, Smartphone, SearchX, Settings, ShieldAlert } from "lucide-react";

export const ProblemsSection = () => {
    const t = useTranslations("HomePage.problems");

    const problems = [
        { key: "1", icon: Palette },
        { key: "2", icon: Clock },
        { key: "3", icon: Smartphone },
        { key: "4", icon: SearchX },
        { key: "5", icon: Settings },
        { key: "6", icon: ShieldAlert },
    ];

    return (
        <section className="h-full w-full flex items-center justify-center bg-white">
            <div className="container-padding max-w-[1400px] w-full">

                {/* Header */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-[#2e7d32] font-bold tracking-wide uppercase mb-4"
                    >
                        — {t("Badge")}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"
                    >
                        {t("Title")}{" "}
                        <span className="text-red-500">{t("TitleHighlight")}</span>
                    </motion.h2>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon;
                        return (
                            <motion.div
                                key={problem.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-6 hover:shadow-xl hover:border-red-100 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors shrink-0">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                        {t(`cards.${problem.key}.Title`)}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        {t(`cards.${problem.key}.Desc`)}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
};
