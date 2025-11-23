

import type { Endereco } from "../../../../types/Endereco";

export default function MinhaConta_Endereco_Empresa(props: Endereco) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">Endereço da Empresa</h3>
      <p><strong>Rua:</strong> {props.rua}, {props.numero}</p>
      {props.complemento && <p><strong>Complemento:</strong> {props.complemento}</p>}
      <p><strong>Bairro:</strong> {props.bairro}</p>
      <p><strong>Cidade:</strong> {props.cidade} - {props.estado}</p>
      <p><strong>CEP:</strong> {props.cep}</p>
      <p><strong>País:</strong> {props.pais}</p>
    </div>
  );
}
 