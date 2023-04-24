import React, { useState } from 'react'
import ChildComponent from './childComponent'

const FatherComponent = () => {
    console.log('FatherComponent function was called.')

    const [num, setNum] = useState(0)
    const [anotherNum, setAnotherNum] = useState(0)

    return (
        <div className={'father'}>
            <p>PCWithPrimitiveProp</p>
            <p>father's number is {num}, anotherNum is {anotherNum}</p>
            <button onClick={() => setNum(num + 1)}>click to add num</button>
            <button onClick={() => setAnotherNum(anotherNum + 1)}>click to add anotherNum</button>
            <ChildComponent fatherNum={num} />
        </div>
    )
}

export default FatherComponent