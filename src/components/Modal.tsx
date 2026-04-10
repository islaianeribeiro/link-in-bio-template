import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import { useEffect, useState } from "react";
import { modalContent } from "../data/ModalData";

type ModalType = "services" | "diferentials" | null;

type Props = {
  modal: ModalType;
  onClose: () => void;
};

export default function Modal({ modal, onClose }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (modal) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [modal]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!modal) return null;

  const content = modalContent[modal];

  return (
    <div
      className={`overlay ${isVisible ? "open" : "closed"}`}
      onClick={handleClose}
    >
      <div
        className={`modal ${isVisible ? "open" : "closed"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          className="close-btn"
          arialabel="Fechar modal"
          onClick={handleClose}
          icon={<IoMdClose />}
        />

        <h2>{content.title}</h2>

        <div className="modal-list">
          {content.items.map((item) => (
            <div key={item.title} className="modal-item">
              <h3>✔ {item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="cta">
          <p>{content.text}</p>
          <Button
            className="cta-btn"
            label={content.btn}
            href="https://wa.me/5588981574558?text=Ol%C3%A1!%20Tenho%20interesse%20no%20seu%20servi%C3%A7o%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20e%20um%20or%C3%A7amento."
          />
        </div>
      </div>
    </div>
  );
}
