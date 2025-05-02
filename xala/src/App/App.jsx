import Header from '../components/header/header'
import './App.css';
import '/src/index.css';
import Arrière from'../components/Button/arrière.jsx'
import Avant from '../components/Button/avant.jsx'
import React from 'react';
function App() {
 

  return (
    <>
      <Header/>
      <section className='w-1/1 h-130 bg-indigo-600  relative' id='defi'>
        <Arrière/>
        <div className='w-200 bg-red-400 h-110 rounded-2xl m-1 inline-block  mt-12' id='defi1'></div>
        <div  className='w-200 bg-red-400 h-110 rounded-2xl  m-1 inline-block '  id='defi2'></div>
        <div  className='w-200 bg-red-400 h-110 rounded-2xl  m-1 inline-block M5-20' id='defi3'></div>
         <Avant/>
      </section>
    </>
  )
}

export default App
