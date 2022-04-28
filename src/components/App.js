import React ,{useState} from 'react'
import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {
  const [Data,setData]=useState("hello world");
  const [Padding,setPadding]=useState(5);
  const [FontSize,setFontSize]=useState(10);


  function getData(val){
      setData(val.target.value);
  }
  return (
    <div id="main">
      <div>
        <span>Content</span>
        <input id='contentInput' type="text" value={Data} onChange={getData}/><br />
        <span>Padding</span>
        <input id='paddingInput' type="number" value={Padding} onChange={(val)=>val.target.value<5?Padding:setPadding(val.target.value)} /><br />
        <span>Font Size</span>
        <input id='fontSizeInput' type="number" value={FontSize} onChange={(val)=>val.target.value<10?FontSize:setFontSize(val.target.value)} />
      </div>
 
      <Preview content={Data} padding={Padding+'px'} fontSize={FontSize+'px'}/>
 
    </div>
  )
}


export default App;
