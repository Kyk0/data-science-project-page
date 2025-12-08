export default function ResultsSection() {
    const rows = [
        {
            name: "Model 1: Homogeneous Poisson",
            mse: "2,964,764",
            mae: "776.78",
            rmse: "1,721.85",
            best: true,
        },
        {
            name: "Model 2: Time-of-Day Poisson",
            mse: "3,118,167",
            mae: "796.87",
            rmse: "1,765.83",
            best: false,
        },
        {
            name: "Model 3: Hawkes-Type",
            mse: "59,339,210",
            mae: "1,132.67",
            rmse: "7,703.20",
            best: false,
        },
    ]

    return (
        <section
            id="results"
            className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white relative overflow-hidden"
        >
            <div className="absolute inset-x-0 -top-40 h-80 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 blur-3xl opacity-60 pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-4 space-y-16">
                <div className="space-y-4 max-w-3xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-xs font-medium text-emerald-200 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Results
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                        Model performance on held-out{" "}
                        <span className="text-emerald-300">SPY trade counts</span>.
                    </h2>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        All three models are evaluated on the same chronological test set using
                        Mean Squared Error (MSE) as the primary metric, with Mean Absolute Error
                        (MAE) and Root Mean Squared Error (RMSE) as supporting measures.
                    </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl shadow-xl backdrop-blur-md overflow-hidden max-w-4xl mx-auto">
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 text-xs text-slate-300 uppercase tracking-wider bg-white/5">
                        <span>Final Model Performance</span>
                        <span className="text-emerald-300">Primary metric: MSE</span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-white/5 text-slate-300 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Model</th>
                                    <th className="px-6 py-4 font-medium text-right">MSE</th>
                                    <th className="px-6 py-4 font-medium text-right">MAE</th>
                                    <th className="px-6 py-4 font-medium text-right">RMSE</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {rows.map((row) => (
                                    <tr
                                        key={row.name}
                                        className={
                                            row.best
                                                ? "bg-emerald-500/5"
                                                : "hover:bg-white/5 transition-colors"
                                        }
                                    >
                                        <td className="px-6 py-4 whitespace-pre-line">
                                            <div className="flex items-center gap-3">
                                                {row.best && (
                                                    <span className="inline-flex items-center justify-center text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/20">
                                                        Best
                                                    </span>
                                                )}
                                                <span className="text-slate-100 font-medium">
                                                    {row.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-200 font-mono text-right">
                                            {row.mse}
                                        </td>
                                        <td className="px-6 py-4 text-slate-200 font-mono text-right">
                                            {row.mae}
                                        </td>
                                        <td className="px-6 py-4 text-slate-200 font-mono text-right">
                                            {row.rmse}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="px-6 py-5 text-sm text-slate-300 bg-black/20 border-t border-white/10 text-center">
                        The error values are large because SPY trade counts are high.
                        Even reasonable forecasts can deviate by hundreds of trades, inflating MSE.
                    </div>
                </div>

                <div className="space-y-6 max-w-3xl mx-auto">
                    <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
                        Interpretation of Results
                    </h3>
                    <div className="space-y-4 text-base text-slate-200 leading-relaxed text-center">
                        <p>
                            <span className="font-semibold text-emerald-300">Model 1</span> ("Homogeneous Poisson")
                            achieved the lowest errors across all metrics. Despite its simplicity,
                            the constant-rate baseline generalized best to unseen data.
                        </p>
                        <p>
                            <span className="font-semibold text-cyan-300">Model 2</span> added intraday structure but
                            slightly worsened out-of-sample accuracy, suggesting the time-of-day fit may have
                            overfit the training windows.
                        </p>
                        <p>
                            <span className="font-semibold text-rose-300">Model 3</span> performed significantly worse.
                            The exponential link function in the Hawkes-type GLM led to explosive intensity
                            estimates during volatile periods, resulting in massive outlier predictions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}