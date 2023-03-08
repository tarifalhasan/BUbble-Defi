import './App.css';
import Header from './components/Header/Header';
import WhyBabble from './components/whybabble/WhyBabble';
import Farming from './components/Farming/Farming';
import Arbitrum from './components/Arbitrum/Arbitrum';
import Contract from './components/Contract/Contract';
import Tokenomics from './components/Tokenomics/Tokenomics';
import OurPartners from './components/OurPartners/OurPartners';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <WhyBabble />
      <Farming />
      <Arbitrum />
      <Contract />
      <Tokenomics />
      <OurPartners />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
