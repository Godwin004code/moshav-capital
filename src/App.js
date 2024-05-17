import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import FIS from './components/Services/FIS';
import ClusterMarketingServices from './components/Services/ClusterMarketingServices';
import CWAM from './components/Services/CollateralWarehousing';
import IAAS from './components/Services/IAAS';
import Contact from './components/Contact/Contact';
import Partners from './components/Partners/Partners';
import Services from './components/Services/Services';
import ScrollToTop from './components/Global/ScrollToTop';
import Register from "../src/components/Register/Register"




function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
    <Routes>
      <Route path='/' exact element={<HomePage />} />
      <Route path='/about'  element={<AboutPage />} />
      <Route path="/financial-intermidation" element={<FIS />} />
      <Route path="/collateral-warehousing-and-collateral-management" element={<CWAM
       />} />
      <Route path="/cluster-marketing-and-brokerage-services" element={<ClusterMarketingServices />} />
      <Route path="/infrastructure-as-a-service" element={<IAAS />}  />
      <Route path="/contact" element={<Contact />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/services" element={<Services />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
