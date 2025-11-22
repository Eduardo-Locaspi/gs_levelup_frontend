import type { CardEventoType } from "../../../types/CardEvento";

export default function CardEvento({ nm_evento, descricao_evento, qt_dias, dt_inicio_evento }: CardEventoType) {
  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="text-lg font-bold">{nm_evento}</h3>
      {descricao_evento && <p className="text-gray-700">{descricao_evento}</p>}
      <p>Duração: {qt_dias} dias</p>
      <p>Início: {new Date(dt_inicio_evento).toLocaleDateString()}</p>
    </div>
  );
}
