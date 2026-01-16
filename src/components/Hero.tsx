"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

export const Hero = () => {
    const t = useTranslations("HomePage.hero");

    return (
        <section className="h-full w-full flex flex-col justify-center relative overflow-hidden bg-white">
            {/* Background Graphic - Right Side Diagonal */}
            <div className="absolute top-0 right-0 h-full w-[40%] bg-gradient-to-bl from-gray-100 to-transparent transform skew-x-[-10deg] origin-top-right z-0 pointer-events-none" />

            {/* Main Content */}
            <div className="container-padding max-w-[1400px] w-full z-10 flex flex-col justify-center h-full">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-2 bg-[#e8f5e9] text-[#2e7d32] px-4 py-2 rounded-full w-fit mb-8"
                >
                    <Building2 className="w-5 h-5" />
                    <span className="font-bold tracking-wide text-sm uppercase">{t("Badge")}</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 max-w-4xl"
                >
                    {t("Title")}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-500 font-normal mb-8"
                >
                    {t("Subtitle")}
                </motion.p>

                {/* Green Line Accent */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="h-1.5 w-24 bg-[#2e7d32] rounded-full origin-left"
                />
            </div>
        </section>
    );
};
