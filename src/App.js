import { useState, useEffect } from 'react'
import Cell from "./components/cell"
import Block from "./components/blocks"


const App = () => {
    let win = "false"
    const [cells, setCells] = useState(["","","","","","","","",""])
    const [go, setGo] = useState("circle")
    const [winningMessage, setWinningMessage] = useState(null)

    const message = 'It is now ' + go + 's go.'

    console.log(cells)

    const checkScore = () => {
      const player2 = document.querySelector(".player-2")
      const winning = document.querySelector(".winning")
      const winningCombos = [
        [0,1,2], [3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
      ]

      winningCombos.forEach(array => {
        let circleWins = array.every(cell => cells[cell] === 'circle')
        if (circleWins){
          winning.style.display = "flex"
          player2.classList.add("opacity")
          
          setWinningMessage("Circles wins !")
          return
        }
      })
      winningCombos.forEach(array => {
        let crossWins = array.every(cell => cells[cell] === 'cross')
        if (crossWins){
          winning.style.display = "flex"
          setWinningMessage("Cross Wins !")
          return
      }})} 

    useEffect(() => {
      checkScore()
    }, [cells]) //dependencies if value changes fonction is running
  return (
      <div className="app">
        <Block />
        <div className="gameboard">
          {cells.map((cell, index) => 
            <Cell 
              key={index} 
              id={index} 
              cell={cell} 
              setCells={setCells}
              go={go}
              setGo={setGo}
              cells={cells}
              winningMessage={winningMessage}/>)}
        </div>
        <div className = "winning" style={{fontFamily: "Poppins", fontWeight: "500", fontSize : "100px", position: "absolute", color: "white", height: "100vh", width: "100vw", display : "none", alignItems : "center", justifyContent : "center", zIndex: "2", backdropFilter:"blur(10px)"}}>{winningMessage}</div>
      </div>
  )
}


export default App