
import { useState } from 'react'
import './App.css'
import Cards from './componnts/Cards/Cards'
import Header from './componnts/header/header'
import Catagorycal from './componnts/Catagorycal/Catagorycal'
import Swal from 'sweetalert2'


function App() {
 const [courseCard, setCourseCards]=useState([])
 const handlebtn=(link)=>{
  const isHours = courseCard.find(item => item.title == link.title )
  let count = link
  if(isHours){
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )

  } else{
    setCourseCards([...courseCard, link])
  }
 }
  

  return (
    
    <>
       
       <Header></Header>
       <div className='md:flex gap-7 '>
      <Cards handlebtn={handlebtn}></Cards>
       <Catagorycal courseCard={courseCard} ></Catagorycal>
       </div>
       
    </>
  )
}

export default App
