import Player from "./components/Player"

function App() {
    return (
      <main>
      <div id="game-container">
      <ol id="players">
        <Player name="Siddhesh" symbol="X" />
        <Player name="Sarvesh" symbol="O"/>
      </ol>
      GAME BOARD
      </div>
      Log
      </main>
  )
}

export default App
 