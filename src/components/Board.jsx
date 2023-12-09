import React, { useState } from 'react'
import Square from './Square'

export default function Board() {

    const [turn, setTurn] = useState(true); // true represents X, false represents O
    const [count, setCount] = useState(0);
    const [finished, setFinished] = useState(false);
    const [stats, setStats] = useState("The incoming move is X")
    const [board, setBoard] = useState([
        Array(3).fill(null),
        Array(3).fill(null),
        Array(3).fill(null),
    ]);

    // RETURNS 0 WHEN ALL SQUARES ALL FILLED AND IT IS A TIE
    // RETURNS -1 IF THE GAME CONTINUES AND THERE IS NO WINNER YET
    // RETURNS "X" OR "O" IF THERE IS A WINNING CONDITION
    function checkWinner() {
        if (
            board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][0]
        )
            return board[0][0];
        if (
            board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][0]
        )
            return board[1][0];
        if (
            board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][0]
        )
            return board[2][0];

        if (
            board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[0][0]
        )
            return board[0][0];
        if (
            board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[0][1]
        )
            return board[0][1];
        if (
            board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[0][2]
        )
            return board[0][2];

        if (
            board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0]
        )
            return board[0][0];
        if (
            board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2]
        )
            return board[0][2];

        if (count === 8) return 0;

        return -1;
    }

    // RUNS WHEN A SQUARE IS CLICKED
    const handleSquareClick = (row, col) => {

        console.log(board)

        if (board[row][col] === null && !finished) {// RUNS WHEN THE GAME STILL CONTINUES AND THE SQUARE IS EMPTY

            const newBoard = [...board];
            newBoard[row][col] = turn ? 'X' : 'O';
            setBoard(newBoard);
            setTurn(!turn);
            setCount(count + 1)
            turn ? setStats("The next move is O") : setStats("The next move is X")
            const winner = checkWinner()
            if (winner === 'X' || winner === 'O') { setStats(`Player ${winner} has won!`); setFinished(true); return; }
            if (winner === 0) { setStats("The game has ended as a tie."); setFinished(true); return; }

        }

    }

    return (
        <div className="board-container">
            <div className="status">{stats}</div>
            <div className="board">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className='row'>
                        {row.map((value, colIndex) => (
                            <Square
                                key={colIndex}
                                value={value}
                                onClick={() => handleSquareClick(rowIndex, colIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
            <a href='/' className='restart'>RESTART</a>
        </div>
    )
}
