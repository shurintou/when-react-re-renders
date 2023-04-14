import React from 'react'
const ChildComponent = () => {
    console.log('ChildComponent function was called.')

    return (
        <div className={'child'} style={{ marginTop: '35px', marginLeft: '75px' }}>
            <p>child</p>
            <p>{new Date().toUTCString().split(',')[1]}</p>
        </div>
    )
}

export default React.memo(ChildComponent)