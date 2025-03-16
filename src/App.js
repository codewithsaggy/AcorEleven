import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import OceanFreightService from './components/OceanFreightService';
import AirFreightService from './components/AirFreightService';
import CourierService from './components/CourierService';
import CustomClearanceDocumentService from './components/CustomClearanceDocumentService';
import InlandTransportService from './components/InlandTransportService';
import PackagingRelocationService from './components/PackagingRelocationService';
import TradeFinanceService from './components/TradeFinanceService';
import WarehouseService from './components/WarehouseService';
import About from './components/About';
import Contact from './components/contact';
import Blog from './components/blog';
import 'animate.css';
import LoginForm from './components/loginregisterform';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/air-freight" element={<AirFreightService />} />
          <Route path="/ocean-freight" element={<OceanFreightService />} />
          <Route path="/inland-transport-services" element={<InlandTransportService />} />
          <Route path="/courier-services" element={<CourierService />} />
          <Route path="/customs-clearnance-documentation" element={<CustomClearanceDocumentService />} />
          <Route path="/warehouse-services" element={<WarehouseService />} />
          <Route path="/packaging-relocation" element={<PackagingRelocationService />} />
          <Route path="/trade-finance" element={<TradeFinanceService />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/loginregister" element={<LoginForm />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
