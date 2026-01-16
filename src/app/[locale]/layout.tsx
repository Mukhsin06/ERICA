import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/Header";


const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "Erica",
    description: "Professional Web Platform",
};

export default async function RootLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={`${outfit.variable} antialiased`} suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem={false}
                        disableTransitionOnChange
                    >
                        <Header />
                        {children}

                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
