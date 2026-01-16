import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, Crown, Globe, Mail, MinusCircle, Server, Shield, Wrench, XCircle, Zap, UserX, Briefcase, TrendingUp } from "lucide-react";

export const VipPackageSlide = () => {
    const t = useTranslations("HomePage.vip_package");

    // Variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } }
    };

    const platformItems = [0, 1, 2, 3];
    const noCostItems = [0, 1, 2, 3, 4];
    const comparisonTraditionalPoints = [0, 1, 2, 3];
    const comparisonVipPoints = [0, 1, 2, 3];

    const serviceItems = [
        { icon: Server, key: "Server" },
        { icon: Globe, key: "Domain" },
        { icon: Mail, key: "Email" },
        { icon: Shield, key: "Security" },
        { icon: Wrench, key: "Support" },
    ];

    return (
        <section className="h-[90vh] max-h-[90vh] min-h-[600px] w-full flex flex-col bg-[#FAFAFA] relative justify-center py-2 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-b from-yellow-100/40 to-transparent rounded-full blur-[80px] opacity-50 z-0 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-t from-purple-100/40 to-transparent rounded-full blur-[80px] opacity-50 z-0 pointer-events-none" />

            <div className="container-padding w-full max-w-[1280px] z-10 mx-auto flex flex-col gap-2 md:gap-3 h-full justify-center">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-center relative max-w-3xl mx-auto shrink-0"
                >
                    <div className="inline-flex items-center gap-1.5 bg-white px-2.5 py-0.5 rounded-full border border-gray-200 shadow-sm mb-1.5">
                        <Crown className="w-3 h-3 fill-yellow-400 text-yellow-500" />
                        <span className="font-bold text-gray-900 text-[9px] md:text-[10px] tracking-wide uppercase">{t("Title")} — {t("Price")}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-1.5 tracking-tight leading-tight">
                        {t("Subtitle")}
                    </h2>
                    <p className="text-gray-600 text-[10px] md:text-xs font-medium leading-relaxed max-w-xl mx-auto">
                        {t("Description")}
                    </p>
                </motion.div>

                {/* Financial Comparison Section (New) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl mx-auto w-full shrink-0"
                >
                    {/* Traditional Way */}
                    <motion.div variants={itemVariants} className="bg-white rounded-xl border border-gray-200 p-2.5 shadow-sm flex flex-col opacity-80 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center">
                                <UserX className="w-3.5 h-3.5 text-gray-500" />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-gray-900">{t("Comparison.Traditional.Title")}</h3>
                                <div className="text-red-500 font-bold text-[10px]">{t("Comparison.Traditional.Cost")}</div>
                            </div>
                        </div>
                        <div className="space-y-0.5">
                            {comparisonTraditionalPoints.map((i) => (
                                <div key={i} className="flex items-center gap-1.5">
                                    <XCircle className="w-3 h-3 text-red-400 shrink-0" />
                                    <span className="text-gray-600 font-medium text-[9px] md:text-[10px]">{t(`Comparison.Traditional.Points.${i}`)}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* VIP Way */}
                    <motion.div variants={itemVariants} className="bg-white rounded-xl border-2 border-green-500 p-2.5 shadow-lg flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-green-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-bl-md uppercase tracking-widest">Recommended</div>
                        <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center">
                                <Briefcase className="w-3.5 h-3.5 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-gray-900">{t("Comparison.Vip.Title")}</h3>
                                <div className="text-green-600 font-bold text-[10px]">{t("Comparison.Vip.Cost")}</div>
                            </div>
                        </div>
                        <div className="space-y-0.5">
                            {comparisonVipPoints.map((i) => (
                                <div key={i} className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0" />
                                    <span className="text-gray-800 font-bold text-[9px] md:text-[10px]">{t(`Comparison.Vip.Points.${i}`)}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Main Features Grid - 4 Blocks (2x2) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-2 items-stretch shrink-0"
                >
                    {[
                        { key: "ecosystem", icon: Globe, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
                        { key: "marketing", icon: TrendingUp, color: "text-pink-600", bg: "bg-pink-50", border: "border-pink-100" },
                        { key: "ai", icon: Zap, color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100" },
                        { key: "inclusive", icon: Shield, color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100" }
                    ].map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.key}
                                variants={itemVariants}
                                className={`bg-white rounded-xl border ${feature.border} shadow-sm p-2.5 flex flex-col h-full hover:shadow-md transition-all group min-h-[100px]`}
                            >
                                <div className="flex items-center gap-2 mb-1.5">
                                    <div className={`w-7 h-7 ${feature.bg} rounded-lg flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <h3 className="text-xs font-bold text-gray-900 leading-tight pr-4">
                                        {t(`Features.${feature.key}.Title`)}
                                    </h3>
                                </div>
                                <div className="space-y-0.5 grow">
                                    {[0, 1, 2, 3, 4].map((i) => {
                                        const count = feature.key === 'inclusive' ? 5 : (feature.key === 'ecosystem' ? 2 : 3);
                                        if (i >= count) return null;

                                        return (
                                            <div key={i} className="flex items-start gap-1.5">
                                                <div className={`mt-1.5 w-1 h-1 rounded-full ${feature.color.replace('text-', 'bg-')}`} />
                                                <span className="text-gray-700 font-medium text-[9px] md:text-[10px] leading-snug">
                                                    {t(`Features.${feature.key}.Items.${i}`)}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Footer Accent - Black Button Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="shrink-0 text-center mt-2"
                >
                    <div className="inline-flex items-center justify-center gap-2 bg-[#000] text-white px-6 py-2.5 rounded-lg shadow-xl mx-auto w-full max-w-[400px] hover:scale-105 transition-transform cursor-pointer">
                        <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-[10px] md:text-xs font-bold tracking-wide uppercase">{t("FooterAccent")}</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
