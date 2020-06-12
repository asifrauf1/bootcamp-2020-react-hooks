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
        <img height={300} alt="Room Image" src={isLit?"https://thumbs.dreamstime.com/b/modern-minimalist-sitting-room-interior-down-lights-grey-wall-above-upholstered-grey-sofa-ornamental-vases-40801051.jpghttps://thumbs.dreamstime.com/b/modern-minimalist-sitting-room-interior-down-lights-grey-wall-above-upholstered-grey-sofa-ornamental-vases-40801051.jpg":""}></img>
        
    </div>    
  );
}

export default App;
