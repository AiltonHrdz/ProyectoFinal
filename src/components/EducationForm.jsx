import { useContext, useState } from 'react';
import { CVContext } from '../context/CVContext';

export default function EducationForm() {
  const { cvData, setCvData } = useContext(CVContext);
  const [error, setError] = useState('');
  
  const [currentEdu, setCurrentEdu] = useState({
    institution: '',
    degree: '',
    period: '',
    description: '',
    type: 'Educación' // Para distinguir entre Educación e Idioma
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdu({ ...currentEdu, [name]: value });
    setError('');
  };

  const handleAddEducation = () => {
    if (!currentEdu.institution || !currentEdu.degree) {
      setError('La institución y el grado/idioma son obligatorios.');
      return;
    }

    setCvData({
      ...cvData,
      education: [...cvData.education, currentEdu]
    });

    setCurrentEdu({ institution: '', degree: '', period: '', description: '', type: 'Educación' });
  };

  const handleDeleteEducation = (degreeName) => {
    setCvData({
      ...cvData,
      education: cvData.education.filter(edu => edu.degree !== degreeName)
    });
  };

  return (
    <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '20px' }}>
      <legend style={{ fontWeight: 'bold', padding: '0 10px' }}>Educación e Idiomas</legend>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Tipo de Registro:</label>
          <select
            name="type"
            value={currentEdu.type}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="Educación">Formación Académica</option>
            <option value="Idioma">Idioma</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            {currentEdu.type === 'Idioma' ? 'Idioma:' : 'Programa o Certificación:'}
          </label>
          <input
            type="text"
            name="degree"
            value={currentEdu.degree}
            onChange={handleChange}
            placeholder={currentEdu.type === 'Idioma' ? 'Ej. Inglés' : 'Ej. Ingeniería en Sistemas Computacionales'}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            {currentEdu.type === 'Idioma' ? 'Nivel / Certificadora:' : 'Institución:'}
          </label>
          <input
            type="text"
            name="institution"
            value={currentEdu.institution}
            onChange={handleChange}
            placeholder={currentEdu.type === 'Idioma' ? 'Ej. Intermedio' : 'Ej. Universidad Autónoma de Aguascalientes'}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Periodo o Año:</label>
          <input
            type="text"
            name="period"
            value={currentEdu.period}
            onChange={handleChange}
            placeholder="Ej. 2022 - 2026"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
      </div>

      {error && <p style={{ color: 'red', margin: '0 0 15px 0', fontSize: '14px' }}>{error}</p>}

      <button 
        type="button" 
        onClick={handleAddEducation}
        style={{ padding: '10px 15px', backgroundColor: '#6f42c1', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        + Agregar Registro
      </button>

      {cvData.education.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ marginBottom: '10px' }}>Historial Registrado:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cvData.education.map((item, index) => (
              <li key={index} style={{ padding: '10px', backgroundColor: '#f8f9fa', marginBottom: '5px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <strong>{item.degree}</strong> - {item.institution} <em style={{ fontSize: '14px', color: '#666' }}>({item.period})</em>
                  <span style={{ display: 'block', fontSize: '12px', color: '#888', marginTop: '3px' }}>{item.type}</span>
                </div>
                <button 
                  onClick={() => handleDeleteEducation(item.degree)}
                  style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </fieldset>
  );
}