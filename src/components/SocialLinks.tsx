import Button from "./Button";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

export default function SocialLinks() {
  return (
    <div className="socials">
      <Button
        className="socials-btn"
        arialabel="Abrir perfil no Instagram"
        href="https://www.instagram.com/_islaianeribeiro?igsh=MWUzaGVwazJvcW44bw=="
        icon={<FaInstagram />}
      />
      <Button
        className="socials-btn"
        arialabel="Abrir perfil no LinkedIn"
        href="https://www.linkedin.com/in/islaianeribeiro/"
        icon={<FaLinkedin />}
      />
      <Button
        className="socials-btn"
        arialabel="Enviar email"
        href="mailto:islaiane.lribeiro@gmail.com"
        icon={<TfiEmail />}
      />
    </div>
  );
}
