import HeroSection from "./components/HeroSection"
import IntroSection from "./components/IntroSection"
import DataSection from "./components/DataSection.jsx";
import EdaSection from "./components/EdaSection.jsx";
import ModelIntroSection from "./components/ModelIntroSection.jsx";
import ModelsConsideredSection from "./components/ModelsConsideredSection.jsx";
import ModelTrainingSection from "./components/ModelTrainingSection.jsx";
import ResultsSection from "./components/ResultsSection.jsx";
import DiscussionSection from "./components/DiscussionSection.jsx";
import ConclusionSection from "./components/ConclusionSection.jsx";

function App() {
    return (
        <div className="min-h-screen text-slate-900">
            <main>
                <HeroSection />
                <IntroSection />
                <DataSection />
                <EdaSection />
                <ModelIntroSection />
                <ModelsConsideredSection />
                <ModelTrainingSection />
                <ResultsSection />
                <DiscussionSection />
                <ConclusionSection />
            </main>
        </div>
    )
}

export default App