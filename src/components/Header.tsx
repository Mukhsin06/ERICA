"use client";

import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { motion } from "framer-motion";

export const Header = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
        >
            <div className="max-w-[1400px] mx-auto flex items-center justify-end">
                {/* We keep the header minimal as per reference, mostly just for Lang Switcher */}

                {/* Desktop Nav could go here if needed */}

                <div className="flex items-center gap-4">
                    {/* Language Switcher Removed as per request */}
                    {/* <LanguageSwitcher /> */}
                </div>
            </div>
        </motion.header>
    );
};
