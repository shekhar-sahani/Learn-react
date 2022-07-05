import Navbar from "../components/Navbar";
import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('text-white')
  const [image, setImage] = useState('https://www.w3schools.com/w3css/img_lights.jpg')
  const [title, setTitle] = useState('Card zero')
  const [desc, setDesc] = useState('This is desc one')
  

  const increase = () => {
    setCount(count + 1);
    if(count >= 15) setColor('text-warning')
    if(count >= 18) setColor('text-success')
    if(count >= 20) setColor('text-danger')
  };

  const decrease = () => {
    setCount(count - 1)
    if(count <= 20) setColor('text-success')
    if(count <= 18) setColor('text-warning')
    if(count <= 15) setColor('text-white')

  };

  const prev = () => {
    setCount(count - 1)
    if(count === 0) setImage('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')
    if(count === 1) setImage('https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80')
    if(count === 2) setImage('https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg')
    if(count === 3) setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZGPtRStRiuj8rSm2kLOPc_ka69KrB7rmROVwwQEJ5edEMxCGLcWMgrh20SxORkjPUig&usqp=CAU')
    if(count <= 0) setCount(3)
    
  }

  const next = () => {    
    setCount(count + 1)
    if(count === 1){
      setImage('https://www.w3schools.com/w3css/img_lights.jpg')
      setTitle('Card One')
      setDesc('This is desc one')
    } 
    if(count === 1) {
      setImage('https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80')
      setTitle('Card Three')
      setDesc('This is desc three')
    } 
    if(count === 2) setImage('https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg')
    if(count === 3) setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVZGPtRStRiuj8rSm2kLOPc_ka69KrB7rmROVwwQEJ5edEMxCGLcWMgrh20SxORkjPUig&usqp=CAU')
    if(count >= 3) setCount(0)

  }

 

  return (
    <>
      <Navbar />
      {/* <div className="text-center mt-5">
        <h1 className={color} style={{ fontSize: "100px" }}> {count} </h1>

        <button className="btn btn-danger mx-3" onClick={() => decrease()}>
          {" "}
          Decrease{" "}
        </button>
        <button className="btn btn-primary mx-3" onClick={() => increase()}>
          {" "}
          Increase{" "}
        </button>
      </div> */}

<div className="text-center m-4 " >
<div  class="" style={{width:'18rem', margin:"0 auto"}}>
  <img  class="card-img-top"  src={image} alt="Card" />
  <div class="card-body">
    <h5 class="card-title">{title}  </h5>
    <p class="card-text">{desc} </p>
    
  </div>
</div>
<button onClick={() => prev()} className="btn btn-danger m-3" > Prev </button>
<button onClick={() => next()} className='btn btn-primary m-3' > Next </button>
</div>
    </>
  );
}

export default Home;
