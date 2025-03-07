import { useState, useEffect } from "react";
import "./App.css";

interface Mensagem {
  mensagem: string;
}

function App() {
  const [mensagem, setMensagem] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchMensagem = async () => {
      try {
        // Em desenvolvimento, use http://localhost:4000
        // Em produção, usará o path relativo /api
        const baseUrl = import.meta.env.DEV 
          ? "http://localhost:4000" 
          : "";
        
        const resposta = await fetch(`${baseUrl}/api/mensagem`);
        
        if (!resposta.ok) {
          throw new Error(`Erro ao buscar mensagem: ${resposta.status}`);
        }
        
        const dados: Mensagem = await resposta.json();
        setMensagem(dados.mensagem);
        setLoading(false);
      } catch (error) {
        console.error("Erro:", error);
        setErro("Falha ao carregar a mensagem do servidor.");
        setLoading(false);
      }
    };

    fetchMensagem();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Meu Projeto Monorepo</h1>
        
        <div className="mensagem-container">
          {loading ? (
            <p>Carregando mensagem...</p>
          ) : erro ? (
            <p className="erro">{erro}</p>
          ) : (
            <div className="mensagem-card">
              <h2>Mensagem do Backend:</h2>
              <p>{mensagem}</p>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
