import React, { useState, useEffect } from 'react'
import ChildComponent from './childComponent'

const FatherComponent = (props) => {
    const [num, setNum] = useState(0)

    return (
        <div>
            {num}
            <button onClick={() => setNum(num++)}></button>
            <ChildComponent />
        </div>
    )
}

export default FatherComponent