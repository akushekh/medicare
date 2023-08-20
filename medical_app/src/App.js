// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "./components/Home/Home"
import Medicine from "./components/Medicine/Medicine"
import Service from './components/Service/Service';
import Testimonials from './components/Testimonials/Testimonials';
import Appointment from './components/Appointment/Appointment';
import OrderMedicine from './components/OrderMedicine/OrderMedicine';
import ClickMe from './components/ClickMe/ClickMe1';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/find-medicine" element={<Medicine />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/testimonials" element={<Testimonials/>}></Route>
        <Route path="/Appointment" element={<Appointment/>}></Route>
        <Route path="/OrderMedicine" element={<OrderMedicine/>}></Route>
        <Route path="/ClickMe" element={<ClickMe/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
