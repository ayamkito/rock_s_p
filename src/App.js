import React, {Component} from 'react';
import PlayerCard from "./PlayerCard";

class Game extends Component{
  constructor(){
    super();
    this.signs =["rock","scissors","paper"]
    this.state = {
      playerOne: "rock",
      playerTwo: "scissors"
    }
  }
  playGame=()=>{
    this.setState({
      playerOne: this.signs[Math.floor(Math.random()*3)],
      playerTwo: this.signs[Math.floor(Math.random()*3)]
    })
  }
  manualPaper =()=>{
    this.setState({
      playerOne: "paper",
      playerTwo: this.signs[Math.floor(Math.random()*3)]
    })
  }
  manualScissors=()=>{
    this.setState({
      playerOne:"scissors",
      playerTwo: this.signs[Math.floor(Math.random()*3)]
    })
  }
  manualRock=()=>{
    this.setState({
      playerOne:"rock",
      playerTwo: this.signs[Math.floor(Math.random()*3)]
    })
  }
  decideWinner = ()=>{
    const playerOne = this.state.playerOne
    const playerTwo = this.state.playerTwo
    if(playerOne===playerTwo){
      return "it's a tie!"
    }else if((playerOne==="rock"&& playerTwo==="scissors")||(playerOne === "paper"&&playerTwo==="rock")||(playerOne==="scissors"&&playerTwo==="paper")){
      return "Jesse Won!"
    }else{
      return "Kirk Won!"
    }
  }




  render(){
    return(
      <div className="style" >
        <div className = "cards">
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/> 
        </div>
        <div className="winner">{this.decideWinner()}</div>
        <button type="button" onClick={this.playGame}>Random Play</button>
        <div className="choose">
          <button type="button" onClick={this.manualPaper}>Player One: Paper</button>
          <button type="button" onClick={this.manualRock}>Player One: Rock</button>
          <button type="button" onClick={this.manualScissors}>Player One: Scissors</button>
        </div>
      </div>
    )
  }
}
export default Game;