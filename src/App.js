import React from 'react';
import Dashboard from './components/Dashboard'; // Assuming Dashboard is another component

function App() {
  const styles = {
    app: {
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // height: '100vh',
      // width: '100vw',
    }
  };

  return (
    <div style={styles.app} className='App flex-col'>
      <Dashboard />
    </div>
  );
}

export default App;



