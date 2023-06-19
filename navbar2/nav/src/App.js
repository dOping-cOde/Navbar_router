
import React from 'react'
import Navbar from './Navbar';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Pricing from './components/Pricing';
import{Routes, Route} from 'react-router-dom';

function App() {
  return (
         

    <>
       
      <Navbar/> 
      <div>
       <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path ='about/' element={<About/>}></Route>
        <Route path = 'pricing/' element={<Pricing/>}></Route>
        <Route path = 'services/' element = {<Services/>}></Route>
       </Routes>
       </div>    
    </>

  );
}

export default App;
