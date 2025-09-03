import { GlobalStyle } from './styles/global';
import { Routes, Route } from 'react-router-dom';
import PokemonCard from './pages/pokemonCard';
import Home from './pages/Home';
import ThemeProvider from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card/:name' element={<PokemonCard />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
