import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
  class HeadTitle extends React.Component{
    render(){
      return<div className='title'>Welcome to Quessy Quess</div>
    }
  }


  class WinAlert extends React.Component{
    render(){
      return <div className='winAlert' style={{display: this.props.display}} > {this.props.endText} </div>
    }
  }

  class RandomDots extends React.Component{   
    generateColor = (e) =>{
      if(typeof this.props.generateColor === "function"){
        this.props.generateColor();
      }else{
        return false;
      }
    }

    startNewGame = () =>{
      if(typeof this.props.startNewGame === 'function'){
        this.props.startNewGame();
      }else{
        return false;
      }
    }
   
    render(){     
      let baseClasses = 'baseColor inline questionMark';
      let secondaryClasses = 'baseColor inline ';
      let roundNumber;

      if(this.props.index === 0){
        roundNumber = null;
      }else if(this.props.index < 8){
        roundNumber = this.props.round;        
      }else{
        roundNumber = 8;        
      }
      
      return <div  className='roundBlock ' >                
                <div style={{display: this.props.displayQuestionMarkDots}}>
                  <div className={baseClasses+" gray"} >{this.props.textInRandomDots}</div>
                  <div className={baseClasses+" gray"} >{this.props.textInRandomDots}</div>
                  <div className={baseClasses+" gray"} >{this.props.textInRandomDots}</div>
                  <div className={baseClasses+" gray"} >{this.props.textInRandomDots}</div>
                </div>  
                <div style={{display: this.props.win}}>
                  <div className={secondaryClasses + this.props.color1} ></div>
                  <div className={secondaryClasses + this.props.color2} ></div>
                  <div className={secondaryClasses + this.props.color3} ></div>
                  <div className={secondaryClasses + this.props.color4} ></div>
                </div>  
                <button className='checkButton startNewGame' >Round <h2>{roundNumber}</h2></button>
                <button className="randomizeButtom" onClick={this.startNewGame}>Start New Game</button>              
             </div>
    }
  } 

  class AnswerBlock extends React.Component{
    render(){
      return <div style={{width: "1000px"}}>                
                {this.props.buttons}                 
             </div>
    }
  }

  class Possibilities extends React.Component{
    getColor = (e) =>{
      e.stopPropagation();
      if(typeof this.props.getColor === 'function'){
        this.props.getColor(e);
      }else{
        return false;
      }
    }

    render(){
      let baseClasses = "answerDots inline";
      return <ul className={this.props.displayDots} >
              <li className={baseClasses + " darkblue"} onClick={this.getColor} data-id={this.props.id} data-number={0} data-color = "darkblue" ></li>
              <li className={baseClasses + " darkred"} onClick={this.getColor} data-id={this.props.id} data-number={1} data-color = "darkred" ></li>
              <li className={baseClasses + " darkorange"} onClick={this.getColor} data-id={this.props.id} data-number={2} data-color = "darkorange" ></li>
              <li className={baseClasses + " green"} onClick={this.getColor} data-id={this.props.id} data-number={3} data-color = "green" ></li>
              <li className={baseClasses + " yellow"} onClick={this.getColor} data-id={this.props.id} data-number={4} data-color = "yellow" ></li>
              <li className={baseClasses + " purple"} onClick={this.getColor} data-id={this.props.id} data-number={5} data-color = "purple" ></li>
             </ul>
    }
  }

  class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        endText: "",
        round: 1,  
        displayQuestionMarkDots: "inline-block",             
        index: 0,
        textInRandomDots: '',
        number: -1,
        initial1: -1,
        initial2: -1,
        initial3: -1,
        initial4: -1,
        win: "none",
        buttons: [
          { round: 1, matched: [], display: "none", disabled: false,  fields: [
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"}
            ]
          },
          { round: 2, matched: [], display: "none", disabled: false, fields: [
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"}
            ]
          },
          { round: 3, matched: [], display: "none", disabled: false, fields: [
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"}
            ]
          },
          { round: 4, matched: [], display: "none", disabled: false, fields: [
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"}
            ]
          },
          { round: 5, matched: [], display: "none", disabled: false, fields: [
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"}
            ]
          },
          { round: 6, matched: [], display: "none", disabled: false, fields: [
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"}
            ]
          },
          { round: 7, matched: [], display: "none", disabled: false, fields: [
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"}
            ]
          },
          { round: 8, matched: [], display: "none", disabled: false, fields: [
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"}
            ]
          },
          { round: 9, matched: [], display: "none", disabled: false, fields: [
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"},
            {color: "gray", showSubSelect: "none"}
            ]
          }
        ]
      }
  }

  displayDots = (e) =>{
    
    console.log("doc");
    let index = e.target.dataset.id;
    let number = e.target.dataset.number;
    let newButtons = this.state.buttons;
 
    if (!newButtons[index].disabled){

      newButtons[index].fields[0].showSubSelect = "none";
      newButtons[index].fields[1].showSubSelect = "none";
      newButtons[index].fields[2].showSubSelect = "none";
      newButtons[index].fields[3].showSubSelect = "none";
      newButtons[index].fields[number].showSubSelect = "block";
      this.setState({
        buttons: newButtons
      })

    }
  }

    

    getColor = (e) => {
      
      let color = e.target.dataset.color;
      let number = e.target.parentElement.parentElement.dataset.number;     
      let index = e.target.dataset.id;        
      let newButtons = this.state.buttons;     

      newButtons[index].fields[number].color = color;
      newButtons[index].fields[number].showSubSelect = "none";     
      this.setState({      
        number: parseInt(number),        
        buttons: newButtons,
       
      });
    }

    generateColor = () =>{   
      let displayFirstAnswerBlock = this.state.buttons;
      displayFirstAnswerBlock[this.state.index].display = "block";
      this.setState({        
        textInRandomDots: "?",
        initial1: Math.round(Math.random()*5),
        initial2: Math.round(Math.random()*5),
        initial3: Math.round(Math.random()*5),
        initial4: Math.round(Math.random()*5),
        buttons: displayFirstAnswerBlock
      })
      
    }

    startNewGame = () =>{
      this.setState({
        endText: "",  
        displayQuestionMarkDots: "inline-block",      
        index: 0,
        round: 1,
        textInRandomDots: '',
        number: -1,
        initial1: -1,
        initial2: -1,
        initial3: -1,
        initial4: -1,
        win: "none",
        buttons: [
          { round: 1, matched: [], display: "none", disabled: false, fields: [
            {color: "gray"},
            {color: "gray"},
            {color: "gray"},
            {color: "gray"}
            ]
          },
          { round: 2, matched: [], display: "none", disabled: false, fields: [
            {color: "gray"},
            {color: "gray"},
            {color: "gray"},
            {color: "gray"}
            ]
          },
          { round: 3, matched: [], display: "none", disabled: false, fields: [
            {color: "gray"},
            {color: "gray"},
            {color: "gray"},
            {color: "gray"}
            ]
          },
          { round: 4, matched: [], display: "none", disabled: false, fields: [
            {color: "gray"},
            {color: "gray"},
            {color: "gray"},
            {color: "gray"}
            ]
          },
          { round: 5, matched: [], display: "none", disabled: false, fields: [
            {color: "gray"},
            {color: "gray"},
            {color: "gray"},
            {color: "gray"}
            ]
          },
          { round: 6, matched: [], display: "none", disabled: false, fields: [
            {color: "gray"},
            {color: "gray"},
            {color: "gray"},
            {color: "gray"}
            ]
          },
          { round: 7, matched: [], display: "none", disabled: false, fields: [
            {color: "gray"},
            {color: "gray"},
            {color: "gray"},
            {color: "gray"}
            ]
          },
          { round: 8, matched: [], display: "none", disabled: false, fields: [
            {color: "gray"},
            {color: "gray"},
            {color: "gray"},
            {color: "gray"}
            ]
          },
          { round: 9, matched: [], display: "none", disabled: false, fields: [
            {color: "gray"},
            {color: "gray"},
            {color: "gray"},
            {color: "gray"}
            ]
          }
        ]
      },()=>{
        this.generateColor();
      })
    }

    check = (e) =>{
      
      let index = parseInt(e.target.dataset.id);
      const colors = ['darkred', 'darkorange', 'green', 'darkblue', 'yellow', 'purple'];

      const randomArr = [
        colors[this.state.initial1], 
        colors[this.state.initial2],
        colors[this.state.initial3],
        colors[this.state.initial4],
      ];
      
      const guessArr = [this.state.buttons[index].fields[0].color,
        this.state.buttons[index].fields[1].color,
        this.state.buttons[index].fields[2].color,
        this.state.buttons[index].fields[3].color,      
      ];
           
      let sameArr=[];
      let semiSameArr = [];
      let matched = this.state.buttons;
      let displayNextAnswerBlock = this.state.buttons;
      let endText;
      let win;   
      let displayQuestionMarkDots;       
      let disabledCheckButton = this.state.buttons;
     
      disabledCheckButton[e.target.dataset.id].fields[0].showSubSelect = "none";
      disabledCheckButton[e.target.dataset.id].fields[1].showSubSelect = "none";
      disabledCheckButton[e.target.dataset.id].fields[2].showSubSelect = "none";
      disabledCheckButton[e.target.dataset.id].fields[3].showSubSelect = "none";

      disabledCheckButton[parseInt(e.target.dataset.id)].disabled = !this.state.buttons[this.state.index].disabled;

      
      
            
      
      let newRandomArr = randomArr.filter((elem, i) => {
            return randomArr[i] !== guessArr[i];
          });
      let newGuessArr = guessArr.filter((elem, i) => {
          return guessArr[i] !== randomArr[i];
        });      

      guessArr.map((e, i) => {
        if(randomArr[i] === guessArr[i])
          sameArr.push(randomArr[i]);          
      })

      newGuessArr.forEach((e, i) => {
        if(newRandomArr.indexOf(e) !== -1)
          semiSameArr.push(e);          
      })

      sameArr.map((e)=>{
        matched[index].matched.push("black");     
        this.setState({
          buttons: matched
        })
      })

      semiSameArr.map((e)=>{
        matched[index].matched.push("white");     
        this.setState({
          buttons: matched
        })
      })     

   
      if(this.state.buttons[e.target.dataset.id].matched[0] === "black" && this.state.buttons[e.target.dataset.id].matched[1] === "black" && this.state.buttons[e.target.dataset.id].matched[2] === "black" && this.state.buttons[e.target.dataset.id].matched[3] === "black"){
        endText = `Who's the BEST? U the BEST!!!`
        win = "block";
        displayQuestionMarkDots = "none";
        displayNextAnswerBlock[parseInt(e.target.dataset.id)+1].display = "none";
      }else if((this.state.buttons[e.target.dataset.id].matched[0] !== "black" || this.state.buttons[e.target.dataset.id].matched[1] !== "black" || this.state.buttons[e.target.dataset.id].matched[2] !== "black" || this.state.buttons[e.target.dataset.id].matched[3] !== "black") && this.state.index === this.state.buttons.length-2){  
        endText = "Sry.... U loose :("
        win = "block";
        displayQuestionMarkDots = "none";
        displayNextAnswerBlock[parseInt(e.target.dataset.id)+1].display = "none";      
      }else{
        displayQuestionMarkDots = "inline-block";
        win = "none";
        displayNextAnswerBlock[parseInt(e.target.dataset.id)+1].display = "block";
      }
    
            
      this.setState({
        round: this.state.round+1,
        endText: endText,
        win: win,
        displayQuestionMarkDots: displayQuestionMarkDots,
        index: parseInt(e.target.dataset.id)+1,
        disabled: disabledCheckButton,
        buttons: displayNextAnswerBlock
      });

    }

    render(){
      const color = ['darkred', 'darkorange', 'green', 'darkblue', 'yellow', 'purple'];
     
      
      const color1 = color[this.state.initial1];
      const color2 = color[this.state.initial2];
      const color3 = color[this.state.initial3];
      const color4 = color[this.state.initial4];
      

      let buttons = this.state.buttons.map( (btn, i) => {
        let baseClasses = "baseColor inline ";
        if(i < this.state.buttons.length-1){
        return <div key={i} className='roundBlock' style={{display: this.state.buttons[i].display}}> 
                <ul className="inline">
                  <li key={0} onClick={this.displayDots} className={baseClasses+btn.fields[0].color} data-id={i} data-number={0}>
                    <Possibilities getColor={this.getColor} id={i} displayDots={this.state.buttons[i].fields[0].showSubSelect} />                    
                  </li>
                  <li key={1} onClick={this.displayDots} className={baseClasses+btn.fields[1].color} data-id={i} data-number={1}>
                    <Possibilities getColor={this.getColor} id={i} displayDots={this.state.buttons[i].fields[1].showSubSelect} /> 
                  </li>
                  <li key={2} onClick={this.displayDots} className={baseClasses+btn.fields[2].color} data-id={i} data-number={2}>
                    <Possibilities getColor={this.getColor} id={i} displayDots={this.state.buttons[i].fields[2].showSubSelect} /> 
                  </li>
                  <li key={3} onClick={this.displayDots} className={baseClasses+btn.fields[3].color} data-id={i} data-number={3}>
                    <Possibilities getColor={this.getColor} id={i} displayDots={this.state.buttons[i].fields[3].showSubSelect} /> 
                  </li>                    
                </ul>
                <div className="inline tipBlock" >                 
                    <div className="answer" style={{ backgroundColor: this.state.buttons[i].matched[0] }}></div>
                    <div className="answer" style={{ backgroundColor: this.state.buttons[i].matched[1] }}></div>                  
                    <div className="answer" style={{ backgroundColor: this.state.buttons[i].matched[2] }}></div>
                    <div className="answer" style={{ backgroundColor: this.state.buttons[i].matched[3] }}></div>                       
                </div>
                <button onClick={this.check} className="inline checkButton" data-id={i} disabled={this.state.buttons[i].disabled}>Check</button>               
              </div>
        }else{
          return <div key={i} style={{display: this.state.win, display: 'none'}} >FIKU, MIKU!!!</div>
        }
      } );

      return <div className='main'>
                <HeadTitle />
                <RandomDots generateColor={this.generateColor} color1={color1} color2={color2} color3={color3} color4={color4}
                            win={this.state.win} displayQuestionMarkDots={this.state.displayQuestionMarkDots}
                            textInRandomDots={this.state.textInRandomDots} startNewGame={this.startNewGame}
                            round={this.state.round} index={this.state.index}
                />
                <AnswerBlock className='inline' buttons={buttons} matched={this.state.buttons[this.state.index].matched} />
                <WinAlert display={this.state.win} endText={this.state.endText} />                
              </div>
    }
  }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

