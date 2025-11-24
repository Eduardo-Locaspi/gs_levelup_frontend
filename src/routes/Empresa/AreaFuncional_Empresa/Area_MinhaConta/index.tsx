import { useEffect, useState } from "react";
import { useAuth } from "../../../../context/AuthContext";

import MinhaConta_DadosEmpresa from "../../../../components/EMPRESA/MinhaConta/MinhaConta_DadosEmpresariais";

import type { DadosPessoais_Empresa } from "../../../../types/DadosPessoais_Empresa";
import type { Endereco } from "../../../../types/Endereco";
import MinhaConta_Endereco from "../../../../components/PESSOA/MinhaConta/MinhaConta_Endereco";

export default function Area_MinhaConta_empresa() {
  const { auth } = useAuth();

  const [empresa, setEmpresa] = useState<DadosPessoais_Empresa | null>(null);
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth?.id_usuario) return;

    async function carregarDados() {
      try {
        // Endpoint atualizado para buscar dados da empresa
        const respEmpresa = await fetch(
          `https://levelup-jtfg.onrender.com/listagem/empresa/dadosEmpresariais/${auth.id_usuario}`
        );
        const empresaData = await respEmpresa.json();
        setEmpresa(empresaData);

        // Endpoint para buscar endereço da empresa permanece o mesmo
        const respEndereco = await fetch(
          `https://levelup-jtfg.onrender.com/listagem/minhaconta/dadosendereco/${empresaData.id_endereco}`
        );
        const enderecoData = await respEndereco.json();
        setEndereco(enderecoData);

      } catch (err) {
        console.error("Erro ao carregar dados da empresa:", err);
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

      {/* Dados da Empresa */}
      {empresa && (
        <div className="bg-white shadow-md rounded-xl p-6 space-y-3">
          <MinhaConta_DadosEmpresa {...empresa} />
        </div>
      )}

      {/* Endereço da Empresa */}
      {endereco && (
        <div className="bg-white shadow-md rounded-xl p-6 space-y-3">
          <MinhaConta_Endereco {...endereco} />
        </div>
      )}
    </div>
  );
}
