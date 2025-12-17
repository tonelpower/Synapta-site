import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Solutions from './components/Solutions';
import Video from './components/Video';
import Disclaimer from './components/Disclaimer';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Solutions />
      <Video />
      <Disclaimer />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
