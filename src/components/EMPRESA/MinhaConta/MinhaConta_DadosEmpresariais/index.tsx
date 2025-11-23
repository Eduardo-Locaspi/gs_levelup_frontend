import type { DadosPessoais_Empresa } from "../../../../types/DadosPessoais_Empresa";

export default function MinhaConta_DadosEmpresa(empresa: DadosPessoais_Empresa) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-gray-800 border-b pb-1">Dados Empresariais</h3>
      <p className="text-gray-700">
        <span className="font-semibold">Nome da Empresa:</span> {empresa.nm_empresa}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">CNPJ:</span> {empresa.cnpj_empresa}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">E-mail:</span> {empresa.email_empresa}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Data de Cadastro:</span>{" "}
        {new Date(empresa.dt_cadastro).toLocaleDateString()}
      </p>
    </div>
  );
}
