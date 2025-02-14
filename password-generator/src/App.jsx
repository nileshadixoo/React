import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
  const [length, setLength] = useState(6)
  const[characterAllowed, setcharAllowd] = useState(false)
  const[numberAllowed, setNumberAllowed] = useState(false)
  const [Password,setPassword] = useState('');
  const copyRef = useRef(null)

  const generatePass = useCallback(()=>{
    let pass = ""
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(characterAllowed){
      str+='!@#$%^&*()_-+';
    }
    if(numberAllowed){
      str+='0987654321'
    }
    for(let i=0; i<length; i++){
       let char = Math.floor(Math.random()*str.length + 1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,characterAllowed,numberAllowed])
  useEffect(()=>{
    generatePass()
  },[length,characterAllowed,numberAllowed,setPassword])

  const copyToClipboard = ()=>{
    navigator.clipboard.writeText(copyRef.current.value)
  }
  

  return (
    <div className='flex items-center justify-center '>
      <div className='bg-gray-600 px-5 py-10 rounded-md space-y-5'>
        <h1 className='text-center font-medium text-gray-50'>Password Generator</h1>
        <div>
        <input
        className='text-black py-2 px-5 bg-amber-50 rounded-full w-[80%] '
        type="text"
        value={Password} 
        readOnly
        ref={copyRef}
        />
        <button 
        onClick={copyToClipboard}
        className='bg-blue-600 p-2 text-white rounded-full ml-1'>Copy</button>
        
        </div>
        <section className='flex gap-2 justify-center'>
        <div className='flex  gap-2 items-center justify-center'>
          <input type="range"
          min={6}
          max={50}
          name='length'
          value={length}
          onChange={(e)=>(setLength(e.target.value))}
          />
          <label htmlFor="length">Length:{length}</label>
        </div>
        <div className='flex  gap-2 items-center justify-center'>
          <input type="checkbox"
          
          name='character'
          value={characterAllowed}
          onChange={(e)=>(setcharAllowd((prev)=>!prev))}
          />
          <label htmlFor="length">Speial Character</label>
        </div>
        <div className='flex  gap-2 items-center justify-center'>
          <input type="checkbox"
          
          name='numbers'
          value={numberAllowed}
          onChange={(e)=>(setNumberAllowed((prev)=>!prev))}
          />
          <label htmlFor="length">Numbers</label>
        </div>
        
        </section>
      </div>
    </div>
  )
}

export default App