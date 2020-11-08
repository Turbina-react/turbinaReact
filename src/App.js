import React from 'react'
import axios from 'axios';
import About from "./components/About.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // axios.get('http://localhost:3001/songList').then(({data}) => {
  //   console.log(data)
  // })

  return (
    <>
      <div className="background"/>
      <Header/>
      <About/>
      <Footer/>
    </>
  );
}

export default App;

