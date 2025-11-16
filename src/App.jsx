import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Community from './components/Community';
import Testimonials from './components/Testimonials';
import Bookmakers from './components/Bookmakers';
import FAQ from './components/FAQ';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Features />
        <Pricing />
        <Community />
        <Testimonials />
        <Bookmakers />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  )
}

export default App
