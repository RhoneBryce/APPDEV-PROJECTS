import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Games from './components/Games';
import Game from './components/Game';
import NotFound from './components/NotFound';
import './App.css'
function App() {
  return (
    <>
      <h1>This is my React Page</h1>

      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ display: 'inline', marginRight: '10px' }}>
            <Link to="/games">Games</Link>
          </li>
        </ul>
      </nav>

      {/* Routes for the application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games">
          <Route index element={<Games />} />
          <Route path=":gameid" element={<Game />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;