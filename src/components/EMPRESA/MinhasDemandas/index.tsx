import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import type { Demanda } from "../../../types/Demanda";
import DemandaCard from "../DemandaCard";

export default function MinhasDemandas() {
  const { auth } = useAuth();
  const [demandas, setDemandas] = useState<Demanda[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth?.id_usuario) return;

    async function carregarDemandas() {
      try {
        const resp = await fetch(
          `http://localhost:8080/listagem/minhas-demandas/${auth.id_usuario}`
        );
        const dados: Demanda[] = await resp.json();
        setDemandas(dados);
      } catch (err) {
        console.error("Erro ao carregar demandas:", err);
      } finally {
        setLoading(false);
      }
    }

    carregarDemandas();
  }, [auth]);

  if (loading)
    return <p className="text-center mt-6 text-gray-500">Carregando demandas...</p>;

  if (demandas.length === 0)
    return <p className="text-center mt-6 text-gray-500">Nenhuma demanda cadastrada.</p>;

  return (
    <div className="flex flex-col gap-4">
      {demandas.map((demanda, index) => (
        <DemandaCard key={index} {...demanda} />
      ))}
    </div>
  );
}
