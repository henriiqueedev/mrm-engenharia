import React from "react";
import "./Clients.css";

const Clients: React.FC = () => {
  return (
    <main className="clients container">
      <h2>Nossos Clientes</h2>
      <p>
        Grandes empresas já confiam em nosso trabalho. Confira alguns dos nossos
        clientes:
      </p>
      <div className="clients__logos">
        <div className="client-logo">Cliente 1</div>
        <div className="client-logo">Cliente 2</div>
        <div className="client-logo">Cliente 3</div>
      </div>
    </main>
  );
};

export default Clients;
