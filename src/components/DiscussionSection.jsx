// src/components/DiscussionSection.jsx
export default function DiscussionSection() {
    const cards = [
        {
            label: "Summary of Findings",
            accent: "text-emerald-300",
            title: "Simplest model wins",
            text: "The homogeneous Poisson model delivered the lowest MSE, MAE, and RMSE. The time-of-day model captured intraday patterns but did not improve test accuracy, and the Hawkes-type model became unstable with very large predicted counts.",
        },
        {
            label: "Limitations",
            accent: "text-amber-300",
            title: "Poisson mismatch & data limits",
            text: "SPY trade counts are highly variable with variance far above the mean, so the pure Poisson assumption is imperfect. We also only worked with one-minute aggregates, which prevented us from fitting a true tick-level Hawkes process.",
        },
        {
            label: "Recommendations",
            accent: "text-cyan-300",
            title: "Use Poisson as a robust baseline",
            text: "For this dataset, a constant-rate Poisson model is the most reliable choice. Time-of-day adjustments should be used cautiously and validated carefully. Hawkes-type structures require regularization and higher-resolution data to be safe in practice.",
        },
        {
            label: "Future Work",
            accent: "text-violet-300",
            title: "Richer count models",
            text: "Future extensions include Negative Binomial or quasi-Poisson models for overdispersion, proper tick-level Hawkes processes, and more flexible structures such as GAMs or tree-based models to capture intraday patterns more accurately.",
        },
    ]

    return (
        <section
            id="discussion"
            className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden"
        >
            <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 blur-3xl opacity-60 pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-4 space-y-16 animate-[fadeInUp_0.7s_ease-out]">
                <div className="space-y-4 max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-xs font-medium text-emerald-200 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Discussion
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                        What the models{" "}
                        <span className="text-emerald-300">got right</span> and where they{" "}
                        <span className="text-rose-300">fell short</span>.
                    </h2>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        We summarize why the homogeneous Poisson model ultimately worked best,
                        what its limits are, and how future work could better capture clustered
                        trade arrivals in noisy high-frequency data.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                    {cards.map((card, idx) => (
                        <div
                            key={card.label}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${idx * 0.1 + 0.1}s both`,
                            }}
                        >
                            <div className={`text-[10px] font-semibold uppercase tracking-[0.16em] mb-3 ${card.accent}`}>
                                {card.label}
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {card.title}
                            </h3>
                            <p className="text-sm text-slate-200 leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}