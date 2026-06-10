import { useContext, useState } from 'react';
import { CVContext } from '../context/CVContext';

export default function SkillForm() {
  const { cvData, setCvData } = useContext(CVContext);
  const [error, setError] = useState('');
  
  // Estado local para controlar el formulario antes de enviarlo al estado global
  const [currentSkill, setCurrentSkill] = useState({
    name: '',
    category: '',
    level: 'Básico',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentSkill({ ...currentSkill, [name]: value });
    setError(''); // Limpiamos el error al escribir
  };

  const handleAddSkill = () => {
    // Validación: Campos vacíos
    if (!currentSkill.name || !currentSkill.category) {
      setError('El nombre y la categoría son obligatorios.');
      return;
    }

    // Validación: Evitar duplicados
    const isDuplicate = cvData.skills.some(
      skill => skill.name.toLowerCase() === currentSkill.name.toLowerCase()
    );

    if (isDuplicate) {
      setError('Esta habilidad ya ha sido registrada.');
      return;
    }

    // Agregar al contexto global
    setCvData({
      ...cvData,
      skills: [...cvData.skills, currentSkill]
    });

    // Limpiar el formulario local
    setCurrentSkill({ name: '', category: '', level: 'Básico', description: '' });
  };

  const handleDeleteSkill = (skillName) => {
    setCvData({
      ...cvData,
      skills: cvData.skills.filter(skill => skill.name !== skillName)
    });
  };

  return (
    <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '20px' }}>
      <legend style={{ fontWeight: 'bold', padding: '0 10px' }}>Habilidades Técnicas</legend>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Habilidad:</label>
          <input
            type="text"
            name="name"
            value={currentSkill.name}
            onChange={handleChange}
            placeholder="Ej. Kotlin"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Categoría:</label>
          <input
            type="text"
            name="category"
            value={currentSkill.category}
            onChange={handleChange}
            placeholder="Ej. Desarrollo Móvil"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Nivel de Dominio:</label>
          <select
            name="level"
            value={currentSkill.level}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="Básico">Básico</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Descripción Breve:</label>
          <input
            type="text"
            name="description"
            value={currentSkill.description}
            onChange={handleChange}
            placeholder="Ej. Desarrollo de la aplicación Conecta4jr"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
      </div>

      {error && <p style={{ color: 'red', margin: '0 0 15px 0', fontSize: '14px' }}>{error}</p>}

      <button 
        type="button" 
        onClick={handleAddSkill}
        style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        + Agregar Habilidad
      </button>

      {cvData.skills.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ marginBottom: '10px' }}>Habilidades Registradas:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cvData.skills.map((skill, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#f8f9fa', marginBottom: '5px', borderRadius: '4px', color: '#333' }}>
                <span><strong>{skill.name}</strong> ({skill.level}) - {skill.category}</span>
                <button 
                  onClick={() => handleDeleteSkill(skill.name)}
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