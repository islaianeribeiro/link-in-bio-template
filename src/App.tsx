import "./App.css";

import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import Button from "./components/Button";

function App() {
  return (
    <div className="container">
      <div className="capa">
        <img src="/capa.png" alt="Islaiane" />
      </div>
      <Profile />
      <SocialLinks />

      <div className="buttons">
        <Button
          className="btn"
          href="https://wa.me/5588981574558"
          label="ENTRE EM CONTATO"
        />
        <Button
          className="btn"
          href="https://wa.me/5588981574558"
          label="SERVIÇOS"
        />
        <Button
          className="btn"
          href="https://portfolio-islaiane-ribeiro.vercel.app/"
          label="PORTFÓLIO"
        />
        <Button
          className="btn"
          href="https://wa.me/5588981574558"
          label="DIFERENCIAIS"
        />
      </div>

      <footer>Desenvolvido por Islaiane Ribeiro.</footer>
    </div>
  );
}

export default App;
