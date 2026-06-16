import React from 'react';

export default function About() {
  return (
    <div className="tarjeta-adaptable" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <h2 className="titulo-primario" style={{ marginBottom: '20px', fontSize: '28px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
        Acerca de DevProfile
      </h2>
      
      <p style={{ lineHeight: '1.8', fontSize: '16px', textAlign: 'justify', marginBottom: '20px' }}>
        <strong>DevProfile</strong> es una aplicación web interactiva diseñada para simplificar la creación de currículums profesionales.
         Permite a los usuarios capturar su información personal, habilidades, experiencia y proyectos en tiempo real, generando una
          previsualización dinámica que finalmente puede ser exportada a un archivo PDF con formato de alta calidad.
      </p>
      
      <p style={{ lineHeight: '1.8', fontSize: '16px', textAlign: 'justify', marginBottom: '20px' }}>
        Este proyecto fue desarrollado como entrega final para la materia de Tecnologías Web empleando React,
         y destaca por su uso de almacenamiento local para evitar la pérdida de datos, manejo de estados globales,
          modo oscuro y gráficas dinámicas.
      </p>
      
      <div className="caja-equipo" style={{ padding: '20px', borderRadius: '10px', borderLeft: '4px solid #6366f1' }}>
        <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>Equipo de Desarrollo:</h3>
        <p style={{ margin: 0, fontSize: '15px', fontWeight: '600' }}>
          Miguel Sebastian Valdivia Flores, Ailton Hernandez Hernandez y Diego Alonso Vazquez Reyes.
        </p>
      </div>
    </div>
  );
}