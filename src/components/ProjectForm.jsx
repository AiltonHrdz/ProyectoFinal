import { useContext, useState } from 'react';
import { CVContext } from '../context/CVContext';

export default function ProjectForm() {
  const { cvData, setCvData } = useContext(CVContext);
  const [error, setError] = useState('');
  
  const [currentProject, setCurrentProject] = useState({
    name: '',
    description: '',
    technologies: '',
    repoLink: '',
    deployLink: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProject({ ...currentProject, [name]: value });
    setError('');
  };

  const handleAddProject = () => {
    // Validación de campos obligatorios mínimos
    if (!currentProject.name || !currentProject.description) {
      setError('El nombre y la descripción del proyecto son obligatorios.');
      return;
    }

    // Validación para evitar proyectos duplicados
    const isDuplicate = cvData.projects.some(
      project => project.name.toLowerCase() === currentProject.name.toLowerCase()
    );

    if (isDuplicate) {
      setError('Ya tienes un proyecto registrado con este nombre.');
      return;
    }

    // Guardar en el estado global
    setCvData({
      ...cvData,
      projects: [...cvData.projects, currentProject]
    });

    // Limpiar el formulario
    setCurrentProject({ name: '', description: '', technologies: '', repoLink: '', deployLink: '' });
  };

  const handleDeleteProject = (projectName) => {
    setCvData({
      ...cvData,
      projects: cvData.projects.filter(project => project.name !== projectName)
    });
  };

  return (
    <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '20px' }}>
      <legend style={{ fontWeight: 'bold', padding: '0 10px' }}>Proyectos Destacados</legend>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Nombre del Proyecto:</label>
            <input
              type="text"
              name="name"
              value={currentProject.name}
              onChange={handleChange}
              placeholder="Ej. Conecta4jr"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Tecnologías Utilizadas:</label>
            <input
              type="text"
              name="technologies"
              value={currentProject.technologies}
              onChange={handleChange}
              placeholder="Ej. Kotlin, Android Studio"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Descripción:</label>
          <textarea
            name="description"
            value={currentProject.description}
            onChange={handleChange}
            rows="3"
            placeholder="¿De qué trata el proyecto y qué problema resuelve?"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Enlace al Repositorio (opcional):</label>
            <input
              type="url"
              name="repoLink"
              value={currentProject.repoLink}
              onChange={handleChange}
              placeholder="https://github.com/tu-usuario/repo"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px' }}>Enlace al Deploy (opcional):</label>
            <input
              type="url"
              name="deployLink"
              value={currentProject.deployLink}
              onChange={handleChange}
              placeholder="https://tu-proyecto.com"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
        </div>
      </div>

      {error && <p style={{ color: 'red', margin: '0 0 15px 0', fontSize: '14px' }}>{error}</p>}

      <button 
        type="button" 
        onClick={handleAddProject}
        style={{ padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        + Agregar Proyecto
      </button>

      {/* Renderizado de la lista de proyectos */}
      {cvData.projects.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ marginBottom: '10px' }}>Proyectos Agregados:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cvData.projects.map((project, index) => (
              <li key={index} style={{ padding: '15px', backgroundColor: '#f8f9fa', marginBottom: '10px', borderRadius: '4px', borderLeft: '4px solid #28a745' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h5 style={{ margin: '0 0 5px 0' }}>{project.name}</h5>
                    <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#666' }}>{project.technologies}</p>
                    <p style={{ margin: '0', fontSize: '14px' }}>{project.description}</p>
                  </div>
                  <button 
                    onClick={() => handleDeleteProject(project.name)}
                    style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </fieldset>
  );
}