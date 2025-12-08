export default function DataSection() {
    const cards = [
        {
            label: "SPY Stock",
            gradient: "from-emerald-50 to-teal-50",
            border: "border-emerald-100",
            accent: "text-emerald-600",
            title: "Tick & aggregate feeds",
            text: "We pull 1-minute, 1-second, and tick-level trades for SPY to capture full market texture.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            label: "Options",
            gradient: "from-teal-50 to-cyan-50",
            border: "border-teal-100",
            accent: "text-teal-600",
            title: "Weekly contracts",
            text: "We focus on representative weekly options and track trades, Greeks, and IV for cross-asset context.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            label: "Pipeline",
            gradient: "from-cyan-50 to-sky-50",
            border: "border-cyan-100",
            accent: "text-cyan-600",
            title: "Ingestion agent",
            text: "A custom agent handles pagination and rate limits before writing cleaned tables for modeling.",
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
            )
        },
    ]

    return (
        <section
            id="data"
            className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900"
        >

            {/* Soft background glow similar to Hero if desired, or keep clean */}
            <div className="absolute top-0 right-0 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
                <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[100px] mix-blend-multiply" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 space-y-12 animate-[fadeInUp_0.7s_ease-out]">
                {/* Header */}
                <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-emerald-700 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Data Acquisition
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                        Precision data from <span className="text-emerald-600">Polygon.io</span>.
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                        Because market microstructures differ, we ingest Stock and Options data separately
                        to preserve the fidelity of every tick before aligning them for our models.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {cards.map((card, idx) => (
                        <div
                            key={card.label}
                            className={`
                group relative overflow-hidden rounded-2xl border ${card.border}
                bg-white/60
                backdrop-blur-md shadow-sm
                p-6
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl hover:bg-white/80
              `}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${idx * 0.1 + 0.2}s both`,
                            }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <div
                                        className={`text-xs font-bold uppercase tracking-wider ${card.accent} opacity-90`}
                                    >
                                        {card.label}
                                    </div>
                                    <div className={`${card.accent} opacity-80 group-hover:opacity-100 transition-opacity`}>
                                        {card.icon}
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-slate-600 group-hover:text-slate-700 leading-relaxed transition-colors">
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