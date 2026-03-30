import "./App.css";
import { useState } from "react";
import Modal from "./components/Modal";
import Profile from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import Button from "./components/Button";

type ModalType = "services" | "diferentials" | null;

function App() {
  const [modal, setModal] = useState<ModalType>(null);

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
          href="https://wa.me/5588981574558?text=Ol%C3%A1!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
          label="ENTRE EM CONTATO"
        />
        <Button
          className="btn"
          onClick={() => setModal("services")}
          label="SERVIÇOS"
        />
        <Button
          className="btn"
          href="https://portfolio-islaiane-ribeiro.vercel.app/"
          label="PORTFÓLIO"
        />
        <Button
          className="btn"
          onClick={() => setModal("diferentials")}
          label="DIFERENCIAIS"
        />
      </div>
      <Modal modal={modal} onClose={() => setModal(null)} />

      <footer>Desenvolvido por Islaiane Ribeiro.</footer>
    </div>
  );
}

export default App;
