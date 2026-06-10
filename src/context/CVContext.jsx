import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CVContext = createContext();

export function CVProvider({ children }) {
  // Estado inicial del CV, con estructura para datos personales, habilidades, proyectos y educación.
  const [cvData, setCvData] = useLocalStorage('devprofile_data', {
    personalData: {
      fullName: '',
      profession: '',
      location: '',
      email: '',
      phone: '',
      description: '',
      links: [],
      profileImage: ''
    },
    skills: [],
    projects: [],
    education: []
  });

  return (
    <CVContext.Provider value={{ cvData, setCvData }}>
      {children}
    </CVContext.Provider>
  );
}