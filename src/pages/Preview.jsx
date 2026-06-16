import { useContext } from 'react';
import { CVContext } from '../context/CVContext';
import html2pdf from 'html2pdf.js';

export default function Preview() {
  const { cvData } = useContext(CVContext);
  const { personalData, skills, projects, education } = cvData;

  const handleExportPDF = () => {
    // 1. Verificamos si el modo oscuro está activo en el body
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // 2. Si está activo, lo quitamos temporalmente
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
    }

    const element = document.getElementById('cv-preview-container');
    
    const opt = {
      margin:       10,
      filename:     `${personalData.fullName ? personalData.fullName.replace(/\s+/g, '_') : 'Mi'}_CV.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true }, 
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // 3. Generamos el PDF y usamos .then() para esperar a que termine
    html2pdf().set(opt).from(element).save().then(() => {
      // 4. Una vez guardado el archivo, restauramos el modo oscuro si estaba activo
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      }
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', backgroundColor: '#fff', color: '#333' }}>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <button 
          onClick={handleExportPDF}
          style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Preparar para Exportar PDF
        </button>
      </div>

      <div id="cv-preview-container" style={{ border: '1px solid #eaeaea', borderRadius: '8px', padding: '40px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        
        <header style={{ borderBottom: '2px solid #333', paddingBottom: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '25px' }}>
          {personalData.profileImage && (
            <img 
              src={personalData.profileImage} 
              alt="Foto de perfil" 
              crossOrigin="anonymous"
              style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #eaeaea' }} 
            />
          )}
          <div>
            <h1 style={{ margin: '0 0 5px 0', fontSize: '32px', color: '#2c3e50' }}>
              {personalData.fullName || 'Tu Nombre Completo'}
            </h1>
            <h2 style={{ margin: '0', fontSize: '20px', color: '#7f8c8d', fontWeight: 'normal' }}>
              {personalData.profession || 'Tu Profesión o Especialidad'}
            </h2>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px' }}>
          
          <aside>
            <section style={{ marginBottom: '25px' }}>
              <h3 style={{ fontSize: '18px', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px' }}>Contacto</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
                {personalData.email && <li>{personalData.email}</li>}
                {personalData.phone && <li>{personalData.phone}</li>}
                {personalData.location && <li>{personalData.location}</li>}
              </ul>
            </section>

            {skills.length > 0 && (
              <section>
                <h3 style={{ fontSize: '18px', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px' }}>Habilidades</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold' }}>
                        <span>{skill.name}</span>
                        <span style={{ color: '#7f8c8d', fontSize: '12px' }}>{skill.level}</span>
                      </div>
                      {skill.description && <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#666' }}>{skill.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </aside>

          <main>
            {personalData.description && (
              <section style={{ marginBottom: '25px' }}>
                <h3 style={{ fontSize: '18px', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px' }}>Perfil Profesional</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', textAlign: 'justify', margin: 0 }}>
                  {personalData.description}
                </p>
              </section>
            )}

            {projects.length > 0 && (
              <section style={{ marginBottom: '25px' }}>
                <h3 style={{ fontSize: '18px', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px' }}>Proyectos Destacados</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {projects.map((project, index) => (
                    <article key={index}>
                      <h4 style={{ margin: '0 0 5px 0', fontSize: '16px', color: '#2c3e50' }}>{project.name}</h4>
                      <p style={{ margin: '0 0 5px 0', fontSize: '13px', fontWeight: 'bold', color: '#6366f1' }}>{project.technologies}</p>
                      <p style={{ margin: '0 0 5px 0', fontSize: '14px', lineHeight: '1.5' }}>{project.description}</p>
                      <div style={{ fontSize: '12px' }}>
                        {project.repoLink && <a href={project.repoLink} target="_blank" rel="noreferrer" style={{ marginRight: '15px', color: '#6366f1', textDecoration: 'none', fontWeight: 'bold' }}>Repositorio</a>}
                        {project.deployLink && <a href={project.deployLink} target="_blank" rel="noreferrer" style={{ color: '#10b981', textDecoration: 'none', fontWeight: 'bold' }}>Ver Deploy</a>}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {education.length > 0 && (
              <section>
                <h3 style={{ fontSize: '18px', borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px' }}>Formación e Idiomas</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {education.map((item, index) => (
                    <article key={index}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <h4 style={{ margin: '0', fontSize: '15px' }}>{item.degree}</h4>
                        <span style={{ fontSize: '13px', color: '#7f8c8d' }}>{item.period}</span>
                      </div>
                      <p style={{ margin: '2px 0 0 0', fontSize: '14px' }}>{item.institution}</p>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}