import type { DadosPessoais_Pessoa } from "../../../../types/DadosPessoais_Pessoa";


export default function MinhaConta_DadosPessoais(pessoa:DadosPessoais_Pessoa){


    return(
        <>
            <h3>Dados Pessoais</h3>
            <p className="text-gray-700"><span className="font-semibold">Nome:</span> {pessoa.nm_pessoa}</p>
            <p className="text-gray-700"><span className="font-semibold">CPF:</span> {pessoa.cpf_pessoa}</p>
            <p className="text-gray-700">
            <span className="font-semibold">Data de nascimento:</span> {new Date(pessoa.dt_nascimento).toLocaleDateString()}</p>
        </>
    )
}