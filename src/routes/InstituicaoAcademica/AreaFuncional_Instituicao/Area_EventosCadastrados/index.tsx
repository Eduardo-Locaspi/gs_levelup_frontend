import EventosCadastrados from "../../../../components/INSTITUICAO/Eventos_Cadastrados";

export default function Area_EventosCadastrados() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-300 pb-2">
        Eventos Cadastrados
      </h2>

      <div className="flex flex-col gap-4">
        <EventosCadastrados />
      </div>
    </div>
  );
}
