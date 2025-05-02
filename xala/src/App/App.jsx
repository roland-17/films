import react,{ useState } from 'react'
import Header from '../components/header/header'
import './App.css';
import '/src/index.css'

function App() {
 

  return (
    <>
      <Header/>
      <section className='w-1/1 h-100 bg-indigo-600 overflow-x-auto  whitespace-nowrap'>
        <div className='w-100 bg-red-400 h-3/4 inline-block m-1 mt-10'></div>
        <div  className='w-100 bg-red-400 h-3/4 inline-block m-1' ></div>
        <div  className='w-100 bg-red-400 h-3/4 inline-block m-1'></div>
        <div  className='w-100 bg-red-400 h-3/4 inline-block m-1'></div>
        <div  className='w-100 bg-red-400 h-3/4 inline-block m-1'></div>
        
      </section>
    </>
  )
}

export default App
