import React from 'react';
import './App.css';

// components
import Loader from './components/Loader';
import Top from './components/Top';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Home from './page/Home';
import Chat from './page/Chat';

function App() {
  return (
    <>

    {/* main components start */}
    <Loader/>
    <Top/>
    <Content/>
    <Header/>
    {/* main components end */}

    {/* ==================== Page start ==================== */}
    <Home/>
    {/* <Chat/> */}
    {/* ==================== Page end ==================== */}

    {/* main components start */}
    <Footer/>
    {/* main components end */}

    </>
  );
};

export default App;