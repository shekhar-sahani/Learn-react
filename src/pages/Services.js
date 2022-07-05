import Navbar from "../components/Navbar";
import Child from "../components/Child";
import { useState } from "react";

function Services() {
    var car = 'Nano'
    const [count, setCount] = useState(0)

    const next = () => {
        setCount(count + 1)
    }
    
   
    return(
        <>
        <Navbar />
        <h3>This is service page {count} </h3>

        <Child increase={next} car={car} count={count} />
        <button onClick={() => next()} >  next </button>

        
        </>
    )
}

export default Services;


