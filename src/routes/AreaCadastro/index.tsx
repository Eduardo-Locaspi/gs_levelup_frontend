import FormCadastroPessoa from "../../components/FormCadastro/FormCadastroPessoa";

export default function AreaCadastro(){


    return(
        <div className="flex flex-col text-center border-2 rounded-md px-5">
            <h1 className="text-4xl my-5">CADASTRO</h1>
            <FormCadastroPessoa/> {/*Formulario de cadastro*/}
        </div>
    )
}