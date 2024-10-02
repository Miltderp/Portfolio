import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Technologies from './components/Technologies';

const App: React.FC = () =>
{
  return (
    <div className="App">
      <header className="App-header">
        <h1>Milton Joseph</h1>
        <p>Software Engineer</p>
      </header>
      <Profile />
      <Technologies />
      <footer>
        <p>insert footer here.</p>
      </footer>
    </div>
  );
}

export default App;
