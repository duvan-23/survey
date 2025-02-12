import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

export interface IFormProviderProps {
  children: ReactNode;
}

const Modal: React.FC<IFormProviderProps> = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>,
    document.getElementById("modal") as HTMLElement
  );
};

export { Modal };
