import Hero from './components/Hero';
import Header from './components/Header'
import Servicios from './components/Servicios';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import './App.css';
import Galeria from './components/Galeria';
import Footer from './components/Footer';



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
    </div>
  );
}

export default App;
