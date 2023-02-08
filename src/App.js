import React from 'react';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';

function App() {
  return (
    <div className='outer-box'>
      <div className='inner-box'>
        <Info />
        <About />
        <Interest />
      </div>
    </div>
  );
}

export default App;
