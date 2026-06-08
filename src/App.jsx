import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CVProvider } from './context/CVContext';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Preview from './pages/Preview';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <CVProvider>
      <BrowserRouter>
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