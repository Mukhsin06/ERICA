import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Search, Globe, MapPin, Zap, Settings, TrendingUp } from "lucide-react";

export const SeoSlide = () => {
    const t = useTranslations("HomePage.seo");

    // Growth Chart Data
    const chartData = [
        { height: "15%", label: "20%" },
        { height: "25%", label: "30%" },
        { height: "40%", label: "45%" },
        { height: "55%", label: "65%" },
        { height: "70%", label: "78%" },
        { height: "85%", label: "85%" },
        { height: "100%", label: "100%" },
    ];

    const graphLabels = ["Okt", "Noy", "Dek", "Yan", "Fev", "Mar", "Apr"];

    return (
        <section className="min-h-full w-full flex flex-col items-center justify-center bg-white pt-10 pb-24">
            <div className="container-padding w-full max-w-[1000px]">

                {/* Header */}
                <div className="text-center mb-4">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-2"
                    >
                        {t("Title")}
                    </motion.h2>

                    {/* Google Search Bar Simulation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-md mx-auto bg-white border border-gray-200 rounded-full px-5 py-2 flex items-center shadow-sm hover:shadow-md transition-shadow relative"
                    >
                        <Search className="w-5 h-5 text-gray-400 mr-3" />
                        <span className="text-gray-400 text-xs md:text-sm font-medium">{t("Placeholder")}</span>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <Search className="w-4 h-4 text-white" />
                        </div>
                    </motion.div>
                </div>

                {/* Growth Chart Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white border border-gray-100 rounded-[28px] p-5 mb-4 shadow-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <TrendingUp className="w-32 h-32 text-green-600" />
                    </div>

                    <div className="flex items-center justify-between mb-4 relative z-10">
                        <h3 className="font-bold text-lg text-gray-900">{t("ChartTitle")}</h3>
                        <div className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +240% Growth
                        </div>
                    </div>

                    {/* Chart Container */}
                    <div className="flex items-end justify-between h-40 gap-2 sm:gap-4 px-4 relative z-10 border-b border-gray-100 pb-2 w-full">
                        {chartData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-end h-full gap-2 flex-1 group w-full">
                                {/* Bar Value Tooltip */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + (index * 0.1) }}
                                    className="text-[10px] font-bold text-gray-500 mb-1"
                                >
                                    {item.label}
                                </motion.div>

                                {/* Bar */}
                                <motion.div
                                    initial={{ height: "4px" }}
                                    whileInView={{ height: item.height }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.2 + (index * 0.1), ease: "circOut" }}
                                    className="w-full max-w-[60px] bg-gradient-to-b from-[#66bb6a] to-[#43a047] rounded-t-lg relative hover:brightness-110 transition-all shadow-sm"
                                >
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/30 rounded-t-lg" />
                                </motion.div>

                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide mt-1">{graphLabels[index]}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {[
                        { icon: Globe, key: "1", color: "text-blue-600", bg: "bg-blue-50" },
                        { icon: MapPin, key: "2", color: "text-green-600", bg: "bg-green-50" },
                        { icon: Zap, key: "3", color: "text-yellow-600", bg: "bg-yellow-50" },
                        { icon: Settings, key: "4", color: "text-gray-600", bg: "bg-gray-50" }
                    ].map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.key}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -10 : 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (idx * 0.1) }}
                                className="bg-white border border-gray-100 rounded-2xl p-3 flex items-center gap-3 hover:shadow-md transition-shadow group"
                            >
                                <div className={`w-8 h-8 rounded-xl ${item.bg} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium text-gray-800">{t(`Features.${item.key}.Title`)}</span>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Footer Button - Ensure it clears nav */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center"
                >
                    <div className="bg-[#e8f5e9] text-[#2e7d32] border border-green-200 px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-sm">
                        <TrendingUp className="w-4 h-4" />
                        {t("FooterButton")}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
