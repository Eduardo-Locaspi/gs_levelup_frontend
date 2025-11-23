import type { DadosPessoais_Pessoa } from "../../../../types/DadosPessoais_Pessoa";

export default function MinhaConta_DadosPessoais(pessoa: DadosPessoais_Pessoa) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-gray-800 border-b pb-1">Dados Pessoais</h3>
      <p className="text-gray-700"><span className="font-semibold">Nome:</span> {pessoa.nm_pessoa}</p>
      <p className="text-gray-700"><span className="font-semibold">CPF:</span> {pessoa.cpf_pessoa}</p>
      <p className="text-gray-700">
        <span className="font-semibold">Data de nascimento:</span> {new Date(pessoa.dt_nascimento).toLocaleDateString()}
      </p>
    </div>
  );
}
