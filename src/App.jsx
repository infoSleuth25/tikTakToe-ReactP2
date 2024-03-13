import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { useState } from "react"
import { winningCombinations } from "./winningCombinations";
import GameOver from "./components/GameOver";

function deriveActivePlayer(gameTurns){
    let currentPlayer = 'X';
    if(gameTurns.length > 0 &&  gameTurns[0].player === 'X'){
      currentPlayer = 'O';
    } 
    return currentPlayer;
}


const initialGameBoard = [
  [null, null , null],
  [null , null, null],
  [null , null ,null]
]



function App() {
  const [player, setPlayer] = useState({
    'X' : 'Player 1',
    'O' : 'player 2'
  })
  const[gameTurn, setGameTurn] = useState([]);
  // const[activePlayer, setActivePlayer] = useState('X');
  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = [...initialGameBoard.map((innerArray)=>[...innerArray])];
    for(const turn of gameTurn){
        const {square,player} = turn;
        const {row,col} = square;
        gameBoard[row][col] = player;
    }


  let winner;
  for(const combination of winningCombinations){
    const firstSqaureSymbol  = gameBoard[combination[0].row][combination[0].column] ;
    const secondSqaureSymbol =  gameBoard[combination[1].row][combination[1].column] ;
    const thirdSqaureSymbol  = gameBoard[combination[2].row][combination[2].column] ;
    if(firstSqaureSymbol && firstSqaureSymbol===secondSqaureSymbol && firstSqaureSymbol===thirdSqaureSymbol){
      winner = player[firstSqaureSymbol];
    }
  }

  const hasDraw = (gameTurn.length === 9 && !winner);

  function handleSelectSquare(rowIndex,colIndex){
    // setActivePlayer((currActivePlayer)=> currActivePlayer === 'X' ? 'O' : 'X');
    setGameTurn(prevTurn => {
      // let currentPlayer = 'X';
      // if(prevTurn.length > 0 &&  prevTurn[0].player === 'X'){
      //   currentPlayer = 'O';
      // } 
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurn = [ 
        {square:{row:rowIndex , col:colIndex}, player : currentPlayer } ,
        ...prevTurn];

      return updatedTurn;
    });
  }

  function handleRestart(){
      setGameTurn([]);
  }

  function handlePlayerName(symbol, newName){
    setPlayer(prevPlayer =>{
      return {
        ...prevPlayer,
        [symbol] : newName
      }
    })
  }

    return (
      <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player isActive={activePlayer ==='X'} initialName="Player1" symbol="X" onChangeName={handlePlayerName} />
        <Player isActive={activePlayer === 'O'} initialName="Player2" symbol="O" onChangeName={handlePlayerName}/>
      </ol>
      {(winner || hasDraw) && <GameOver winner = {winner} onRestart={handleRestart} />}
      <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare}  />
      </div>
      <Log turns={gameTurn} />
      </main>
  )
}

export default App
 