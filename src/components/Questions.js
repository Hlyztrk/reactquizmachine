import { useState } from "react";
import React, {Component} from "react";
import NextPreButton from "./NextPreButton";
import Images from "./Images";




const Questions = () =>{
    
    const qanda = [
        {
            id:1,
            question : "What was Meta Platforms Inc formerly known as?",
            correctAnswer : "Facebook"
        },
        {
            id:2,
            question : "Which English city is known as the Steel City?",
            correctAnswer : "Sheffield"
        },
        {
            id:3,
            question : "Which former British colony was given back to China in 1997?",
            correctAnswer : "Hong Kong"
        },
        {
            id:4,
            question : "The logo for luxury car maker Porsche features which animal?",
            correctAnswer : "Horse"
        },
        {
            id:5,
            question : "Which element is said to keep bones strong?",
            correctAnswer : "Calcium"
        },
        {
            id:6,
            question : "What does CIA stand for?",
            correctAnswer : "Central Intelligence Agency"
        },
        {
            id:7,
            question : "Suriname is located on which continent?",
            correctAnswer : "South America"
        },
        {
            id:8,
            question : "What brand of beer does Homer Simpson drink?",
            correctAnswer : "Duff beer"
        },
        {
            id:9,
            question : "Haematology is the study of what?",
            correctAnswer : "The blood"
        },
        {
            id:10,
            question : "Which body sets the interest rates in the UK?",
            correctAnswer : "The Bank of England"
        },
        
    ]

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

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const[currentId, setCurrentId] = useState(0)
    const [input, setInput] = useState('');
    const[answer, setAnswer] = useState('')
    const[toggle, setToggle] = useState(false)
    const[showfinalScore, setfinalScore] = useState(false);
    let [currentIndex, setCurrentUser] = useState(0);
    let [score, setScore] = useState(0);

    const slideImg = ()=>{
      const currentImg = currentIndex + 1
      setCurrentUser(currentImg)
      if(currentIndex >= slides.length){
        setCurrentUser(0)
      }
    }

    const slidebackImg = ()=>{
        const currentImg = currentIndex - 1
        setCurrentUser(currentImg)
        if(currentIndex = 0){
            setCurrentUser(currentImg)
          }
      }
    
      const handleChange = (event)=>{
       event.preventDefault()
        setInput(event.target.value)
    }

    
    const nextAnswerButtonClick = () => {
        const nextId = currentId +1;
        const nextQuestion = currentQuestion + 1;
        setCurrentId(nextId);
        setInput('')
        setToggle(!toggle)
        setAnswer('')
        setCurrentQuestion(nextQuestion);
        if(qanda[currentId].id >= qanda.length){
            setCurrentId(0)
            setCurrentQuestion(0)
            setfinalScore(true)
        }
    };

    const previousAnswerButtonClick = () => {
        const nextId = currentId -1;
        setCurrentId(nextId);
        setInput('')
        setToggle(!toggle)
        setAnswer('')
        const nextQuestion = currentQuestion - 1;
        setCurrentQuestion(nextQuestion);
        if(qanda[currentId].id = 0){
            setCurrentId(currentId)
            setCurrentQuestion(currentQuestion)
        }
    };

    const showCorrectAnswer = () =>{
            if(input === qanda[currentQuestion].correctAnswer){
                setAnswer(`You are right, correct answer is ${qanda[currentQuestion].correctAnswer}`)
                setScore(score + 1)
                setToggle(!toggle)
                console.log(score)
                
            }else if(input!== qanda[currentQuestion].correctAnswer){
                setAnswer(`You are wrong, correct answer is ${qanda[currentQuestion].correctAnswer}`)
                setToggle(!toggle)
            }
            
        }
    
  return (
    <>      
            {
             showfinalScore ? (
                <div className="finalScore">
                    <div className="final-container">
                        <img src="http://localhost:3000/celebration.jpg"/>
                        <h2>Game Over!</h2>
                        <h6> Your score is {score}</h6>
                    </div>
                </div>
           ): 
           (
              <div className="card-container">
                    <div className="image-container">
                        <div className="card">
                            <div className="image">
                            {
                                <img src={slides[currentIndex].url}/>
                            }
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Quiz Question <span id="questionIndex">{qanda[currentId].id}</span></h5>
                                <p id="card-text">{qanda[currentQuestion].question}</p>
                                <input type="text" id="inputAnswer" value={input} onChange ={handleChange} placeholder="Enter your answer..." />
                                <button onClick={showCorrectAnswer} className= "btn btn-primary">Click for the answer</button>
                                {toggle && 
                                <p id="correctAnswer">{answer}</p>
                                }
                            </div>
                        
                        </div>
                    </div>
                    
                </div>
           )
        }
                <div className="button">
                    <div className="left-arrow"><i onClick={() => {previousAnswerButtonClick(); slidebackImg()}} className="fas fa-arrow-alt-circle-left"></i>Previous</div>
                    <div className="right-arrow" >Next<i onClick ={()=>{nextAnswerButtonClick(); slideImg()}} className="fas fa-arrow-alt-circle-right"></i></div>
                </div>

        
    
    </>
  )
}



export default Questions
