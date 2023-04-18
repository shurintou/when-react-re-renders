import React from 'react'
const ChildComponent = (props) => {
    console.log('ChildComponent function was called.')

    return (
        <div className={'child'} style={{ marginTop: '35px', marginLeft: '75px' }}>
            <p>child</p>
            <p>father's num {props.fatherNum}</p>
        </div>
    )
}

export default React.memo(ChildComponent)