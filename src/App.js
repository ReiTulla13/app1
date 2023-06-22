import React from 'react'
import './App.css'
import { Navbar} from './components'
import{Footer , Decor , Header} from './containers'


const App = () => {
  return (
    <div className='App'>
        <div className="gradient_bg">
            <Navbar/>
            <Header/>
        </div>
        <Decor/>
        <Footer/>
    </div>
  )
}

export default App