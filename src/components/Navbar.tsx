import { useState } from "react"
import { Link } from 'react-router-dom'
import Button from "./Button"


function Navbar() {
    const[isVisible, setIsVisible] = useState(false)

    const dropDown = () =>{
        setIsVisible(!isVisible)
        
    }

    const clicked = () => {
        setIsVisible(false)
    }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-yellow-500">
        <div className="flex items-center flex-shrink-0 text-white mr-0">
            <Link to='/' className=" p-5 font-semibold text-3xl tracking-tight">React Whiskey Collection</Link>
        </div>
        <div className="block">
            <button
            onClick={dropDown}
            className="flex items-center px-3 py-2 text-yellow-200 
            border round border-white hover:text-white hover:border-white">

                <i className="fas fa-bars"></i>
            </button>
        </div>
        { isVisible ? (
        <div className="w-full block flex-grow items-center"> 
            <div className="text-sm lg:flex-grow">
                <Button className="p-3 m-5 bg-yellow-400 justify-center">
                    <div>
                        <Link to ='/' onClick={ clicked } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 
                        text-yellow-200 hover:text-white mr-4 font-bold">
                             Home
                        </Link>
                    </div>
                </Button>
                <Button className="p-3 m-5 bg-yellow-400 justify-center">
                    <div>
                        <Link to ='/about' onClick={ clicked } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 
                        text-yellow-200 hover:text-white mr-4 font-bold">
                             About
                        </Link>
                    </div>
                </Button>
                <Button className="p-3 m-5 bg-yellow-400 justify-center">
                    <div>
                        <Link to ='/dashboard' onClick={ clicked } className="flex place-items-center mt-4 lg:inline-block lg:mt-0 
                        text-yellow-200 hover:text-white mr-4 font-bold">
                             Dashboard
                        </Link>
                    </div>
                </Button>
            </div>
        </div>) : (<></>) }
    </nav>
    
  )
}

export default Navbar
