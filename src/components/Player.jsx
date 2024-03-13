import React from 'react'
import { useState } from 'react'

const Player = ({initialName,symbol}) => {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function clickHandler(){
        setIsEditing((editing)=> !editing);
    }
    function handleChange(event){
        console.log(event);
        setPlayerName(event.target.value);
    }
    let editableplayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = "Edit";
    if(isEditing){
        editableplayerName = <input type='text' required value={playerName} onChange={handleChange}/>
        btnCaption='Save';
    }
  return (
    <li>
          <span className="player">
            {editableplayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={clickHandler}>{btnCaption}</button>
    </li>
  )
}

export default Player