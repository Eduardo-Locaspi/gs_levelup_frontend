import type { CardEventoProps } from "../../../types/Funcoes/CardEventoProps";

export default function CardEvento({ evento, isInscrito, onInscrever, onRemover }: CardEventoProps) {
  return (
    <div className="border p-4 rounded shadow-md flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold">{evento.nm_evento}</h3>
        {evento.descricao_evento && <p>{evento.descricao_evento}</p>}
        <p>Duração: {evento.qt_dias} dias</p>
        <p>Início: {new Date(evento.dt_inicio_evento).toLocaleDateString()}</p>
      </div>
      
      <div className="mt-2 flex justify-end">
        <button
          onClick={() => isInscrito ? onRemover(evento.id_evento) : onInscrever(evento.id_evento)}
          className={`px-3 py-1 rounded text-white ${isInscrito ? 'bg-red-500' : 'bg-blue-500'}`}
        >
          {isInscrito ? "Remover Evento" : "Inscrever-se"}
        </button>
      </div>
    </div>
  );
}
