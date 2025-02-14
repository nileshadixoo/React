import React, { useEffect, useState } from 'react'
import './App.css'
const App = () => {
  const [hours, sethours ]= useState(0)
  const [min, setMin ]= useState(0)
  const [second, setSeconds ]= useState(0)
  const [start,setStart] = useState(false)
 
  const [time,setTime] = useState(0)

  useEffect(()=>{
   let interval;
   if(start){
     interval = setInterval(() => {
      setTime(prev=>prev+10)
     }, 10);
     
   }
   else{
    clearInterval(interval)
   }
  sethours(Math.floor(time/(60*60*1000)%60))
  setMin(Math.floor(time/60000)%60)
  setSeconds(Math.floor(time/1000)%60)
      
   return ()=> clearInterval(interval)
    
  },[start,time])
  

  const handleStart = ()=>{
    setStart(true)
  }
  const handleReset = ()=>{
    setTime(0)
    setStart(false)
  
  }
  const handlePause = ()=>{
    setStart(false)
  }

  return (
    <div className='container'>

      <div className='watch'>
        <div className='time'>{hours<10?`0${hours}`:hours}:{min<10?`0${min}`:min}:{second<10?`0${second}`:second}</div>
        <div className='buttons'>
          <button
          onClick={handleStart}
          className='btn'>Start</button>
          <button
          onClick={handleReset}
           className='btn'>Reset</button>
          <button
          onClick={handlePause}
          className='btn'>Stop</button>
        </div>
      </div>

    </div>
  )
}

export default App