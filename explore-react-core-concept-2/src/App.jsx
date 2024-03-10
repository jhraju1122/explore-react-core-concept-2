import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cou from './Cou'
import Team from './Team'
 import Friends from './Friends'
 
 
//  import Counter from './Counter'
function App() {
  function  handleClick() {
    alert('button clicked');
  }
   const handleClick2 = () =>{
    alert('button clicked');

    
   }

  return (
    <>
   <Friends></Friends>

      <h1>React core concept 2</h1>
   

       <button onClick={handleClick}>Click me</button>

       <button onClick={handleClick2}>Click me</button>
       <Cou></Cou>
      
      <Team></Team>
    </>
  )
}
export default App
