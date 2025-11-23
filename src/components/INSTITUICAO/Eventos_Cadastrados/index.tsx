import { useEffect, useState } from "react";
import type { CardEventoType } from "../../../types/CardEvento";
import CardEvento2 from "../CardEvento2";

export default function EventosCadastrados() {
  const [eventos, setEventos] = useState<CardEventoType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEventos() {
      try {
        const res = await fetch("http://localhost:8080/listagem/eventos");
        if (!res.ok) throw new Error("Erro ao buscar eventos");
        const data: CardEventoType[] = await res.json();
        setEventos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    }
    fetchEventos();
  }, []);

  if (loading) return <p>Carregando eventos...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col gap-4">
      {eventos.length === 0 ? (
        <p>Nenhum evento cadastrado.</p>
      ) : (
        eventos.map(evento => (
          <CardEvento2 key={evento.id_evento} {...evento} />
        ))
      )}
    </div>
  );
}
