import React from 'react';
import Booklist from './components/Booklist';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      {/* Navbar et Booklist sont attachés au peops de ThemeContextProvider */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
