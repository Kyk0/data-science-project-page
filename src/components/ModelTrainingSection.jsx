// src/components/ModelTrainingSection.jsx
export default function ModelTrainingSection() {
    const metricCards = [
        {
            label: 'Poisson deviance',
            title: 'Negative log-likelihood',
            text: 'Natural loss for Poisson models; measures how well the intensity λₜ explains realized counts Nₜ.',
            tag: 'Primary',
        },
        {
            label: 'MAE',
            title: 'Mean Absolute Error',
            text: 'Readable error in trades per minute: on average, how far predictions are from realized counts.',
            tag: 'Secondary',
        },
        {
            label: 'RMSE',
            title: 'Root MSE (optional)',
            text: 'Emphasizes large errors and is useful for judging performance during volatile bursts.',
            tag: 'Spikes',
        },
    ]

    return (
        <section
            id="training"
            className="py-20 bg-gradient-to-br from-indigo-50 via-slate-50 to-slate-100 text-slate-900 relative overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute -top-10 left-10 w-[260px] h-[260px] bg-emerald-200/50 rounded-full blur-[100px] mix-blend-multiply" />
                <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-indigo-200/50 rounded-full blur-[100px] mix-blend-multiply" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 space-y-12 animate-[fadeInUp_0.7s_ease-out]">
                <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-emerald-700 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Model Training & Evaluation
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                        Time-aware training with{' '}
                        <span className="text-emerald-700">rolling cross-validation</span>.
                    </h2>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        All models forecast future minute-level trade counts from the past using a rolling-origin
                        time-series cross-validation scheme, rather than shuffled k-folds.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 items-start">
                    <div className="space-y-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                            6.4 · Time-series cross-validation
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Observations are sorted by <span className="font-mono text-slate-700">datetime_et</span>, then we train on
                            earlier days and validate on later days to mimic real forecasting and avoid information
                            leakage.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-600 list-disc list-inside">
                            <li>Each fold uses an expanding training window and a contiguous validation window.</li>
                            <li>The remaining days form a final out-of-sample test set after model selection.</li>
                            <li>Homogeneous Poisson, time-varying Poisson, and Hawkes-type models share the same splits.</li>
                        </ul>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            We avoid shuffled k-folds because trade counts are serially correlated; mixing past and
                            future in the same fold would underestimate true prediction error.
                        </p>
                    </div>

                    <div className="bg-white/60 border border-slate-200 rounded-2xl p-5 md:p-6 backdrop-blur-md shadow-sm">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700 mb-3">
                            Example rolling folds (by trading day)
                        </div>
                        <div className="space-y-1.5 font-mono text-[11px] md:text-xs text-emerald-700">
                            <div>Fold 1 · train: days 1–5 · validate: days 6–7</div>
                            <div>Fold 2 · train: days 1–7 · validate: days 8–9</div>
                            <div>Fold 3 · train: days 1–9 · validate: days 10–11</div>
                            <div>Fold 4 · train: days 1–11 · validate: days 12–13</div>
                            <div>Fold 5 · train: days 1–13 · validate: days 14–15</div>
                        </div>
                        <p className="mt-4 text-[11px] md:text-xs text-slate-500 leading-relaxed">
                            Each step moves the split boundary forward in time. Models are always trained on history
                            and evaluated on the next unseen block.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2 max-w-3xl">
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700">
                            6.5 · Model selection criteria
                        </div>
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                            For each fold we compute validation error and average across folds. Using the same
                            time-based splits and metrics for all three models gives a clean comparison of how much each
                            added layer of structure improves predictive accuracy.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {metricCards.map((m, idx) => (
                            <div
                                key={m.label}
                                className="rounded-2xl border border-slate-200 bg-white/60 backdrop-blur-md p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                style={{
                                    animation: `fadeInUp 0.5s ease-out ${idx * 0.05 + 0.1}s both`,
                                }}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
                                        {m.label}
                                    </div>
                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-medium">
                                        {m.tag}
                                    </span>
                                </div>
                                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                                    {m.title}
                                </h3>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                                    {m.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 text-xs md:text-sm text-slate-600">
                        <div className="bg-white/60 border border-slate-200 rounded-xl p-4 md:p-5 space-y-2 shadow-sm">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                                Reproducibility
                            </div>
                            <p className="leading-relaxed">
                                We fix a global seed (for example <span className="font-mono text-slate-700">set.seed(123)</span>) and
                                record the date boundaries for every train, validation, and test window so the full
                                pipeline can be recreated.
                            </p>
                        </div>
                        <div className="bg-white/60 border border-slate-200 rounded-xl p-4 md:p-5 space-y-2 shadow-sm">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-700">
                                Leakage prevention
                            </div>
                            <p className="leading-relaxed">
                                History features like <span className="font-mono text-slate-700">lag1</span> and{' '}
                                <span className="font-mono text-slate-700">lag2</span> are built inside each training window and then
                                applied to validation data; holdout sets are never used to fit parameters or tune
                                hyperparameters.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}