import './App.css';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading';
const Header = lazy(() => import('./components/Header/Header'));
const WhyBabble = lazy(() => import('./components/whybabble/WhyBabble'));
const Farming = lazy(() => import('./components/Farming/Farming'));
const Arbitrum = lazy(() => import('./components/Arbitrum/Arbitrum'));
const Contract = lazy(() => import('./components/Contract/Contract'));
const Tokenomics = lazy(() => import('./components/Tokenomics/Tokenomics'));
const OurPartners = lazy(() => import('./components/OurPartners/OurPartners'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <WhyBabble />
      <Farming />
      <Arbitrum />
      <Contract />
      <Tokenomics />
      <Contact />
      <OurPartners />

      <Footer />
    </Suspense>
  );
}

export default App;
