import React from 'react'
import Div100vh, {use100vh} from 'react-div-100vh';

import About from "./components/About.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <div className="background"></div>
      {/*<Div100vh>*/}
      <Header/>
      {/*</Div100vh>*/}
      <About/>
      <Footer/>
    </div>
  );
}

export default App;

