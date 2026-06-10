import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function ThemeToggle() {
  // Guardamos la preferencia en el navegador. Por defecto es falso (modo claro).
  const [isDark, setIsDark] = useLocalStorage('devprofile_theme', false);

  useEffect(() => {
    // Si isDark es true, le ponemos la clase al body entero
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '12px 20px',
        backgroundColor: isDark ? '#f1c40f' : '#2c3e50',
        color: isDark ? '#000' : '#fff',
        border: 'none',
        borderRadius: '30px',
        cursor: 'pointer',
        fontWeight: 'bold',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
        zIndex: 1000
      }}
    >
      {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
}