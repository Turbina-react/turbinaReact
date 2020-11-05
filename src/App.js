import React from 'react'
import Div100vh from 'react-div-100vh';
import About from "./components/About.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {

  return (
    <div>
      <div className="background"></div>
      <Div100vh>
        <Header/>
      </Div100vh>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;


// import React from 'react'
// import {Button, Header} from "./components"; // сюда импортим компоненты
//
// // это настроенное реактовское приложение для дальнейшей нашей работы,
// // тут мы будем строить наши компоненты, ниже я показал элементарные примеры верстки
// // и пару примеров прокидывания пропс через компонент
//
// function App() {
//
//   return (
//     <div className="App">
//       <h1>турбина</h1>
//       <Header/>
//       {/*  <Header />  это компонент*/}
//
//       <Button  // кнопка № 1
//         className="button--cart"  // className это props, его можно назвать как угодно
//         outline   // тоже пропс, булевый, если не указывает true или false, то по дефолту идет true
//       />
//
//       <Button // кнопка № 2
//         textDlyaKnopki=" / текст через props"
//       />
//
//       <Button // кнопка № 3
//         textClick=" вы кликнули "
//         textCount=" / тоже текст через пропс"
//       />
//
//     </div>
//   );
// }
//
// export default App;
