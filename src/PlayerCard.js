import React from "react"
const scissors = "https://i.imgur.com/pgjyhIZ.png";
const rock = "https:i.imgur.com/LghSkIw.png";
const paper = "https:i.imgur.com/2gsdqvR.png";
const PlayerCard = (props)=>{
    const sign=props.sign
    let image = ""

    if(sign==="rock"){
        image=paper;
    }else if(sign==="paper"){
        image = scissors;
    }else{
        image = rock
    }
    return (
        <div className="playerCard">
        <img src={image}/>
        </div>
    )
}
export default PlayerCard; 