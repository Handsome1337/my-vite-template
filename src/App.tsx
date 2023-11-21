import { useState } from 'react';
import type { ReactElement } from 'react';
import reactLogo from 'assets/react.svg?url';
import './App.css';

function App(): ReactElement {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="logo-wrapper">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the React logo to learn more</p>
    </>
  );
}

export default App;
