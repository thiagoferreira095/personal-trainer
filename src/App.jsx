import './style/App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Feedback from './components/Feedback/Feedback';
import Plans from './components/Plans/Plans';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Feedback/>
        <Plans/>
        <Footer/>
      </main>
    </>
  )
}

export default App;
