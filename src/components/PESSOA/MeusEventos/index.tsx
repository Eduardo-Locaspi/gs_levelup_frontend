import { useEffect, useState } from "react";
import CardEvento from "../CardEvento";
import type { CardEventoType } from "../../../types/CardEvento";
import { useAuth } from "../../../context/AuthContext";

export default function MeusEventos() {
  const { auth } = useAuth();
  const [eventos, setEventos] = useState<CardEventoType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Espera auth carregar
    if (!auth || auth.id_usuario === null) return;

    const idPessoa = auth.id_usuario;

  const fetchEventos = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`http://localhost:8080/listagem/pessoa/${idPessoa}`);
      if (!response.ok) throw new Error(`Erro ao buscar eventos: ${response.status}`);

      const data: CardEventoType[] = await response.json();
      setEventos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  fetchEventos();
}, [auth]);

  if (loading) return <p>Carregando eventos...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  
  
  
  return (
  <div className="flex flex-col gap-4">
    {eventos.length === 0 ? (<p>Nenhum evento encontrado.</p>) :
     (eventos.map((evento) => (<CardEvento key={evento.id_evento} {...evento} />))
)
    }
  </div>
);
}
