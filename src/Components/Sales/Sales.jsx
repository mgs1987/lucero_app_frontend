import React from "react";
import { useNavigate } from "react-router-dom";
import buttons from "../../styles/buttons.module.css";
import containers from "../../styles/containers.module.css";

export const Sales = () => {
  const navigate = useNavigate();
  return (
    <div className={containers.mainContainer}>
      <div
        onClick={() => navigate("/sales/create")}
        className={buttons.buttonMenu}
      >
        Crear Venta
      </div>
      <div
        onClick={() => navigate("/sales/history")}
        className={buttons.buttonMenu}
      >
        Historial de ventas
      </div>
      <div onClick={() => navigate("/")} className={buttons.buttonMenu}>
        Volver
      </div>
    </div>
  );
};
