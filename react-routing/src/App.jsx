import { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Games from './components/Games';
import NotFound from './components/NotFound';
import Game from './components/Game';

// A simple Navbar component with active link styling
function Navbar() {
  const location = useLocation();
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/games', label: 'Games' }
  ];

  return (
    <nav>
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Layout component to wrap common elements (Header, Navbar, Footer, etc.)
function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <h1>This is my React Page</h1>
      </header>
      <Navbar />
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 My React App</p>
      </footer>
    </div>
  );
}

// App component with routes setup
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games">
          <Route index element={<Games />} />
          <Route path=":gameid" element={<Game />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
