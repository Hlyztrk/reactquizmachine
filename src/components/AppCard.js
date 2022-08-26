import Header from "./Header";
import Images from "./Images";
import NextPreButton from "./NextPreButton";
import Questions from "./Questions";

const AppCard = () =>{
    
    //     slides : [
    //    {url: "http://localhost:3000/facebook.jpg", title: "facebook"},
    //    {url: "http://localhost:3000/sheffield.jpg", title: "sheffield"},
    //    {url: "http://localhost:3000/hongkong.jpg", title: "hongkong"}, 
    //    {url: "http://localhost:3000/porsche.jpg", title: "porsche"},
    //    {url: "http://localhost:3000/calcium.jpg", title: "calcium"},
    //    {url: "http://localhost:3000/cia.jpg", title: "cia"},
    //    {url: "http://localhost:3000/suriname.jpg", title: "suriname"},
    //    {url: "http://localhost:3000/homer.jpg", title: "homer"},
    //    {url: "http://localhost:3000/haemotology.jpg", title: "haemotology"},
    //    {url: "http://localhost:3000/bankofengland.jpg", title: "bankofengland"},
    //    {url: "http://localhost:3000/celebration.jpg", title: "celebration"}
    //   ],

    //   qanda : [
    //     {
    //         id:1,
    //         question : "What was Meta Platforms Inc formerly known as?",
    //         correctAnswer : "Facebook"
    //     },
    //     {
    //         id:2,
    //         question : "Which English city is known as the Steel City?",
    //         correctAnswer : "Sheffield"
    //     },
    //     {
    //         id:3,
    //         question : "Which former British colony was given back to China in 1997?",
    //         correctAnswer : "Hong Kong"
    //     },
    //     {
    //         id:4,
    //         question : "The logo for luxury car maker Porsche features which animal?",
    //         correctAnswer : "Horse"
    //     },
    //     {
    //         id:5,
    //         question : "Which element is said to keep bones strong?",
    //         correctAnswer : "Calcium"
    //     },
    //     {
    //         id:6,
    //         question : "What does CIA stand for?",
    //         correctAnswer : "Central Intelligence Agency"
    //     },
    //     {
    //         id:7,
    //         question : "Suriname is located on which continent?",
    //         correctAnswer : "South America"
    //     },
    //     {
    //         id:8,
    //         question : "What brand of beer does Homer Simpson drink?",
    //         correctAnswer : "Duff beer"
    //     },
    //     {
    //         id:9,
    //         question : "Haematology is the study of what?",
    //         correctAnswer : "The blood"
    //     },
    //     {
    //         id:10,
    //         question : "Which body sets the interest rates in the UK?",
    //         correctAnswer : "The Bank of England"
    //     },
        
    // ]
    // };

    // }
    // increment = (question,id, correctAnswer) =>{
    //     let queAns = this.state.qanda.map((q) =>{
    //         if(q.question === question && q.id === id && q.correctAnswer === correctAnswer){
    //             q.question++;
    //             q.id ++;
    //             q.correctAnswer++;
    //         }
    //     });
    //     this.setState({qanda : queAns})
    // }
        

      return(
            <div className="container">
                <Header/>
            {/* <div className="card-container">
                <div className="image-container">
                    <div className="card">
                        <div className="image">
                        <Images slides/>
                        </div> */}
                        {/* <div className="card-body"> */}
                        <Questions/> 
                        
                        {/* </div> */}
                    
                    {/* </div>
                </div>
                
            </div> */}
            {/* <NextPreButton /> */}
            </div>
        )
}






export default AppCard;