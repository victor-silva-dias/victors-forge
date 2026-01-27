import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Container, Flex } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Home from './pages/Home';
import About from './pages/About';
import Methodology from './pages/Methodology';

// Temporary Simple Header
const Header = () => (
  <header style={{ padding: '2rem 0', borderBottom: `1px solid ${theme.colors.border}` }}>
    <Container>
      <Flex justify="space-between" align="center">
        <Link to="/" style={{ fontWeight: 700, fontSize: '1.2rem', fontFamily: theme.fonts.heading }}>
          VICTOR'S <span style={{ color: theme.colors.accent }}>FORGE</span>
        </Link>
        <Flex gap="2rem">
            <Link to="/about">Sobre</Link>
            <Link to="/methodology">Metodologia</Link>
            <a href="https://github.com/victor-silva-dias" target="_blank" rel="noopener noreferrer" style={{ color: theme.colors.text.tertiary }}>GitHub</a>
        </Flex>
      </Flex>
    </Container>
  </header>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/methodology" element={<Methodology />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
