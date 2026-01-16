"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale: "uz" | "ru" | "en") => {
        router.replace(pathname, { locale: newLocale });
    };

    const languages = [
        { code: "uz", label: "UZ" },
        { code: "ru", label: "RU" },
        { code: "en", label: "EN" },
    ] as const;

    return (
        <div className="flex items-center gap-1 bg-secondary/50 backdrop-blur-sm p-1 rounded-full border border-white/5">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => switchLocale(lang.code)}
                    className={`relative px-3 py-1 text-xs font-medium rounded-full transition-colors ${locale === lang.code ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                        }`}
                >
                    {locale === lang.code && (
                        <motion.div
                            layoutId="active-lang"
                            className="absolute inset-0 bg-primary rounded-full"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                    <span className="relative z-10">{lang.label}</span>
                </button>
            ))}
        </div>
    );
};
