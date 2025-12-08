import priceDist from "../assets/eda/spy-price-distribution.png"
import intradayActivity from "../assets/eda/spy-1s-summary.png"
import spyHeatmap from "../assets/eda/spy-correlation-heatmap.png"
import optHeatmap from "../assets/eda/opt-correlation-heatmap.png"

export default function EdaSection() {
    const keyPoints = [
        "Price levels are almost redundant once you pick one of {open, high, low, close, VWAP}.",
        "Volume and trade sizes are heavy-tailed with bursty, U-shaped intraday activity.",
        "Returns and realized volatility capture regime shifts better than raw price levels.",
    ]

    const visuals = [
        {
            tag: "5.1 · Univariate",
            figure: "Figure 1",
            accent: "text-indigo-500",
            image: priceDist,
            title: "SPY trade price distribution",
            subtitle: "Prices are stable and well-behaved; activity is not.",
            text: [
                "Price variables such as open, high, low, close, and VWAP form a unimodal, slightly right-skewed distribution, with means and medians close together.",
                "This suggests that, despite intraday noise, the price process is relatively stable over the sample and does not suffer from extreme outliers.",
            ],
            bullets: [
                "Unimodal shape with mild right skew.",
                "Means and medians close → limited distortion from spikes.",
                "Confirms that later modeling can focus more on activity than on price extremes.",
            ],
        },
        {
            tag: "5.1 · Univariate / 5.4",
            figure: "Figure 6",
            accent: "text-emerald-500",
            image: intradayActivity,
            title: "Volume bursts and intraday U-shaped activity",
            subtitle: "Activity is clustered in time, especially at the open and close.",
            text: [
                "1-second aggregates show the classic U-shaped intraday pattern: intense trading at the open, quieter mid-day, and another spike into the close.",
                "Volume and trade sizes have heavy right tails, capturing short-lived bursts of extremely high activity.",
            ],
            bullets: [
                "Typical high-frequency pattern: open/close peaks, mid-day lull.",
                "Heavy tails in volume and trade size distributions.",
                "These bursts motivate self-exciting models like Hawkes, not just constant-rate Poisson.",
            ],
        },
        {
            tag: "5.2 · Bivariate / 5.3",
            figure: "Figure 11",
            accent: "text-sky-500",
            image: spyHeatmap,
            title: "Correlation map of SPY features",
            subtitle: "Which features co-move and which carry unique signal.",
            text: [
                "The correlation heatmap shows near-perfect correlation among level price variables (open, high, low, close, VWAP), meaning they are essentially interchangeable in a models.",
                "Activity measures such as volume and number of transactions are positively correlated, while log returns and realized volatility are only weakly tied to levels.",
            ],
            bullets: [
                "Level prices: correlations ≈ 0.99–1.00 → keep only one in models.",
                "Activity metrics co-move but add information beyond price levels.",
                "Returns and realized volatility are better proxies for short-term stress than raw price levels.",
            ],
        },
        {
            tag: "5.2 · Bivariate / 5.3 · Options",
            figure: "Figure 12",
            accent: "text-fuchsia-500",
            image: optHeatmap,
            title: "Options vs SPY: similar structure, richer tails",
            subtitle: "Options share the same structure but amplify extremes.",
            text: [
                "The options heatmap mirrors SPY’s structure: strong ties among price-like quantities and co-moving activity metrics.",
                "However, options show stronger tail behavior and sensitivity around moneyness and time-to-expiry, which reinforces the need to treat them as a related but separate system.",
            ],
            bullets: [
                "Similar correlation blocks to SPY → consistent market microstructure.",
                "Heavier tails and regime changes around key contract characteristics.",
                "Justifies analyzing options separately before aligning them with SPY.",
            ],
        },
    ]

    return (
        <section
            id="eda"
            className="py-24 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-30">
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[128px] mix-blend-screen opacity-20" />
                <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600 rounded-full blur-[128px] mix-blend-screen opacity-20" />
            </div>

            <div className="relative max-w-6xl mx-auto px-4 space-y-14 animate-[fadeInUp_0.7s_ease-out]">
                {/* Header */}
                <div className="space-y-4 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-xs font-medium text-indigo-200 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Exploratory Data Analysis (EDA)
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                        What SPY and options look like before we start modeling.
                    </h2>
                    <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
                        Before fitting Poisson and Hawkes models, we examined distributions, correlations,
                        and multivariate structure to decide which features matter and which are redundant
                        in high-frequency trade data.
                    </p>
                </div>

                {/* Key points bar */}
                <div className="grid gap-4 md:grid-cols-3">
                    {keyPoints.map((point, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md p-4 text-xs md:text-sm text-slate-300 leading-relaxed"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${0.15 + idx * 0.05}s both`,
                            }}
                        >
                            <div className="flex items-start gap-2">
                                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                <span>{point}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Visuals with side-by-side layout */}
                <div className="space-y-20">
                    {visuals.map((v, idx) => (
                        <div
                            key={v.title}
                            className="grid md:grid-cols-2 gap-10 items-center"
                            style={{
                                animation: `fadeInUp 0.7s ease-out ${0.3 + idx * 0.1}s both`,
                            }}
                        >
                            {/* Image */}
                            <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                                <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl transition-all duration-300 hover:shadow-indigo-500/10 hover:border-white/20">
                                    <div className="p-4 bg-slate-950/30 flex items-center justify-center">
                                        <img
                                            src={v.image}
                                            alt={v.title}
                                            className="w-full h-auto max-h-[400px] object-contain mx-auto rounded-lg shadow-sm"
                                        />
                                    </div>
                                    <div className="px-4 py-3 border-t border-white/5 bg-white/5">
                                        <div className="flex items-center justify-between text-[0.7rem] text-slate-400 font-mono">
                                            <span>{v.figure}</span>
                                            <span className="opacity-70">{v.tag}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Text */}
                            <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                                <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${v.accent} opacity-90`}>
                                    {v.tag}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                                    {v.title}
                                </h3>
                                <p className="text-base md:text-lg text-slate-300 mb-6">
                                    {v.subtitle}
                                </p>
                                <div className="space-y-4 mb-6">
                                    {v.text.map((p, i) => (
                                        <p key={i} className="text-sm md:text-base text-slate-400 leading-relaxed">
                                            {p}
                                        </p>
                                    ))}
                                </div>
                                <ul className="space-y-3 text-sm text-slate-300">
                                    {v.bullets.map((b, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-slate-500" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}