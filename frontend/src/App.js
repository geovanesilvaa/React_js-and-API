import "./styles.css";

import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function loadApi() {
      const url = "http://localhost:2727/";
      fetch(url)
        .then((resultado) => resultado.json())
        .then((json) => {
          setUsers(json);
        });
    }
    loadApi();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>React Profissões</strong>
      </header>

      {users.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="titulo">Nome: {item.nome}</strong>
            <strong className="titulo">Profissão: {item.profissao}</strong>
            <img src={item.imagem} alt="profissao" className="capa" />
            <p>Descrição da Profissão: {item.descricao}</p>
            <a className="botao">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
