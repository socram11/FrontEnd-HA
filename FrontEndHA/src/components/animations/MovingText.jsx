import React from "react";

const MovingText = () => {
  return (
    <div
      className="overflow-hidden  fixed-top mb-4 bg-white bg-opacity-75"
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)", // Soporte para Safari
      }}
    >
      <div
        className="d-inline-block text-nowrap fw-bold text-dark fs-10"
        style={{
          fontSize: 12,
          paddingLeft: "100%",
          animation: "scroll 40s linear infinite",
        }}
      >
        UN MINIMO DE $250.000. - ENVIOS GRATIS A PARTIR DE $200.000. - 10% OFF
        PAGANDO CON TRANSFERENCIA BANCARIA. - 3 Y 6 CUOTAS SIN INTERES, 9 CUOTAS
        SIN INTERES CON UN MINIMO DE $250.000. - ENVIO
      </div>

      {/* Estilos inline para el ejemplo */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default MovingText;
