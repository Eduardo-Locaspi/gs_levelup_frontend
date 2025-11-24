import { useEffect, useState } from "react";
import CardEvento from "../CardEvento";
import type { CardEventoType } from "../../../types/CardEvento";
import { useAuth } from "../../../context/AuthContext";

export default function EventosDisponiveis() {
  const { auth } = useAuth();
  const [eventos, setEventos] = useState<CardEventoType[]>([]);
  const [inscritos, setInscritos] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEventos = async () => {
    if (!auth?.id_usuario) return;

    try {
      setLoading(true);
      setError(null);

      // Todos os eventos
      const resEventos = await fetch("https://levelup-jtfg.onrender.com/listagem/eventos");
      if (!resEventos.ok) throw new Error("Erro ao buscar eventos");
      const dataEventos: CardEventoType[] = await resEventos.json();
      setEventos(dataEventos);

      // Eventos do usuário
      const resInscritos = await fetch(`https://levelup-jtfg.onrender.com/listagem/pessoa/${auth.id_usuario}`);
      if (!resInscritos.ok) throw new Error("Erro ao buscar eventos do usuário");
      const dataInscritos: CardEventoType[] = await resInscritos.json();
      setInscritos(dataInscritos.map(e => e.id_evento));

    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventos();
  }, [auth]);

  const handleInscrever = async (id_evento: number) => {
    if (!auth?.id_usuario) return;

    try {
      const res = await fetch("https://levelup-jtfg.onrender.com/evento/inscricao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idPessoa: auth.id_usuario, idEvento: id_evento }),
      });
      if (!res.ok) throw new Error("Falha ao se inscrever");

      // Atualiza localmente
      setInscritos(prev => [...prev, id_evento]);

    } catch (err) {
      console.error(err);
      alert("Erro ao se inscrever");
    }
  };

  const handleRemover = async (id_evento: number) => {
    if (!auth?.id_usuario) return;

    try {
      const res = await fetch(`https://levelup-jtfg.onrender.com/evento/remocao?id_pessoa=${auth.id_usuario}&id_evento=${id_evento}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Falha ao remover inscrição");

      setInscritos(prev => prev.filter(eid => eid !== id_evento));

    } catch (err) {
      console.error(err);
      alert("Erro ao remover inscrição");
    }
  };

  if (loading) return <p>Carregando eventos disponíveis...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex flex-col gap-4">
      {eventos.length === 0 ? (
        <p>Nenhum evento disponível.</p>
      ) : (
        eventos.map(evento => (
          <CardEvento
            key={evento.id_evento}
            evento={evento}
            isInscrito={inscritos.includes(evento.id_evento)}
            onInscrever={handleInscrever}
            onRemover={handleRemover}
          />
        ))
      )}
    </div>
  );
}
