import SimpleCase from './components/SimpleCase/fatherComponent'
import ImpureComponent from './components/ImpureComponent/fatherComponent'
import React from 'react'

function App() {
  return (
    <div className={'box'}>
      <SimpleCase />
      <ImpureComponent />
    </div>
  )
}

export default App
