import React, { useState } from 'react'
import ChildComponent from './childComponent'

const FatherComponent = () => {
    console.log('FatherComponent function was called.')

    const [father, setFather] = useState({ num: 0, another: 0 })

    return (
        <div className={'father'}>
            <p>PCWithReferenceProp</p>
            <p>father's number is {father.num}, another is {father.another}</p>
            <button onClick={() => setFather({ num: father.num + 1, another: father.another })}>click to add num</button>
            <button onClick={() => setFather({ num: father.num, another: father.another + 1 })}>click to add another</button>
            <ChildComponent father={father} />
        </div>
    )
}

export default FatherComponent