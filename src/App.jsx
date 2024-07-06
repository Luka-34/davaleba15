import React, { useEffect } from 'react'
import "./App.css"
import useLocalStorage from './hooks/useLocalStorage'
import useWindowResize from './hooks/useWindowsResize'


const App = () => {
    const [color, setColor] = useLocalStorage('tab', false)
    const {width, height} = useWindowResize()

   
  const ChangeColor = () => {
    if (width < 1200) {
      setColor('white')
    } else {
      setColor(prevColor => (prevColor === 'white' ? 'black' : 'white'))
    }
  };


    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])

  return (
         <div className='btn-box'>         
         <button className='btn' onClick={ChangeColor}>Change Theme</button>    
         </div>
  )
}

export default App
