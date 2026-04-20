import profile from "../assets/profile.png";

export default function Profile() {
  return (
    <div className="profile">
      <img src={profile} alt="Foto de perfil de Islaiane Ribeiro." />
      <h1>Islaiane Ribeiro</h1>
      <h2>DESENVOLVEDORA FREELANCER</h2>
      <p>Crio sites e soluções digitais adaptadas à sua necessidade.</p>
    </div>
  );
}
