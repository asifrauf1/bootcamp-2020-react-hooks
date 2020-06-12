import React from 'react';


function App() {
  let [isLit,setLit] = React.useState(true);
  let [roomTemp, setTemp] = React.useState(22)
  let brightness = isLit?"lit":"dark";
  return (   
    <div className={`room ${brightness}`}>
    <h1>Room lights example with React state</h1>
         The room is <strong>{isLit?"Lit":"dark"}</strong>
        <br/>
        <button onClick = {() => setLit(!isLit)}>Flip Switch</button>
        <hr/>
        <button onClick = {() => setLit(true)}>Lights On</button>
        <button onClick={() => setLit(false)}>Lights Off</button>
        <hr/>
        <button onClick={() => setTemp(roomTemp+1)}>+</button>
        <span> The room temperature is <strong>&lt;&lt; {roomTemp} &gt;&gt;</strong> </span>
        <button onClick ={() => setTemp(roomTemp - 1)}>-</button>
        <hr/>
        <img height={300} alt="Lit/Dark Room" src={isLit?"https://thumbs.dreamstime.com/b/modern-minimalist-sitting-room-interior-down-lights-grey-wall-above-upholstered-grey-sofa-ornamental-vases-40801051.jpghttps://thumbs.dreamstime.com/b/modern-minimalist-sitting-room-interior-down-lights-grey-wall-above-upholstered-grey-sofa-ornamental-vases-40801051.jpg":"data:image/jpeg;base64,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"}></img>
        
    </div>    
  );
}

export default App;
