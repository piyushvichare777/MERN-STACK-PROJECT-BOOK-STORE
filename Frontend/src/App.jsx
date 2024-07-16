import { useState } from 'react'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Banner/>
  <Footer/>
    </>
  )
}

export default App
