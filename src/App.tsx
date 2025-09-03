import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  const profilesData = [
    {
      id: 1,
      imageUrl: "https://i.pinimg.com/1200x/40/42/2f/40422f207beffab521842104974ad15b.jpg",
      name: "Gabriel Lopes",
      title: "Curso: Ciência da Computação",
      github: "https://github.com/GabrielLopes930"
    },
    {
      id: 2,
      imageUrl: "https://i.pinimg.com/1200x/2c/14/3e/2c143e4be2060658c6c79e3cfa02e4e2.jpg",
      name: "Magno Vinicius",
      title: "Curso: Ciência da Computação",
      github: "https://github.com/conde1212rwer"
    },
    {
      id: 3,
      imageUrl: "https://i.pinimg.com/736x/f0/0d/28/f00d282e727bbf3cc053cf3a6d730fc2.jpg",
      name: "Matheus Jose",
      title: "Curso: Ciência da Computação",
      github: "https://github.com/"
    }
  ];

  return (
    <div className="App">
      <div className="profiles-container">
        {profilesData.map(profile => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            title={profile.title}
            imageUrl={profile.imageUrl}
            github={profile.github}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
