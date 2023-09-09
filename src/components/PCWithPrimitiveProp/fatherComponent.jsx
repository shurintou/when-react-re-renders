import React, { useState } from 'react'
import ChildComponent from './childComponent'

const FatherComponent = () => {
    console.log('FatherComponent function was called.')

    const [num, setNum] = useState(0)
    const [another, setanother] = useState(0)

    return (
        <div className={'father'}>
            <p>PCWithPrimitiveProp</p>
            <p>father's number is {num}, another is {another}</p>
            <button onClick={() => setNum(num + 1)}>click to add num</button>
            <button onClick={() => setanother(another + 1)}>click to add another</button>
            <ChildComponent fatherNum={num} />
        </div>
    )
}

export default FatherComponent