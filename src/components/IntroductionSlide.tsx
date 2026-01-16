"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export const IntroductionSlide = () => {
    const t = useTranslations("HomePage.introduction");

    return (
        <section className="h-full w-full flex items-center justify-center bg-white overflow-hidden">
            <div className="container-padding w-full h-full flex items-center">
                <div className="max-w-[1400px] w-full mx-auto grid lg:grid-cols-2 gap-12 items-center h-full">

                    {/* Left: Text Content */}
                    <div className="flex flex-col justify-center h-full py-20">
                        <div className="flex-1 flex flex-col justify-center">
                            {/* Line Accent */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                className="h-0.5 w-12 bg-[#2e7d32] mb-6 origin-left"
                            />

                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-[#2e7d32] font-semibold tracking-widest uppercase mb-8 text-sm"
                            >
                                {t("Badge")}
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight"
                            >
                                {t("Title")}
                            </motion.h2>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-xl mb-12"
                            >
                                {t("Description")}
                            </motion.p>

                            {/* Bottom Line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                className="h-1 w-24 bg-gray-200 mb-12 origin-left"
                            />
                        </div>

                        {/* Slide Footer Points */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-8 mt-auto"
                        >
                            <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                                <div className="w-2 h-2 rounded-full bg-[#2e7d32]" />
                                {t("Footer.Professional")}
                            </div>
                            <div className="flex items-center gap-3 text-sm font-medium text-gray-500">
                                <div className="w-2 h-2 rounded-full bg-[#2e7d32]" />
                                {t("Footer.Reliable")}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Graphic */}
                    <div className="h-full relative hidden lg:flex items-center justify-center max-h-[80vh] my-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative w-full h-full bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 p-8 flex items-center justify-center"
                        >
                            {/* Problem vs Solution Comparison Graphic */}
                            <div className="relative w-full h-full flex items-center justify-center gap-4">

                                {/* Problem Card (Left) */}
                                <motion.div
                                    initial={{ x: -30, opacity: 0, rotate: -6 }}
                                    whileInView={{ x: 0, opacity: 1, rotate: -6 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="absolute left-[10%] w-[280px] aspect-[1/1.3] bg-gray-50 rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col items-center opacity-80 scale-90"
                                >
                                    <div className="w-12 h-12 bg-red-100 rounded-full mb-4 flex items-center justify-center">
                                        <div className="w-6 h-6 border-b-2 border-r-2 border-red-400 rotate-45 mb-1" />
                                    </div>
                                    <div className="w-20 h-2 bg-gray-200 rounded-full mb-6" />
                                    {/* Chaos Visual */}
                                    <div className="flex flex-wrap gap-2 justify-center opacity-50">
                                        <div className="w-8 h-8 bg-gray-200 rounded-md rotate-12" />
                                        <div className="w-8 h-8 bg-gray-300 rounded-full -rotate-6" />
                                        <div className="w-12 h-8 bg-gray-200 rounded-md rotate-3" />
                                        <div className="w-8 h-8 bg-red-50 rounded-md -rotate-12 border border-red-100" />
                                    </div>
                                    <div className="mt-auto w-full text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                                        Hozirgi Holat
                                    </div>
                                </motion.div>

                                {/* Arrow */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="z-10 bg-white rounded-full p-2 shadow-lg border border-gray-100"
                                >
                                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </motion.div>

                                {/* Solution Card (Right) */}
                                <motion.div
                                    initial={{ x: 30, opacity: 0, rotate: 6 }}
                                    whileInView={{ x: 0, opacity: 1, rotate: 6 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="absolute right-[10%] w-[280px] aspect-[1/1.3] bg-white rounded-2xl border border-green-100 shadow-[0_20px_50px_rgba(46,125,50,0.15)] p-6 flex flex-col items-center z-10"
                                >
                                    <div className="w-14 h-14 bg-green-50 rounded-2xl mb-4 flex items-center justify-center text-green-600 shadow-sm">
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    </div>
                                    <div className="w-24 h-2 bg-gray-900 rounded-full mb-6" />

                                    {/* Order Visual */}
                                    <div className="w-full grid grid-cols-2 gap-2 mb-4">
                                        <div className="h-12 bg-gray-50 rounded-lg border border-gray-100" />
                                        <div className="h-12 bg-gray-50 rounded-lg border border-gray-100" />
                                        <div className="col-span-2 h-16 bg-green-50 rounded-lg border border-green-100 flex items-center justify-center">
                                            <div className="w-8 h-8 bg-white rounded-full shadow-sm" />
                                        </div>
                                    </div>

                                    <div className="mt-auto w-full text-center text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 py-2 rounded-lg">
                                        Bizning Yechim
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};
