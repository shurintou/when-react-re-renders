import SimpleCase from './components/SimpleCase/fatherComponent'
import ImpureComponent from './components/ImpureComponent/fatherComponent'
import PureComponent from './components/PureComponent/fatherComponent'
import PCWithPrimitiveProp from './components/PCWithPrimitiveProp/fatherComponent'
import PCWithReferenceProp from './components/PCWithReferenceProp/fatherComponent'
import ReactMemoWithArePropsEqual from './components/ReactMemoWithArePropsEqual/fatherComponent'
import React from 'react'

function App() {
  return (
    <div className={'box'}>
      <SimpleCase />
      <ImpureComponent />
      <PureComponent />
      <PCWithPrimitiveProp />
      <PCWithReferenceProp />
      <ReactMemoWithArePropsEqual />
    </div>
  )
}

export default App
