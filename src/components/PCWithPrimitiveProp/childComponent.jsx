import React from 'react'
const ChildComponent = (props) => {
    console.log('ChildComponent function was called.')

    return (
        <div className={'child'} style={{ marginTop: '5px', marginLeft: '75px' }}>
            <p>child</p>
            <p>father's num {props.fatherNum}</p>
            <p>{new Date().toUTCString().split(',')[1]}</p>
        </div>
    )
}

export default React.memo(ChildComponent)