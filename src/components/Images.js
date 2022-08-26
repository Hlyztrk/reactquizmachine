import { useState } from "react"
import NextPreButton from "./NextPreButton";

const Images = () => {
  const slides = [
    {url: "http://localhost:3000/facebook.jpg", title: "facebook"},
    {url: "http://localhost:3000/sheffield.jpg", title: "sheffield"},
    {url: "http://localhost:3000/hongkong.jpg", title: "hongkong"}, 
    {url: "http://localhost:3000/porsche.jpg", title: "porsche"},
    {url: "http://localhost:3000/calcium.jpg", title: "calcium"},
    {url: "http://localhost:3000/cia.jpg", title: "cia"},
    {url: "http://localhost:3000/suriname.jpg", title: "suriname"},
    {url: "http://localhost:3000/homer.jpg", title: "homer"},
    {url: "http://localhost:3000/haemotology.jpg", title: "haemotology"},
    {url: "http://localhost:3000/bankofengland.jpg", title: "bankofengland"},
    {url: "http://localhost:3000/celebration.jpg", title: "celebration"}
   ]
  const [currentIndex, setCurrentUser] = useState(0);

  const slideImg = ()=>{
    const currentImg = currentIndex + 1
    setCurrentUser(currentImg)
  }
  
  const slideStyles = {
    width: "19rem",
    height : "15rem",
    backgroundSize : "cover",
    backgroundPosition : "center",
    backgroundImage : `url(${slides[currentIndex].url})`

  }
  return (
    <div>
      <div style={slideStyles}></div>

    </div>
  )
}


export default Images
