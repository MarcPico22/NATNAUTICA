import './styles.css';

import AnnouncementBar from './components/AnnouncementBar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Services from './components/Services';
import Partners from './components/Partners';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App = () => (
  <div className="app">
    <AnnouncementBar />
    <Navigation />
    <Hero />
    <Solutions />
    <Services />
    <Partners />
    <CallToAction />
    <Footer />
  </div>
);

export default App;
