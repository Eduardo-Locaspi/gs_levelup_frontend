// src/components/INSTITUICAO/MinhaConta/MinhaConta_DadosInstituicao.tsx

import type { DadosInstituicao } from "../../../../types/Inst_Academica";

export default function MinhaConta_DadosInstituicao({
  nm_instAcademica,
  cnpj_inst_academica,
}: DadosInstituicao) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-700">Dados da Instituição</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-500 font-medium">Nome da Instituição</label>
          <p className="mt-1 text-gray-800">{nm_instAcademica}</p>
        </div>

        <div>
          <label className="block text-gray-500 font-medium">CNPJ</label>
          <p className="mt-1 text-gray-800">{cnpj_inst_academica}</p>
        </div>
      </div>
    </div>
  );
}
