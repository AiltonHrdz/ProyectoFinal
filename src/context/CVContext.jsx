import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CVContext = createContext();

export function CVProvider({ children }) {
  // Estado inicial basado en los requerimientos del proyecto
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