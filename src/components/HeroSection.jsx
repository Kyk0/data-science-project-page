export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
            {/* Background Splashes to keep it interesting but light */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-3xl mix-blend-multiply" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-slate-200/40 rounded-full blur-3xl mix-blend-multiply" />
            </div>

            <div className="w-full max-w-5xl mx-auto px-4 relative">
                <div className="space-y-10 animate-[fadeInUp_0.7s_ease-out]">
                    <div className="inline-flex items-center gap-3 rounded-full border border-slate-300/80 bg-white/80 px-4 py-1 text-xs text-slate-600 shadow-sm backdrop-blur">
                        <span className="font-medium text-indigo-600">
                            Data Science I · Pinnacle
                        </span>
                        <span className="h-1 w-1 rounded-full bg-slate-400" />
                        <span>Fall 2025 · UVM</span>
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
                            Clustering in High-Frequency Markets
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-600">
                            Evaluating Poisson and Hawkes Models for SPY Trade Counts
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="text-sm md:text-base text-slate-700">
                            Eddie Schwasnick · Matt Bullard · Kyrylo Kolesnichenko · Will Sander
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs md:text-sm text-slate-700">
                            <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 shadow-sm">
                                Instructor: Alice Patania
                            </span>
                            <span className="rounded-full border border-slate-300 bg-white/80 px-3 py-1 shadow-sm">
                                December 7, 2025
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}