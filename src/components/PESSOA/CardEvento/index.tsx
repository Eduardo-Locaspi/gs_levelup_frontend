import type { CardEventoProps } from "../../../types/Funcoes/CardEventoProps";

export default function CardEvento({ evento, isInscrito, onInscrever, onRemover }: CardEventoProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]">
      
      {/* Informações do Evento */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-800">{evento.nm_evento}</h3>
        {evento.descricao_evento && (
          <p className="text-gray-600 mt-2">{evento.descricao_evento}</p>
        )}
        <div className="text-gray-500 mt-2 space-y-1">
          <p>Duração: {evento.qt_dias} {evento.qt_dias === 1 ? "dia" : "dias"}</p>
          <p>Início: {new Date(evento.dt_inicio_evento).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Botão de ação */}
      <div className="flex justify-end">
        <button
          onClick={() => isInscrito ? onRemover(evento.id_evento) : onInscrever(evento.id_evento)}
          className={`px-4 py-2 rounded-lg font-medium text-white shadow-md transition-colors duration-300 
                      ${isInscrito ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
        >
          {isInscrito ? "Remover Evento" : "Inscrever-se"}
        </button>
      </div>
    </div>
  );
}
