// import { useState } from 'react'
import './App.css'


function App() {
  return (
    <>
      <h1>Welcome to FinDash</h1>
      <div id="lottie-animation" className="animation_container">
        <dotlottie-player 
          src="https://lottie.host/f60ed0b5-5927-41bf-bd92-160d9af3ee0e/difhaTwSYM.json" 
          background="transparent" 
          speed="1" 
          style={{ width: "300px", height: "300px" }} 
          loop 
          autoplay>
        </dotlottie-player>
      </div>
    </>
  );
}

export default App;
