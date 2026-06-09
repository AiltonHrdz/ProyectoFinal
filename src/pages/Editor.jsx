import PersonalForm from '../components/PersonalForm';
import SkillForm from '../components/SkillForm';
import ProjectForm from '../components/ProjectForm';
import EducationForm from '../components/EducationForm';

export default function Editor() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Editor de Currículum</h2>
      <p>Completa la información a continuación para generar tu CV.</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <PersonalForm />
        <SkillForm />
        <ProjectForm />
        <EducationForm />
      </form>
    </div>
  );
}