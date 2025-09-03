interface ProfileCardProps {
  imageUrl: string;
  name: string;
  title: string;
  github: string;
}

export default function ProfileCard({ name, title, imageUrl, github }: ProfileCardProps) {
  return (
    <div className="card">
      <img src={imageUrl} alt={`Foto de ${name}`} className="card-img" />
      <h2>{name}</h2>
      <p>{title}</p>
      <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-link"
      >
        🔗 GitHub
      </a>
    </div>
  );
}
