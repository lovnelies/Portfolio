import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className=" text-gray-800 min-h-screen flex flex-col">
      
      <Header />
      <div className="mt-24 flex-grow max-w-5xl mx-auto px-4"> {/*ajustar el mt-24 según el alto Header */}
      <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
