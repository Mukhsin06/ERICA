"use client";

// import { useTranslations } from "next-intl";

export const Footer = () => {
    // const t = useTranslations("HomePage"); // Using shared translations for now

    return (
        <footer className="w-full py-8 border-t border-white/10 mt-auto bg-black/40 backdrop-blur-md">
            <div className="container-padding max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                        E
                    </div>
                    <span className="font-bold text-lg tracking-tight">ERICA IT</span>
                </div>

                <p className="text-sm text-muted-foreground text-center md:text-right">
                    © {new Date().getFullYear()} Erica IT. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
