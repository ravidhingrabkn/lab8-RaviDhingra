import React from "react";
import axios from "axios";
import './Question.css';

class Question extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            question: null,
            category : null,
            answer: null,
            revealed : false
        };              
    }
    Answershow(){
        this.setState({
            revealed: true
        })
    }
    
    
    componentDidMount(){
        axios({
        url: "https://opentdb.com/api.php?amount=1&category=28&type=boolean",
        method: "GET"
        }).then((res) => {
            console.log(res.data.results)
           
         this.setState({
             question : res.data.results[0].question,
             category: res.data.results[0].category,
             answer: res.data.results[0].correct_answer          
            
        });
       });
       }

    render(){
        const { question } = this.state;
        const {category } = this.state;
        const {answer } = this.state; 
        const revealed = this.state.revealed;          
        
        return(
            <div>
                <div>{category}</div>
                <h3>{question}</h3>
                <div>
                {this.state.revealed?
                <div className="answer">
                {answer}  
              </div>
                :null
                }
                </div>
                <button onClick={() => this.Answershow()}>Reveal answer</button>
                {/* {button} */}
            </div>  
            
        )   
        return(
            <div>
               {question.map(q => (
                <p>{q.question}</p>                
               ))
               }            
            </div>
            )   
        
    }
}
export default Question;