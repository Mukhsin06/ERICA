"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Globe, CreditCard, TrendingUp, BarChart2, Star, CheckCircle, Smartphone } from "lucide-react";

export const PremiumPackageSlide = () => {
    const t = useTranslations("HomePage.premium_package");

    return (
        <section className="h-[90vh] max-h-[90vh] min-h-[600px] w-full flex items-center justify-center bg-white py-2 overflow-hidden">
            <div className="container-padding w-full max-w-[1000px]">

                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 h-full justify-center">

                    {/* Left Column: Content */}
                    <div className="flex-1 w-full relative z-10 flex flex-col justify-center">
                        {/* Header */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="mb-3 lg:mb-4"
                        >
                            <div className="inline-flex items-center gap-1.5 bg-[#2962ff] text-white px-2 py-0.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-2 shadow-md shadow-blue-200">
                                <Star className="w-2.5 h-2.5 fill-current" /> {t("Badge")}
                            </div>

                            <div className="flex items-center gap-2 mb-1">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1a202c] tracking-tight">
                                    {t("Title")}
                                </h2>
                                <span className="bg-[#2962ff] text-white px-2 py-0.5 rounded-md font-bold text-xs md:text-sm shadow-sm">
                                    {t("Price")}
                                </span>
                            </div>

                            <h3 className="text-sm md:text-base font-bold text-gray-500 mb-2">
                                {t("Subtitle")}
                            </h3>
                            <p className="text-[10px] md:text-xs text-gray-400 max-w-sm leading-snug">
                                {t("Description")}
                            </p>
                        </motion.div>

                        {/* Features List & Advantages Container */}
                        <div className="space-y-3">

                            {/* Features */}
                            <div className="bg-blue-50/50 rounded-xl p-3 border border-blue-100/50">
                                <h4 className="text-[#2962ff] font-bold text-[10px] uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                    <Star className="w-3 h-3" /> Imkoniyatlar
                                </h4>
                                <div className="space-y-1.5">
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                            className="flex items-start gap-2 text-[10px] md:text-xs text-gray-700 font-medium"
                                        >
                                            <CheckCircle className="w-3 h-3 text-[#2962ff] mt-0.5 shrink-0" />
                                            <span>{t(`Features.${i}`)}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Advantages (Highlights) */}
                            <div>
                                <h4 className="font-bold text-gray-900 mb-2 text-xs">{t("Advantages.Title")}</h4>
                                <div className="space-y-1.5">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + (i * 0.1) }}
                                            className="flex items-center gap-2 group"
                                        >
                                            <div className="w-6 h-6 rounded-full bg-blue-50 text-[#2962ff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                                <TrendingUp className="w-3 h-3" />
                                            </div>
                                            <span className="text-[10px] md:text-xs font-semibold text-gray-600 group-hover:text-[#2962ff] transition-colors">{t(`Advantages.List.${i}`)}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Footer Button/Note */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-4 bg-[#2962ff] text-white w-full py-2.5 rounded-lg font-bold text-center text-xs shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                            <TrendingUp className="w-3.5 h-3.5" />
                            {t("FooterNote")}
                        </motion.div>
                    </div>

                    {/* Right Column: Clean Mockup */}
                    <div className="w-full lg:w-[45%] flex justify-center items-center relative perspective-[2000px]">

                        {/* 3D Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl z-0"
                        />

                        <motion.div
                            initial={{ rotateY: -10, rotateX: 5, scale: 0.95 }}
                            whileInView={{ rotateY: 0, rotateX: 0, scale: 1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="relative z-10 w-full max-w-[480px]"
                        >
                            {/* Monitor Frame */}
                            <div className="relative bg-[#0f0f0f] rounded-[20px] p-[8px] shadow-2xl border border-gray-800">
                                {/* Screen Area */}
                                <div className="bg-white rounded-[12px] overflow-hidden aspect-[16/11] relative flex flex-col">

                                    {/* Browser Bar */}
                                    <div className="h-7 bg-[#f8f9fa] border-b border-gray-100 flex items-center px-3 gap-2">
                                        <div className="flex gap-1.5 opacity-80">
                                            <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                                            <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
                                            <div className="w-2 h-2 rounded-full bg-[#28c840]" />
                                        </div>
                                        <div className="flex-1 flex justify-center">
                                            <div className="bg-white border border-gray-200 rounded-md px-2.5 py-0.5 flex items-center gap-1.5 shadow-sm">
                                                <Globe className="w-2.5 h-2.5 text-gray-400" />
                                                <span className="text-[9px] text-gray-500 font-medium tracking-wide">erica.uz</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mockup Content - Matching User Image */}
                                    <div className="flex-1 bg-[#fcfcfc] p-6 relative overflow-hidden flex flex-col">

                                        {/* Nav Bar */}
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="w-7 h-7 bg-[#2962ff] rounded-md text-white flex items-center justify-center font-bold text-[10px] shadow-sm">E</div>
                                            <div className="flex gap-2">
                                                <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
                                                <div className="w-12 h-1.5 bg-gray-200 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Main Hero Card */}
                                        <div className="bg-white rounded-[1.5rem] p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex-1 relative overflow-hidden">

                                            {/* Abstract Text Content */}
                                            <div className="relative z-10 space-y-4 mt-2">
                                                {/* Badge pill */}
                                                <div className="w-16 h-2 bg-blue-100 rounded-full mb-2" />

                                                {/* Dark Lines */}
                                                <div className="w-[85%] h-3.5 bg-[#1e293b] rounded-full" />
                                                <div className="w-[60%] h-3.5 bg-[#1e293b] rounded-full" />

                                                {/* Big Blue Button */}
                                                <div className="mt-6 w-32 h-10 bg-[#2962ff] rounded-xl shadow-lg shadow-blue-500/20" />
                                            </div>

                                            {/* Decorative Circle Accent */}
                                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-50 rounded-full" />
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* Stand base */}
                            <div className="w-[120px] h-[35px] bg-gradient-to-b from-gray-200 to-gray-300 mx-auto mt-[-8px] rounded-b-xl relative -z-10 shadow-lg" />

                        </motion.div>
                    </div>

                </div>

            </div>
        </section>
    );
};
