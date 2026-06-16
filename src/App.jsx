import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { CVProvider } from './context/CVContext';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Preview from './pages/Preview';
import Dashboard from './pages/Dashboard';
import ThemeToggle from './components/ThemeToggle';
import About from './pages/About';
import './styles/dark-mode.css'; // Importamos los estilos globales

function App() {
  return (
    <CVProvider>
      <BrowserRouter>
        
        {/* Barra de navegación sencilla para moverte entre pantallas */}
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/editor">Editor</Link>
          <Link to="/preview">Previsualización</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">Acerca de</Link>
        </nav>

        <ThemeToggle /> {/* Botón flotante del modo oscuro */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </CVProvider>
  );
}

export default App;