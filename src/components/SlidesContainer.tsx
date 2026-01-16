"use client";

import { useState, useCallback, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Hero } from "./Hero";
import { IntroductionSlide } from "./IntroductionSlide";
import { SolutionSlide } from "./SolutionSlide";
import { CapabilitiesSlide } from "./CapabilitiesSlide";
import { SeoSlide } from "./SeoSlide";
import { SecuritySlide } from "./SecuritySlide";
import { PackagesSummarySlide } from "./PackagesSummarySlide";
import { StartPackageSlide } from "./StartPackageSlide";
import { StartPackageAdminSlide } from "./StartPackageAdminSlide";
import { PremiumPackageSlide } from "./PremiumPackageSlide";
import { JobxSlide } from "./JobxSlide";
import { VipPackageSlide } from "./VipPackageSlide";
import { VipBrandingAiSlide } from "./VipBrandingAiSlide";
import { VipMarketingSlide } from "./VipMarketingSlide";
import { WhyEricaSlide } from "./WhyEricaSlide";
import { AboutSection } from "./AboutSection";
import { ProblemsSection } from "./ProblemsSection";
import { NextStepsSlide } from "./NextStepsSlide";

export const SlidesContainer = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        Hero,
        IntroductionSlide,
        ProblemsSection,
        SolutionSlide,
        CapabilitiesSlide,
        SeoSlide,
        SecuritySlide,
        PackagesSummarySlide,
        StartPackageSlide,
        StartPackageAdminSlide,
        StartPackageAdminSlide,
        PremiumPackageSlide,
        JobxSlide,
        VipPackageSlide,
        VipBrandingAiSlide,
        VipMarketingSlide,
        WhyEricaSlide,
        NextStepsSlide
    ];
    const TotalSlides = slides.length;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % TotalSlides);
    }, [TotalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + TotalSlides) % TotalSlides);
    }, [TotalSlides]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    const CurrentComponent = slides[currentSlide];

    return (
        <div className="relative h-screen w-full overflow-hidden bg-white flex flex-col justify-between">
            {/* Slide Content Area */}
            <div className="flex-1 w-full relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full overflow-y-auto no-scrollbar"
                    >
                        <CurrentComponent />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Floating Pagination Bar */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50 px-6 py-4 rounded-full flex items-center gap-6 transition-all hover:scale-[1.02] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">

                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full hover:bg-gray-100/80 text-gray-400 hover:text-[#2e7d32] transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-3">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${currentSlide === index
                                    ? "w-10 bg-[#2e7d32] shadow-sm"
                                    : "w-2.5 bg-gray-200 hover:bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full hover:bg-gray-100/80 text-gray-400 hover:text-[#2e7d32] transition-colors"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                </div>
            </div>


        </div>
    );
};
