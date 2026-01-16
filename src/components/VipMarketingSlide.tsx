"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Megaphone, Server, Rocket, CheckCircle, ArrowRight, BarChart2 } from "lucide-react";

export const VipMarketingSlide = () => {
    const t = useTranslations("HomePage.vip_marketing");

    const cards = [

        { key: "server", icon: Server, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
        { key: "analytics", icon: BarChart2, color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-100" },
    ];

    return (
        <section className="min-h-full w-full flex items-center justify-center bg-white overflow-hidden py-6 md:py-0">
            <div className="container-padding w-full max-w-[1200px]">

                {/* Header */}
                <div className="text-center mb-6">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-1.5"
                    >
                        VIP: {t("Title")}
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-sm md:text-base"
                    >
                        {t("Subtitle")}
                    </motion.p>
                </div>

                {/* Marketing Cards */}
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                    {cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (idx * 0.1) }}
                                className={`w-full max-w-[380px] bg-white rounded-[24px] border ${card.border} p-6 hover:shadow-xl transition-all group`}
                            >
                                <div className={`w-10 h-10 ${card.bg} rounded-xl flex items-center justify-center ${card.color} mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-base font-bold text-gray-900 mb-3">{t(`Cards.${card.key}.Title`)}</h3>
                                <ul className="space-y-2">
                                    {[0, 1, 2, 3].map((i) => {
                                        return (
                                            <li key={i} className="flex items-start gap-2">
                                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${card.bg.replace('bg-', 'bg-slate-300 ')}`} />
                                                <span className="text-xs font-semibold text-gray-600 bg-gray-50 px-2 py-1 rounded-md w-full">
                                                    {t(`Cards.${card.key}.Items.${i}`)}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </motion.div>
                        )
                    })}
                </div>



            </div>
        </section>
    );
};
