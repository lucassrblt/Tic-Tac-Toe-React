import Block from "./blocks"

const Cell = ({ id, cell, setCells, go, setGo, cells, winningMessage }) => {

    const handleClick = (e) => {
        const player1 = document.querySelector('.player-1')
        const player2 = document.querySelector('.player-2')
        const taken = e.target.firstChild.classList.contains("circle") || e.target.firstChild.classList.contains("cross")
        if (!taken) {
            if (go === 'circle'){
                e.target.firstChild.classList.add("circle")
                handleCellChange("circle")
                setGo("cross")
                const player1 = document.querySelector('.player-1')
                player1.classList.add('opacity')
                player2.classList.remove('opacity')


            }
            if (go === 'cross'){
                e.target.firstChild.classList.add("cross")
                handleCellChange("cross")
                setGo("circle")
                const player2 = document.querySelector('.player-2')
                player2.classList.add('opacity')
                player1.classList.remove('opacity')


            }
        }
    }

    const handleCellChange = (className) =>{
        const nextCells = cells.map((cell, index) => {
            if (index === id){
                return className
            } else {
                return cell
            }
        })
        setCells(nextCells)
    }

    return (
        <div className="square" id={id} onClick={!winningMessage && handleClick}>
            <div className={cell}></div>
        </div>
    )
}

export default Cell