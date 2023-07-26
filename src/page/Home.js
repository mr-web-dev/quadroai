import '../App.css';
import Hero from '../home/Hero';
import Instruction from '../home/Instruction';
import About from '../home/About';
import Contact from '../home/Contact';
import Social from '../home/Social';;

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

    {/* contact start */}
    <Contact/>
    {/* contact end */}

    {/* footer start */}
    <Social/>
    {/* footer end */}
    
    </>
  );
};

export default Home;