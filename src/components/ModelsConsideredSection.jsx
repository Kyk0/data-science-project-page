// src/components/ModelsConsideredSection.jsx
import model2Figure from '../assets/models/model2_intraday_rate.png'
import model3Figure from '../assets/models/model3_hawkes.png'

export default function ModelsConsideredSection() {
    const frameworkCards = [
        {
            label: 'Data',
            title: 'High-frequency, low-dimensional',
            text: 'Thousands of minute-level observations across multiple days, with compact feature sets built from time-of-day and lagged trade counts.',
        },
        {
            label: 'Constraints',
            title: 'Fast and interpretable',
            text: 'Models must support real-time use, remain explainable to desks, and be maintainable by analysts with standard statistical training.',
        },
        {
            label: 'Families',
            title: 'Poisson and Hawkes-style',
            text: 'We focus on Poisson GLMs/GAMs for intraday structure and Hawkes-type autoregressions to capture self-exciting order flow.',
        },
    ]

    return (
        <section
            id="models-considered"
            className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none opacity-25">
                <div className="absolute -top-10 right-10 w-[420px] h-[420px] bg-indigo-600 rounded-full blur-[130px] mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-fuchsia-500 rounded-full blur-[120px] mix-blend-screen" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 space-y-16 animate-[fadeInUp_0.7s_ease-out]">
                {/* Header */}
                <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-xs font-medium text-indigo-200 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Model Selection
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                        Models for <span className="text-indigo-300">trade intensity and clustering</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed">
                        We compare Poisson baselines and Hawkes-style models to see which structure best explains
                        minute-level SPY trade counts while keeping the intensity function interpretable.
                    </p>
                </div>

                {/* Framework cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {frameworkCards.map((card, idx) => (
                        <div
                            key={card.label}
                            className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${idx * 0.05 + 0.15}s both`,
                            }}
                        >
                            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-indigo-300 mb-2">
                                {card.label}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-indigo-100">
                                {card.title}
                            </h3>
                            <p className="text-sm text-slate-200 leading-relaxed">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Model 2: Time-of-day Poisson */}
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
                    <div className="space-y-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-300">
                            Model 2 · Time-of-day Poisson
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">
                            Intraday trade rate as a function of clock time
                        </h3>
                        <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                            We let the expected number of trades per minute depend on where we are in the trading day.
                            This captures the opening auction, midday lull, and closing ramp that a constant-rate Poisson
                            model misses.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 space-y-3">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-200">
                                Formulation
                            </div>
                            <div className="font-mono text-sm md:text-base text-indigo-100 space-y-1">
                                <div>
                                    <span className="mr-1">Nₜ ~ Poisson(λₜ),</span>
                                    <span>t = 1,…,T</span>
                                </div>
                                <div>
                                    log(λₜ) = f(time_of_dayₜ)
                                </div>
                            </div>
                            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                                In practice we use a smooth or piecewise function of minute-of-day so that λₜ follows
                                observed intraday patterns without overfitting noise.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-200">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200 mb-1">
                                    Strengths
                                </div>
                                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                                    <li>Captures systematic intraday seasonality.</li>
                                    <li>Stays interpretable via time-of-day response curves.</li>
                                    <li>Directly comparable to the homogeneous Poisson baseline.</li>
                                </ul>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-200 mb-1">
                                    Limitations
                                </div>
                                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                                    <li>No explicit self-excitation from recent trades.</li>
                                    <li>Misspecification risk if the time-of-day effect is too rigid or too flexible.</li>
                                    <li>Ignores other drivers such as volatility or volume shocks.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-4 md:p-5 shadow-2xl">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-xs font-medium text-slate-300">
                                    Figure 14 · Time-of-day intensity
                                </div>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-100">
                                    Poisson GLM
                                </span>
                            </div>
                            <div className="rounded-xl overflow-hidden bg-slate-950/50 border border-white/5">
                                <img
                                    src={model2Figure}
                                    alt="Intraday trade intensity as a function of time-of-day"
                                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <p className="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed">
                                The fitted curve tracks higher activity at the open and close and lower intensity mid-day,
                                showing how λₜ evolves over the trading session.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Model 3: Hawkes-type model */}
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-4 md:p-5 shadow-2xl">
                            <div className="flex items-center justify-between mb-3">
                                <div className="text-xs font-medium text-slate-300">
                                    Figure 15 · Hawkes-type clustering
                                </div>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-fuchsia-500/20 text-fuchsia-100">
                                    Self-exciting
                                </span>
                            </div>
                            <div className="rounded-xl overflow-hidden bg-slate-950/50 border border-white/5">
                                <img
                                    src={model3Figure}
                                    alt="Hawkes-type self-exciting trade intensity"
                                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <p className="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed">
                                Each burst of trades lifts intensity for a short window before it decays, generating
                                clustered arrivals rather than a smooth Poisson flow.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 order-1 lg:order-2">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-fuchsia-300">
                            Model 3 · Hawkes-type autoregression
                        </div>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white">
                            Self-exciting order flow via lagged trade counts
                        </h3>
                        <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                            To capture clustering, we approximate a Hawkes process in discrete time by letting the current
                            intensity depend on recent minute-level counts. Positive lag coefficients indicate that
                            a burst of trades raises short-term future activity.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 space-y-3">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fuchsia-200">
                                Formulation
                            </div>
                            <div className="font-mono text-sm md:text-base text-fuchsia-100 space-y-1">
                                <div>Continuous-time Hawkes (conceptual):</div>
                                <div>λ(t) = μ + Σ α · exp(−β (t − tᵢ))</div>
                                <div className="mt-2">Discrete-time approximation:</div>
                                <div>log(λₜ) = β₀ + β₁Nₜ₋₁ + β₂Nₜ₋₂ + … + βₖNₜ₋ₖ</div>
                            </div>
                            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                                When β₁, β₂,… are positive, high recent counts push up λₜ, giving a Hawkes-like
                                self-exciting structure on minute-level data.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 text-sm text-slate-200">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200 mb-1">
                                    Strengths
                                </div>
                                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                                    <li>Explicitly models clustering in trade arrivals.</li>
                                    <li>Combines intraday seasonality with history dependence.</li>
                                    <li>Can reduce error in volatile, bursty regimes.</li>
                                </ul>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-200 mb-1">
                                    Limitations
                                </div>
                                <ul className="space-y-1.5 list-disc list-inside text-slate-300">
                                    <li>More parameters and heavier estimation workload.</li>
                                    <li>Higher risk of overfitting with too many lags.</li>
                                    <li>Harder to explain to non-technical stakeholders.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs md:text-sm text-slate-300">
                            <span className="font-semibold text-slate-100">Key tuning choices:</span>{' '}
                            number of lags K, form of the time-of-day effect f(·), and regularization
                            for large positive lag coefficients to avoid overfitting.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}