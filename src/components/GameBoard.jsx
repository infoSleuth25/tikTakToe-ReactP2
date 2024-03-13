import React from 'react'
import { useState } from 'react'

const initialGameBoard = [
    [null, null , null],
    [null , null, null],
    [null , null ,null]
]


const GameBoard = (rowIndex, colIndex) => {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function clickHandler(rowIdx,colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIdx][colIndex] = 'X';
            return updatedBoard;
        });
    }
  return (
    <ol id="game-board">
        {gameBoard.map((row, rowIdx)=> <li key={rowIdx}>
            <ol>
                {row.map((playerSymbol,colIndex)=>
                    <li key={colIndex}>
                        <button onClick ={()=>clickHandler(rowIdx,colIndex)}>{playerSymbol}</button>
                    </li>
                )}
            </ol>
        </li>)}
    </ol>
  )
}
 
export default GameBoard