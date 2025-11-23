import { useEffect, useState } from "react";
import { useAuth } from "../../../../context/AuthContext";

import MinhaConta_DadosPessoais from "../../../../components/PESSOA/MinhaConta/MinhaConta_DadosPessoais";
import MinhaConta_Endereco from "../../../../components/PESSOA/MinhaConta/MinhaConta_Endereco";

import type { DadosPessoais_Pessoa } from "../../../../types/DadosPessoais_Pessoa";
import type { Endereco } from "../../../../types/Endereco";

export default function Area_MinhaConta() {
  const { auth } = useAuth();

  const [pessoa, setPessoa] = useState<DadosPessoais_Pessoa | null>(null);
  const [endereco, setEndereco] = useState<Endereco | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth?.id_usuario) return;

    async function carregarDados() {
      try {
        const respPessoa = await fetch(
          `http://localhost:8080/listagem/pessoa/dadospessoais/${auth.id_usuario}`
        );
        const pessoaData = await respPessoa.json();
        setPessoa(pessoaData);

        const respEndereco = await fetch(
          `http://localhost:8080/listagem/minhaconta/dadosendereco/${pessoaData.id_endereco}`
        );
        const enderecoData = await respEndereco.json();
        setEndereco(enderecoData);

      } catch (err) {
        console.error("Erro ao carregar dados:", err);
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

      {/* Dados Pessoais */}
      {pessoa && (
        <div className="bg-white shadow-md rounded-xl p-6 space-y-3">
          <MinhaConta_DadosPessoais {...pessoa} />
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
