import React, { useState } from 'react'
import ChildComponent from './childComponent'

const FatherComponent = () => {
    console.log('FatherComponent function was called.')

    const [num, setNum] = useState(0)

    return (
        <div className={'father'}>
            <p>PureComponent</p>
            <p>father's number is {num}</p>
            <button onClick={() => setNum(num + 1)}>click to add one</button>
            <ChildComponent />
        </div>
    )
}

export default FatherComponent