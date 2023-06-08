import React, { useState } from 'react'
import ChildComponent from './childComponent'

const FatherComponent = () => {
    console.log('FatherComponent function was called.')

    const [father, setFather] = useState({ num: 0, anotherNum: 0 })

    return (
        <div className={'father'}>
            <p>ReactMemoWithArePropsEqual</p>
            <p>father's number is {father.num}, anotherNum is {father.anotherNum}</p>
            <button onClick={() => setFather({ num: father.num + 1, anotherNum: father.anotherNum })}>click to add num</button>
            <button onClick={() => setFather({ num: father.num, anotherNum: father.anotherNum + 1 })}>click to add anotherNum</button>
            <ChildComponent father={father} />
        </div>
    )
}

export default FatherComponent