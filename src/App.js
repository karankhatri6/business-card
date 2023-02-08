import React from 'react';
import Info from './components/Info';
import About from './components/About';

function App() {
  return (
    <div className='outer-box'>
      <div className='inner-box'>
        <Info />
        <About />
      </div>
    </div>
  );
}

export default App;
