
import { Main1 } from './components/Main1'
import { Main2 } from './components/Main2'
import { Main3 } from './components/Main3'
import { Main4 } from './components/Main4'
import { Main5 } from './components/Main5'
import './scss/App.css'

import { useEffect, useState } from 'react'
import { asset } from './Model/model'
import { assets } from './Model/model'



function App() {
  const [count,setCount] = useState(0);
  const [mainAsset,setMainAssets] = useState<asset>({
    id:0,
    title:"Manufactured with the best materials",
    content:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  })

  useEffect(()=>{
  
    let a: asset = assets.find(as => as.id === count) || assets[1];
    
    setMainAssets(a);

  },[count])

  return (
    <div className="App" >
        <Main1 count={count}/>
        <Main2 count={count} setCount={setCount} mainAsset={mainAsset}/>
        <Main3/>
        <Main4/>
        <Main5/>
    </div>
  )
}

export default App
