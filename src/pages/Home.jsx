import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      
      {/* Sección Hero principal */}
      <h1 style={{ fontSize: '3.5rem', color: '#6f42c1', marginBottom: '20px', lineHeight: '1.2' }}>
        Generador de Perfiles para Desarrolladores
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '50px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 50px auto' }}>
        Crea, visualiza y exporta tu currículum vitae con un diseño limpio y moderno. 
        Destaca tus habilidades técnicas con gráficas interactivas y obtén un PDF estructurado, 
        listo para enviar a reclutadores.
      </p>

      {/* Tarjetas de características */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginBottom: '60px' }}>
        
        <div className="card-container" style={{ padding: '30px', borderRadius: '12px', textAlign: 'left' }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.5rem', color: '#2c3e50' }}>📝 Editor Interactivo</h3>
          <p style={{ margin: 0, color: '#64748b', lineHeight: '1.5' }}>
            Completa tus datos personales, proyectos y educación en tiempo real sin perder información gracias al autoguardado en tu navegador.
          </p>
        </div>
        
        <div className="card-container" style={{ padding: '30px', borderRadius: '12px', textAlign: 'left' }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.5rem', color: '#2c3e50' }}>📊 Dashboard Visual</h3>
          <p style={{ margin: 0, color: '#64748b', lineHeight: '1.5' }}>
            Tus habilidades técnicas se transforman automáticamente en una gráfica de barras dinámica, fácil de leer y muy profesional.
          </p>
        </div>

        <div className="card-container" style={{ padding: '30px', borderRadius: '12px', textAlign: 'left' }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '1.5rem', color: '#2c3e50' }}>📄 Exportación PDF</h3>
          <p style={{ margin: 0, color: '#64748b', lineHeight: '1.5' }}>
            Con un solo clic, descarga tu currículum en formato A4 con márgenes perfectos, adaptado para los estándares de la industria.
          </p>
        </div>

      </div>

      {/* Botón de Llamado a la Acción (CTA) */}
      <Link to="/editor">
        <button style={{ 
          padding: '18px 45px', 
          fontSize: '1.3rem', 
          backgroundColor: '#6f42c1', 
          color: 'white', 
          border: 'none', 
          borderRadius: '50px', 
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 10px 20px -5px rgba(111, 66, 193, 0.5)'
        }}>
          CREAR MI CV AHORA
        </button>
      </Link>

    </div>
  );
}