import type { Endereco } from "../../../../types/Endereco";


export default function MinhaConta_Endereco(endereco : Endereco) {
  return (
    <>
        <h3>Endereço</h3>
      <p className="text-gray-700">
        <span className="font-semibold">CEP:</span> {endereco.cep}
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">País:</span> {endereco.pais}
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">Estado:</span> {endereco.estado}
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">Cidade:</span> {endereco.cidade}
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">Bairro:</span> {endereco.bairro}
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">Rua:</span> {endereco.rua}
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">Número:</span> {endereco.numero}
      </p>

      {endereco.complemento && (
        <p className="text-gray-700">
          <span className="font-semibold">Complemento:</span> {endereco.complemento}
        </p>
      )}
    </>
  );
}
