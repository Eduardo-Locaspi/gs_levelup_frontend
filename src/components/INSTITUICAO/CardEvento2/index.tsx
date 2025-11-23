import type { CardEventoType } from "../../../types/CardEvento";

export default function CardEvento2({nm_evento,descricao_evento,dt_inicio_evento,qt_dias }: CardEventoType) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex flex-col gap-2">
      <h3 className="text-xl font-bold text-gray-800">{nm_evento}</h3>
      {descricao_evento && (
        <p className="text-gray-600">{descricao_evento}</p>
      )}
      <div className="flex gap-4 text-gray-700">
        <span>Duração: {qt_dias} {qt_dias > 1 ? "dias" : "dia"}</span>
        <span>Início: {new Date(dt_inicio_evento).toLocaleDateString()}</span>
      </div>
    </div>
  );
}