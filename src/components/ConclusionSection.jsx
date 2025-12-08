// src/components/ConclusionSection.jsx
export default function ConclusionSection() {
    const chips = [
        "Simple model, strong baseline",
        "Complexity did not guarantee gains",
        "Noisy high frequency data"
    ]

    return (
        <section
            id="conclusion"
            className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden"
        >
            <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 blur-3xl opacity-60 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-xs font-medium text-emerald-200 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Conclusion
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                    When simple Poisson<br className="hidden md:block" /> beats complex structure.
                </h2>

                <p className="text-lg text-slate-300 leading-relaxed">
                    We tested whether time varying Poisson and Hawkes type autoregressive models could
                    outperform a constant rate Poisson baseline for predicting SPY trade counts. Despite
                    strong theoretical motivation from intraday seasonality and clustering, the homogeneous
                    Poisson model achieved the best forecasting performance across all metrics. The result is a
                    clear takeaway for noisy high frequency settings: simple, interpretable models can
                    outperform more sophisticated alternatives and remain a robust baseline for understanding
                    trade arrival dynamics.
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                    {chips.map((c) => (
                        <span
                            key={c}
                            className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium uppercase tracking-wide text-slate-200"
                        >
                            {c}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}