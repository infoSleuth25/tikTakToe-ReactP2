import React from 'react'
import { useState } from 'react'




const GameBoard = ({onSelectSquare, board}) => {
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    // function clickHandler(rowIdx,colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIdx][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });
    //     onSelectSquare();
    // }

    
  return (
    <ol id="game-board">
        {board.map((row, rowIdx)=> <li key={rowIdx}>
            <ol>
                {row.map((playerSymbol,colIndex)=>
                    <li key={colIndex}>
                        <button onClick ={() =>onSelectSquare(rowIdx,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li>
                )}
            </ol>
        </li>)}
    </ol>
  )
}
 
export default GameBoard