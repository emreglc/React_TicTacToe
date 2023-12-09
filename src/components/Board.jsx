import React, { useState } from 'react'
import Square from './Square'

export default function Board() {

    const [values, setValues] = useState([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);

    return (
        <div className="board">
            <div className='row'>
                <Square value={values[0]} />
                <Square value={values[1]} />
                <Square value={values[2]} />
            </div>
            <div className='row'>
                <Square value={values[3]} />
                <Square value={values[4]} />
                <Square value={values[5]} />
            </div>
            <div className='row'>
                <Square value={values[6]} />
                <Square value={values[7]} />
                <Square value={values[8]} />
            </div>
        </div>
    )
}
