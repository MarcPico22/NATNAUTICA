import './styles.css';

import AnnouncementBar from './components/AnnouncementBar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Partners from './components/Partners';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App = () => (
  <div className="app">
    <a className="skip-link" href="#main-content">
      Ir al contenido principal
    </a>
    <AnnouncementBar />
    <Navigation />
    <main id="main-content">
      <Hero />
      <Solutions />
      <Services />
      <Technologies />
      <Partners />
      <CallToAction />
    </main>
    <Footer />
  </div>
);

export default App;
