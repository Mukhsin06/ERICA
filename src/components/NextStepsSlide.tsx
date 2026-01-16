"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Mail, Phone } from "lucide-react";

export const NextStepsSlide = () => {
    const t = useTranslations("HomePage.next_steps");

    const steps = [1, 2, 3, 4];

    return (
        <section className="h-[90vh] max-h-[90vh] min-h-[600px] w-full flex flex-col items-center justify-center bg-white relative overflow-hidden">
            <div className="container-padding max-w-5xl w-full z-10 flex flex-col items-center text-center">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-[#1a202c] mb-8 md:mb-10"
                >
                    {t("Title")}
                </motion.h2>

                {/* Steps Flow (Vertical on Mobile, Horizontal on Desktop) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10 relative">
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + (index * 0.1) }}
                            className="flex flex-col items-center relative z-10 group"
                        >
                            <div className="w-12 h-12 bg-white border-2 border-[#2e7d32] text-[#2e7d32] rounded-full flex items-center justify-center text-lg font-bold mb-3 shadow-sm group-hover:bg-[#2e7d32] group-hover:text-white transition-colors duration-300">
                                {step}
                            </div>
                            <h3 className="text-base font-bold text-gray-900 leading-tight">{t(`Steps.${step}.Title`)}</h3>
                        </motion.div>
                    ))}
                </div>

                {/* Final Contact Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="bg-[#2e7d32] text-white rounded-[24px] p-6 md:p-8 w-full max-w-2xl shadow-xl relative overflow-hidden flex flex-col items-center text-center"
                >
                    {/* Abstract Circle Decoration */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center gap-4 w-full">

                        {/* Box Icon (E) */}
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm mb-1 shadow-inner border border-white/10">
                            <span className="text-2xl font-black">E</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold leading-tight max-w-lg">
                            ERICA — sizning ishonchli texnik hamkoringiz
                        </h3>

                        {/* CTA Button */}
                        <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-2.5 px-6 rounded-full transition-all backdrop-blur-md border border-white/10 tracking-widest text-[10px] md:text-xs uppercase shadow-lg hover:shadow-xl hover:-translate-y-0.5 mt-1">
                            Hamkorlikni boshlash
                        </button>

                        <div className="w-full h-px bg-white/10 my-1 max-w-xs" />

                        {/* Email */}
                        <a href={`mailto:anvardavronov@uventures.uz`} className="flex items-center gap-3 hover:opacity-90 transition-opacity group bg-white/10 px-5 py-2.5 rounded-full border border-white/5 mx-auto">
                            <div className="w-6 h-6 rounded-full bg-white text-[#2e7d32] flex items-center justify-center shadow-sm">
                                <Mail className="w-3 h-3" />
                            </div>
                            <span className="font-medium text-sm">anvardavronov@uventures.uz</span>
                        </a>

                        {/* Phones */}
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 mt-1 opacity-90">
                            <a href={`tel:+998771144045`} className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone className="w-3.5 h-3.5" />
                                <span className="text-sm font-bold">+998 77 114 40 45</span>
                            </a>
                            <span className="hidden md:inline text-white/40">•</span>
                            <a href={`tel:+998337974000`} className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone className="w-3.5 h-3.5" />
                                <span className="text-sm font-bold">+998 33 797 40 00</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
