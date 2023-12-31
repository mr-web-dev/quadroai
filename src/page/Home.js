import '../App.css';
import Hero from '../home/Hero';
import Instruction from '../home/Instruction';
import About from '../home/About';
import Services from '../home/Services';
import Contact from '../home/Contact';
import Social from '../home/Social';

function Home() {
  return (
    <>

    {/* hero start */}
    <Hero/>
    {/* hero end */}

    {/* instruction start */}
    <Instruction/>
    {/* instruction end */}

    {/* about start */}
    <About/>
    {/* about end */}

    {/* services start */}
    <Services/>
    {/* services end */}

    {/* contact start */}
    <Contact/>
    {/* contact end */}

    {/* social start */}
    <Social/>
    {/* social end */}
    
    </>
  );
};

export default Home;