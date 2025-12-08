// src/components/DiscussionSection.jsx
export default function DiscussionSection() {
    const cards = [
        {
            label: "Summary of Findings",
            accent: "text-emerald-600",
            title: "Simplest model wins",
            text: "The homogeneous Poisson model delivered the lowest MSE, MAE, and RMSE. The time-of-day model captured intraday patterns but did not improve test accuracy, and the Hawkes-type model became unstable with very large predicted counts.",
        },
        {
            label: "Limitations",
            accent: "text-amber-600",
            title: "Poisson mismatch & data limits",
            text: "SPY trade counts are highly variable with variance far above the mean, so the pure Poisson assumption is imperfect. We also only worked with one-minute aggregates, which prevented us from fitting a true tick-level Hawkes process.",
        },
        {
            label: "Recommendations",
            accent: "text-cyan-600",
            title: "Use Poisson as a robust baseline",
            text: "For this dataset, a constant-rate Poisson model is the most reliable choice. Time-of-day adjustments should be used cautiously and validated carefully. Hawkes-type structures require regularization and higher-resolution data to be safe in practice.",
        },
        {
            label: "Future Work",
            accent: "text-indigo-600",
            title: "Richer count models",
            text: "Future extensions include Negative Binomial or quasi-Poisson models for overdispersion, proper tick-level Hawkes processes, and more flexible structures such as GAMs or tree-based models to capture intraday patterns more accurately.",
        },
    ]

    return (
        <section
            id="discussion"
            className="py-24 bg-gradient-to-br from-indigo-50 via-slate-50 to-slate-100 text-slate-900 relative overflow-hidden"
        >
            <div className="relative max-w-6xl mx-auto px-4 space-y-12">
                <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-200 backdrop-blur-sm text-xs font-medium text-slate-600 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        Discussion
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                        What the models{" "}
                        <span className="text-emerald-600">got right</span> and where they{" "}
                        <span className="text-rose-600">fell short</span>.
                    </h2>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                        We summarize why the homogeneous Poisson model ultimately worked best,
                        what its limits are, and how future work could better capture clustered
                        trade arrivals in noisy high-frequency data.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {cards.map((card, idx) => (
                        <div
                            key={card.label}
                            className="bg-white/60 border border-slate-200 rounded-2xl p-6 shadow-sm backdrop-blur-sm hover:border-slate-300 hover:shadow-md transition-all duration-300"
                        >
                            <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${card.accent}`}>
                                {card.label}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                {card.title}
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}