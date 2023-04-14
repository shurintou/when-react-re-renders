import SimpleCase from './components/SimpleCase/fatherComponent'
import ImpureComponent from './components/ImpureComponent/fatherComponent'
import PureComponent from './components/PureComponent/fatherComponent'
import React from 'react'

function App() {
  return (
    <div className={'box'}>
      <SimpleCase />
      <ImpureComponent />
      <PureComponent />
    </div>
  )
}

export default App
