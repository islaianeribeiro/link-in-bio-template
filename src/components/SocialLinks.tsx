import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "./Button";

export default function SocialLinks() {
  return (
    <div className="socials">
      <Button
        className="socials-btn"
        href="https://wa.me/5588981574558"
        icon={<FaWhatsapp />}
      />
      <Button
        className="socials-btn"
        href="https://www.instagram.com/_islaianeribeiro?igsh=MWUzaGVwazJvcW44bw=="
        icon={<FaInstagram />}
      />
      <Button
        className="socials-btn"
        href="https://www.linkedin.com/in/islaianeribeiro/"
        icon={<FaLinkedin />}
      />
    </div>
  );
}
