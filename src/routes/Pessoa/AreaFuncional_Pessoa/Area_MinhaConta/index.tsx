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
        // 1) Buscar DADOS DA PESSOA
        const respPessoa = await fetch(
          `http://localhost:8080/listagem/pessoa/dadospessoais/${auth.id_usuario}`
        );
        const pessoaData = await respPessoa.json();
        setPessoa(pessoaData);
        console.log("ID ENDERECO:", pessoaData.id_endereco);

        // 2) Buscar ENDEREÇO usando id_usuario retornado no DTO da Pessoa
        const respEndereco = await fetch(`http://localhost:8080/listagem/minhaconta/dadosendereco/${pessoaData.id_endereco}`);

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

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Minha Conta</h2>

      {/* Dados Pessoais */}
      {pessoa && (
        <div className="space-y-3">
          <MinhaConta_DadosPessoais {...pessoa} />
        </div>
      )}

      {/* Endereço */}
      {endereco && (
        <div className="mt-4">
          <MinhaConta_Endereco {...endereco} />
        </div>
      )}
    </div>
  );
}
