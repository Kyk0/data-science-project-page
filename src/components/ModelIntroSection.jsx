// src/components/ModelIntroSection.jsx
import baselinePlot from "../assets/models/baseline-poisson.png"

export default function ModelIntroSection() {
    return (
        <section
            id="models"
            className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-slate-50 to-slate-100 text-slate-900"
        >
            {/* soft background blobs */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute -top-32 left-0 w-[420px] h-[420px] bg-indigo-200/50 blur-[100px] mix-blend-multiply" />
                <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-sky-200/50 blur-[100px] mix-blend-multiply" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 space-y-14 animate-[fadeInUp_0.7s_ease-out]">
                {/* Header */}
                <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-sky-700 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                        Modeling clustered trade arrivals
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                        From clustered trades to a{" "}
                        <span className="text-sky-600">Poisson baseline</span>.
                    </h2>

                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        Trades in modern electronic markets do not arrive at a constant
                        rate. They come in bursts around news, volatility spikes, and
                        market open or close. We treat this as a regression problem on
                        minute-level trade counts and ask which model best captures both
                        average activity and clustering while staying interpretable for
                        desks that manage short-horizon risk.
                    </p>
                </div>

                {/* Main grid: problem + figure */}
                <div className="grid gap-10 lg:grid-cols-2 items-start">
                    {/* Left: problem and success criteria */}
                    <div className="space-y-6">
                        <div className="rounded-2xl border border-slate-200 bg-white/60 p-6 backdrop-blur-md shadow-sm">
                            <h3 className="text-lg font-semibold mb-2 text-slate-900">Problem formulation</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                We study whether SPY trade counts cluster in time and what
                                mathematical structure explains this clustering. Stakeholders
                                include quant desks, market makers, and risk managers who adjust
                                quoting and inventory based on expected short-term order flow.
                            </p>
                            <p className="text-sm text-slate-600 leading-relaxed mt-3">
                                The target is <span className="font-semibold text-slate-800">trades per minute</span>.
                                Predictors include time-of-day features and lagged trade counts,
                                so that we can separate smooth intraday seasonality from
                                self-exciting bursts.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-4">
                            <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                                <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
                                    Goal 1
                                </div>
                                <p className="text-xs text-slate-600">
                                    Low error when forecasting future minute-level trade counts.
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                                <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
                                    Goal 2
                                </div>
                                <p className="text-xs text-slate-600">
                                    Capture both intraday seasonality and clustering in order
                                    flow.
                                </p>
                            </div>
                            <div className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                                <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-1">
                                    Goal 3
                                </div>
                                <p className="text-xs text-slate-600">
                                    Keep the intensity function interpretable for practitioners.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: baseline models figure */}
                    <div className="space-y-4">
                        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden text-slate-900">
                            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 text-xs bg-slate-50/50">
                                <span className="font-mono text-sky-700">
                                    Nₜ ~ Poisson(λ), t = 1,…,T
                                </span>
                                <span className="px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 font-medium">
                                    Baseline model
                                </span>
                            </div>
                            <div className="p-4 bg-white">
                                <img
                                    src={baselinePlot}
                                    alt="Baseline Poisson model fit for SPY trade counts"
                                    className="w-full rounded-xl border border-slate-100 shadow-sm object-contain"
                                />
                            </div>
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed">
                            The homogeneous Poisson model assumes a single constant rate{" "}
                            <span className="font-mono text-slate-700">λ</span> for SPY trades. It provides a
                            simple, fast, and interpretable benchmark: more complex models
                            must beat this baseline on error while explaining intraday
                            structure and clustering.
                        </p>
                    </div>
                </div>

                {/* Metrics + baseline summary cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white/60 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                            Primary metric
                        </div>
                        <h4 className="text-sm font-semibold text-slate-900">Mean Squared Error (MSE)</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            We treat trade counts as a regression target and use MSE to
                            measure how close predicted and realized trades per minute are.
                            Models must reduce MSE at least 10–15% relative to the Poisson
                            baseline.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/60 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                            Secondary metrics
                        </div>
                        <h4 className="text-sm font-semibold text-slate-900">MAE &amp; RMSE</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            MAE reports a typical absolute error in trades per minute. RMSE is
                            more sensitive to bursts and helps us see how models behave during
                            high-activity intervals.
                        </p>
                        <p className="text-xs text-slate-500 italic">
                            Accuracy and R² are not used here: they are poorly aligned with
                            Poisson count models.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white/60 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                            Homogeneous Poisson
                        </div>
                        <h4 className="text-sm font-semibold text-slate-900">Why this baseline?</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            One-parameter model with clear meaning: expected trades per
                            minute. Very fast to estimate and widely used in count data
                            settings, but it ignores intraday patterns and trade clustering,
                            so it underperforms in volatile periods.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}