
interface SkillTagProps {
  name: string;
  type: 'offer' | 'wanted';
}

const SkillTag = ({ name, type }: SkillTagProps) => {
  return (
    <span className={`skill-tag ${type === 'wanted' ? 'skill-wanted' : ''}`}>
      {name}
    </span>
  );
};

export default SkillTag;
