import type { Demanda } from "../../../types/Demanda";

export default function DemandaCard({ vaga_tema, des_vaga, st_vaga }: Demanda) {
  // Define a cor do status
  const statusColor = st_vaga === "A" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  const statusText = st_vaga === "A" ? "Aberta" : "Fechada";

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-semibold text-gray-800">{vaga_tema}</h3>
      {des_vaga && <p className="text-gray-700 mt-1">{des_vaga}</p>}
      <span
        className={`inline-block mt-2 px-2 py-1 text-sm font-medium rounded ${statusColor}`}
      >
        {statusText}
      </span>
    </div>
  );
}
