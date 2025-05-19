import Hero from './components/hero';
import Header from './components/header'
import Servicios from './components/servicios';
import Nosotros from './components/nosotros';
import Contacto from './components/Contacto';
import './App.css';
import Galeria from './components/Galeria';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Hero id="inicio" />
      <Header />
      {/* <Header2 /> */}
      

      <Servicios id="servicios" /> 
      <Nosotros id="nosotros" />
      <Galeria id="galeria" />
      <Contacto id="contacto" />
      <Footer />
    </div>
  );
}

export default App;
