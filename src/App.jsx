import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home'
import Skills from './Components/Skills/Skills'
import Portfolio from './Components/Portfolio/Portfolio'
import Enquiry from './Pages/Enquiry/Enquiry'
import EnquiryControlled from './Pages/Enquiry/EnquiryControlled'
import EnquiryUnctontrolled from './Pages/Enquiry/EnquiryUnctontrolled'
import EnquiryControlledOptimized from './Pages/Enquiry/EnquiryControlledOptimized'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
     {/* <Home/> */}
     {/* <Skills/> */}
     {/* <Portfolio/> */}
     {/* <Enquiry/> */}
     {/* <EnquiryControlled/> */}
     {/* <EnquiryUnctontrolled/> */}
     <EnquiryControlledOptimized/>
   </>
  )
}

export default App
