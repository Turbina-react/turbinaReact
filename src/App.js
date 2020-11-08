import React from 'react'

import About from "./components/About.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <div className="background"/>
      <Header/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

