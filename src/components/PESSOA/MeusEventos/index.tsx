import { useEffect, useState } from "react";
import CardEvento from "../CardEvento";
import type { CardEventoType } from "../../../types/CardEvento";
import { useAuth } from "../../../context/AuthContext";

export default function MeusEventos() {
  const { auth } = useAuth();
  const [eventos, setEventos] = useState<CardEventoType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMeusEventos = async () => {
    if (!auth?.id_usuario) return;

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`http://localhost:8080/listagem/pessoa/${auth.id_usuario}`);
      if (!res.ok) throw new Error("Erro ao buscar eventos");
      const data: CardEventoType[] = await res.json();
      setEventos(data);

    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeusEventos();
  }, [auth]);

  const handleRemover = async (id_evento: number) => {
    if (!auth?.id_usuario) return;

    try {
      const res = await fetch(`http://localhost:8080/evento/remocao?id_pessoa=${auth.id_usuario}&id_evento=${id_evento}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Falha ao remover inscrição");

      setEventos(prev => prev.filter(e => e.id_evento !== id_evento));

    } catch (err) {
      console.error(err);
      alert("Erro ao remover inscrição");
    }
  };

  if (loading) return <p>Carregando eventos...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col gap-4">
      {eventos.length === 0 ? (
        <p>Nenhum evento encontrado.</p>
      ) : (
        eventos.map(evento => (
          <CardEvento
            key={evento.id_evento}
            evento={evento}
            isInscrito={true}
            onRemover={handleRemover}
          />
        ))
      )}
    </div>
  );
}
