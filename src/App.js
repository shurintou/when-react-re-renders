import SimpleCase from './components/SimpleCase/fatherComponent'
import ImpureComponent from './components/ImpureComponent/fatherComponent'
import PureComponent from './components/PureComponent/fatherComponent'
import PCWithPrimitiveProp from './components/PCWithPrimitiveProp/fatherComponent'
import React from 'react'

function App() {
  return (
    <div className={'box'}>
      <SimpleCase />
      <ImpureComponent />
      <PureComponent />
      <PCWithPrimitiveProp />
    </div>
  )
}

export default App
