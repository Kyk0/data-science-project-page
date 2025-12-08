export default function IntroSection() {
    const cards = [
        {
            label: "Problem",
            gradient: "from-white/10 to-white/5",
            border: "border-white/10",
            accent: "text-indigo-400",
            title: "Noisy prices, structured trades",
            text: "Prices look noisy, but SPY trades arrive in short, clustered bursts rather than at a steady rate.",
        },
        {
            label: "Objectives",
            gradient: "from-white/10 to-white/5",
            border: "border-white/10",
            accent: "text-violet-400",
            title: "Branching-style models",
            text: "We compare homogeneous and inhomogeneous Poisson models with a Hawkes-type autoregression to quantify self-excitation and its predictive value.",
        },
        {
            label: "Scope",
            gradient: "from-white/10 to-white/5",
            border: "border-white/10",
            accent: "text-emerald-400",
            title: "Focused but limited",
            text: "We models minute-level SPY and selected options; full order-book dynamics and long-horizon effects are out of scope.",
        },
    ]

    return (
        <section
            id="introduction"
            className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-30">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[128px] mix-blend-screen opacity-20" />
                <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600 rounded-full blur-[128px] mix-blend-screen opacity-20" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 space-y-12 animate-[fadeInUp_0.7s_ease-out]">
                <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-xs font-medium text-indigo-200 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Project Overview
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                        Introduction
                    </h2>

                    <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                        This project explores whether SPY trade arrivals can be explained by simple Poisson
                        models or require Hawkes-style self-exciting processes, using high-frequency data to
                        look for clear clustering patterns.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {cards.map((card, idx) => (
                        <div
                            key={card.label}
                            className={`
                group relative overflow-hidden rounded-2xl border ${card.border}
                bg-gradient-to-b ${card.gradient}
                backdrop-blur-md shadow-lg
                p-6
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-2xl hover:bg-white/10
              `}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${idx * 0.1 + 0.2}s both`,
                            }}
                        >
                            <div className="flex flex-col h-full">
                                <div
                                    className={`text-xs font-bold uppercase tracking-wider mb-3 ${card.accent} opacity-90`}
                                >
                                    {card.label}
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-slate-200 leading-relaxed">
                                    {card.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}