import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Carousel from '../components/Carousel';
import ContactForm from '../components/Contacto';

const Home = () => {
  return (
    <div className="scroll-smooth">
       {/* Header */}
      <Header />
      {/* Sección About !! "min-h-screen"si quieres que la sección ocupe toda la pantalla:3
      "min-h-screen bg-black...*/}
      <section id="About" className="px-5 py-5 flex items-center justify-center">
        <About />
      </section>

      <section id="Tech" className="px-5 py-5 flex items-center justify-center">
        <Carousel />
      </section>

      {/* Sección Portafolio */}
      <section id="Portafolio" className="min-h-screen px-5 py-5 flex items-center justify-center">
        <Projects />
      </section>
      {/*
  
      {/* Sección Proyectos */}
      <section id="Contactos" className="px-5 py-5  flex items-center justify-center">
      <ContactForm />
      </section>
      {/* Footer */}
      
    </div>
  );
};

export default Home;
