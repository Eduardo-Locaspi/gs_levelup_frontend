import { useEffect, useState } from "react";
import { useAuth } from "../../../../context/AuthContext";

import MinhaConta_DadosInstituicao from "../../../../components/INSTITUICAO/MinhaConta/MinhaConta_DadosInstituicao/index";
import MinhaConta_Endereco from "../../../../components/PESSOA/MinhaConta/MinhaConta_Endereco";

import type { DadosInstituicao } from "../../../../types/Inst_Academica";
import type { Endereco } from "../../../../types/Endereco";

export default function Area_MinhaConta_instituicao() {
  const { auth } = useAuth();

  const [instituicao, setInstituicao] = useState<DadosInstituicao | null>(null);
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth?.id_usuario) return;

    async function carregarDados() {
      try {
        // Endpoint para buscar dados da instituição
        const respInstituicao = await fetch(
          `https://levelup-jtfg.onrender.com/listagem/minhaconta/dadosinstituicao/${auth.id_usuario}`
        );
        const instituicaoData = await respInstituicao.json();
        setInstituicao(instituicaoData);

        // Endpoint para buscar endereço da instituição
        const respEndereco = await fetch(
          `https://levelup-jtfg.onrender.com/listagem/minhaconta/dadosendereco/${instituicaoData.id_endereco}`
        );
        const enderecoData = await respEndereco.json();
        setEndereco(enderecoData);

      } catch (err) {
        console.error("Erro ao carregar dados da instituição:", err);
      } finally {
        setLoading(false);
      }
    }

    carregarDados();
  }, [auth]);

  if (loading) return <p className="text-center mt-6 text-gray-500">Carregando...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 mt-6 space-y-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">Minha Conta</h2>

      {/* Dados da Instituição */}
      {instituicao && (
        <div className="bg-white shadow-md rounded-xl p-6 space-y-3">
          <MinhaConta_DadosInstituicao {...instituicao} />
        </div>
      )}

      {/* Endereço */}
      {endereco && (
        <div className="bg-white shadow-md rounded-xl p-6 space-y-3">
          <MinhaConta_Endereco {...endereco} />
        </div>
      )}
    </div>
  );
}
