import { useContext } from 'react';
import { CVContext } from '../context/CVContext';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

export default function Dashboard() {
  const { cvData } = useContext(CVContext);
  const { skills } = cvData;

  // Transformar los niveles de texto a valores numéricos para renderizar la gráfica
  const data = skills.map(skill => {
    let valor = 1; // Básico por defecto
    if (skill.level === 'Intermedio') valor = 2;
    if (skill.level === 'Avanzado') valor = 3;
    
    return {
      nombre: skill.name,
      nivel: valor,
      nivelTexto: skill.level
    };
  });

  // Personalizar la caja de información al pasar el mouse (Tooltip)
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#333' }}>{payload[0].payload.nombre}</p>
          <p style={{ margin: 0, color: '#6f42c1' }}>Nivel: {payload[0].payload.nivelTexto}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Dashboard de Habilidades</h2>
      <p>Resumen visual de tus competencias técnicas registradas[cite: 122].</p>

      {skills.length === 0 ? (
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', textAlign: 'center', border: '1px solid #eaeaea' }}>
          <p>Aún no has agregado habilidades. Ve al Editor para registrarlas y ver tu gráfica.</p>
        </div>
      ) : (
        <div style={{ height: '400px', width: '100%', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #eaeaea', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="nombre" axisLine={false} tickLine={false} />
              <YAxis 
                ticks={[1, 2, 3]} 
                domain={[0, 3]} 
                axisLine={false} 
                tickLine={false}
                tickFormatter={(tick) => {
                  if (tick === 1) return 'Básico';
                  if (tick === 2) return 'Intermedio';
                  if (tick === 3) return 'Avanzado';
                  return '';
                }} 
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f4f4f4' }} />
              <Bar dataKey="nivel" fill="#6f42c1" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}