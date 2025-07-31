import './style/App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Feedback from './components/Feedback/Feedback';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Feedback/>
      </main>
    </>
  )
}

export default App;
