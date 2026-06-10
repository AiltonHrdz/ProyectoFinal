import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CVProvider } from './context/CVContext';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Preview from './pages/Preview';
import Dashboard from './pages/Dashboard';
import ThemeToggle from './components/ThemeToggle';
import './styles/dark-mode.css'; // Importamos los estilos globales

function App() {
  return (
    <CVProvider>
      <BrowserRouter>
        
        {/* Barra de navegación sencilla para moverte entre pantallas */}
        <nav style={{ padding: '15px 20px', backgroundColor: '#6f42c1', display: 'flex', gap: '15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
          <Link to="/editor" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Editor</Link>
          <Link to="/preview" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Previsualización</Link>
          <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard</Link>
        </nav>

        <ThemeToggle /> {/* Botón flotante del modo oscuro */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </CVProvider>
  );
}

export default App;