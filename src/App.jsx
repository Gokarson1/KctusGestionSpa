import Hero from './components/hero';
import Header from './components/header'
import Servicios from './components/Servicios';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Galeria from './components/Galeria';
import Footer from './components/Footer';
import './App.css';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <Hero id="inicio" />
      <Header />
      <Servicios id="servicios" /> 
      <Nosotros id="nosotros" />
      <Galeria id="galeria" />
      <Contacto id="contacto" />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
