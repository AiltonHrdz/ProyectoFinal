import { useContext } from 'react';
import { CVContext } from '../context/CVContext';

export default function PersonalForm() {
  const { cvData, setCvData } = useContext(CVContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCvData({
      ...cvData,
      personalData: {
        ...cvData.personalData,
        [name]: value
      }
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      // Cuando termine de leer el archivo, actualizamos el estado global
      reader.onloadend = () => {
        setCvData({
          ...cvData,
          personalData: { 
            ...cvData.personalData, 
            profileImage: reader.result 
          }
        });
      };
      
      // Le indicamos que lea el archivo como una URL de datos (Base64)
      reader.readAsDataURL(file);
    }
  };

  return (
    <fieldset style={{ padding: '20px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '20px' }}>
      <legend style={{ fontWeight: 'bold', padding: '0 10px' }}>Datos Personales</legend>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Nombre Completo:</label>
          <input
            type="text"
            name="fullName"
            value={cvData.personalData.fullName}
            onChange={handleChange}
            placeholder="Ej. Miguel Sebastian Valdivia Flores"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Profesión / Especialidad:</label>
          <input
            type="text"
            name="profession"
            value={cvData.personalData.profession}
            onChange={handleChange}
            placeholder="Ej. Ingeniería en Sistemas Computacionales"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Ciudad:</label>
          <input
            type="text"
            name="location"
            value={cvData.personalData.location}
            onChange={handleChange}
            placeholder="Ej. Aguascalientes"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>Teléfono:</label>
          <input
            type="tel"
            name="phone"
            value={cvData.personalData.phone}
            onChange={handleChange}
            placeholder="Ej. 449 123 4567"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            value={cvData.personalData.email}
            onChange={handleChange}
            placeholder="tu.correo@ejemplo.com"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>Imagen de Perfil (Pega una URL o sube una foto):</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '5px' }}>
            
            <input
              type="text"
              name="profileImage"
              value={cvData.personalData.profileImage || ''}
              onChange={handleChange}
              placeholder="Ej. https://tu-dominio.com/foto.jpg"
            />
            
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ 
                padding: '9px 16px', 
                cursor: 'pointer'
              }}
            />
            
          </div>
        </div>

        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Descripción o Perfil Profesional:</label>
          <textarea
            name="description"
            value={cvData.personalData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Breve resumen de tu perfil profesional..."
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
          />
        </div>
      </div>
    </fieldset>
  );
}