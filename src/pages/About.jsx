import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--glass-white)', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h2 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '28px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
        Acerca de DevProfile
      </h2>
      
      {/* --- DESCRIPCIÓN BREVE DE LA APLICACIÓN --- */}
      <p style={{ lineHeight: '1.8', fontSize: '16px', textAlign: 'justify', marginBottom: '20px' }}>
        <strong>DevProfile</strong> es una aplicación web interactiva diseñada para simplificar la creación de currículums profesionales.
         Permite a los usuarios capturar su información personal, habilidades, experiencia y proyectos en tiempo real,
          generando una previsualización dinámica que finalmente puede ser exportada a un archivo PDF con formato de alta calidad.
      </p>
      
      <p style={{ lineHeight: '1.8', fontSize: '16px', textAlign: 'justify', marginBottom: '20px' }}>
        Este proyecto fue desarrollado como entrega final para la materia de Tecnologías Web empleando React, 
        y destaca por su uso de almacenamiento local para evitar la pérdida de datos, manejo de estados globales, 
        modo oscuro y gráficas dinámicas.
      </p>
      
      <div style={{ padding: '20px', backgroundColor: 'rgba(99, 102, 241, 0.05)', borderRadius: '10px', borderLeft: '4px solid var(--primary)' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#1e293b' }}>Equipo de Desarrollo:</h3>
        <p style={{ margin: 0, fontSize: '15px', color: '#64748b', fontWeight: '600' }}>
          Miguel Sebastian Valdivia Flores, Ailton Hernandez Hernandez y Diego Alonso Vazquez Reyes
        </p>
      </div>
    </div>
  );
}