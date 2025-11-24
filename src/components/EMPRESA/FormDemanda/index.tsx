import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";

export default function FormDemanda() {
  const { auth } = useAuth();

  const [vagaTema, setVagaTema] = useState("");
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth?.id_usuario) {
      setMensagem("ID da empresa não encontrado.");
      return;
    }

    setLoading(true);
    setMensagem("");

    try {
      const res = await fetch(
        `https://levelup-jtfg.onrender.com/listagem/vagas/nova-demanda/${auth.id_usuario}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            vaga_tema: vagaTema,
            des_vaga: descricao
          }),
        }
      );

      if (!res.ok) throw new Error("Erro ao cadastrar a demanda");

      // ALTERAÇÃO: usar text() em vez de json()
      const data = await res.text();

      setMensagem(data); // recebe a string enviada pelo backend
      setVagaTema("");
      setDescricao("");
      console.log("Vaga criada:", data);
    } catch (err) {
      setMensagem(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-6 border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Nova Demanda</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-1">Título da Vaga</label>
          <input
            type="text"
            value={vagaTema}
            onChange={(e) => setVagaTema(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Digite o título da vaga"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 font-semibold mb-1">Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            rows={4}
            placeholder="Digite a descrição da vaga"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold text-white shadow-md transition-transform transform hover:scale-105 
                      ${loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"}`}
        >
          {loading ? "Cadastrando..." : "Cadastrar Demanda"}
        </button>

        {mensagem && (
          <p
            className={`mt-2 text-center font-medium ${
              mensagem.includes("sucesso") ? "text-green-600" : "text-red-600"
            }`}
          >
            {mensagem}
          </p>
        )}
      </form>
    </div>
  );
}
