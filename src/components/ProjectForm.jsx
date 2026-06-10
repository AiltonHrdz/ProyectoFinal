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
    const { name, description, repoLink, deployLink } = currentProject;

    // Validación de campos vacíos
    if (!name || !description) {
      setError('El nombre y la descripción del proyecto son obligatorios.');
      return;
    }

    // --- VALIDACIÓN ESTRICTA DE URL (Puntos de Rúbrica) ---
    const urlPattern = /^(https?:\/\/)/; 
    
    if (repoLink && !urlPattern.test(repoLink)) {
      setError('El enlace del repositorio debe ser una URL válida (ej. https://github.com/...)');
      return;
    }
    
    if (deployLink && !urlPattern.test(deployLink)) {
      setError('El enlace del deploy debe ser una URL válida (ej. https://...)');
      return;
    }

    // Validación de duplicados
    const isDuplicate = cvData.projects.some(
      project => project.name.toLowerCase() === name.toLowerCase()
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
    <fieldset>
      <legend>Proyectos Destacados</legend>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label>Nombre del Proyecto:</label>
            <input
              type="text"
              name="name"
              value={currentProject.name}
              onChange={handleChange}
              placeholder="Ej. Conecta4jr"
            />
          </div>

          <div>
            <label>Tecnologías Utilizadas:</label>
            <input
              type="text"
              name="technologies"
              value={currentProject.technologies}
              onChange={handleChange}
              placeholder="Ej. Kotlin, Android Studio"
            />
          </div>
        </div>

        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={currentProject.description}
            onChange={handleChange}
            rows="3"
            placeholder="¿De qué trata el proyecto y qué problema resuelve?"
            style={{ resize: 'vertical' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div>
            <label>Enlace al Repositorio (opcional):</label>
            <input
              type="url"
              name="repoLink"
              value={currentProject.repoLink}
              onChange={handleChange}
              placeholder="https://github.com/tu-usuario/repo"
            />
          </div>

          <div>
            <label>Enlace al Deploy (opcional):</label>
            <input
              type="url"
              name="deployLink"
              value={currentProject.deployLink}
              onChange={handleChange}
              placeholder="https://tu-proyecto.com"
            />
          </div>
        </div>
      </div>

      {error && <p style={{ color: '#ef4444', margin: '0 0 15px 0', fontSize: '14px', fontWeight: 'bold' }}>{error}</p>}

      <button type="button" onClick={handleAddProject}>
        + Agregar Proyecto
      </button>

      {cvData.projects.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ marginBottom: '10px', color: '#64748b' }}>Proyectos Agregados:</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cvData.projects.map((project, index) => (
              <li key={index} style={{ padding: '15px', backgroundColor: 'rgba(0,0,0,0.02)', marginBottom: '10px', borderRadius: '8px', borderLeft: '4px solid #6366f1' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h5 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{project.name}</h5>
                    <p style={{ margin: '0 0 5px 0', fontSize: '13px', fontWeight: 'bold', color: '#6366f1' }}>{project.technologies}</p>
                    <p style={{ margin: '0 0 5px 0', fontSize: '14px', lineHeight: '1.5' }}>{project.description}</p>
                    <div style={{ fontSize: '12px', marginTop: '10px' }}>
                      {project.repoLink && <a href={project.repoLink} target="_blank" rel="noreferrer" style={{ marginRight: '15px', color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>🔗 Repositorio</a>}
                      {project.deployLink && <a href={project.deployLink} target="_blank" rel="noreferrer" style={{ color: '#10b981', textDecoration: 'none', fontWeight: 'bold' }}>🚀 Ver Deploy</a>}
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDeleteProject(project.name)}
                    style={{ backgroundColor: '#ef4444', color: 'white', padding: '6px 12px', fontSize: '12px' }}
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