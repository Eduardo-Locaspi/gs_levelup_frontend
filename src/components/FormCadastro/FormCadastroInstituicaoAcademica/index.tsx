import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { InstituicaoAcademicaCadastro } from "../../../types/Academica"; 

export default function FormCadastroInstituicaoAcademica() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<InstituicaoAcademicaCadastro>({
        // 1. T_LVUP_LOGIN
        login: '',
        senha: '',
        confirmar_senha: '',
        
        // 2. T_INST_ACADEMICA
        nome_instituicao: '', // nm_instAcademica
        cnpj: '', // cnpj_inst_academica
        
        // 3. T_ENDERECO
        cep: '',
        pais: 'BRA',
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        complemento: '',
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (formData.senha !== formData.confirmar_senha) {
            setError("As senhas digitadas não são iguais.");
            return;
        }
        
        // O campo st_ativo ('S'/'N') será definido no backend como 'S' no momento do cadastro.
        
        // --- LÓGICA DE ENVIO PARA O BACKEND AQUI ---
        console.log("Dados de Cadastro de Instituição Acadêmica (DDL Estrito) para envio:", formData);

        // Simulação de sucesso
        setSuccess("Cadastro de Instituição Acadêmica iniciado com sucesso! Aguardando a integração com o backend.");
        // navigate('/login'); // Redirecionar após o sucesso real
    };

    const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150";
    const headerColor = "text-blue-700";

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-2 text-center">Cadastro de Instituição Acadêmica</h1>
            <p className="text-md text-gray-500 mb-8 text-center">
                Preencha os dados da sua instituição. Os campos correspondem estritamente ao DDL da tabela T_INST_ACADEMICA.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* --- 1. Credenciais de Acesso (T_LVUP_LOGIN) --- */}
                <div className="space-y-4 border-b pb-6">
                    <h2 className={`text-2xl font-semibold ${headerColor}`}>1. Credenciais de Acesso (T_LVUP_LOGIN)</h2>
                    <input
                        type="text"
                        name="login"
                        placeholder="Login (Obrigatório para id_login)"
                        value={formData.login}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            value={formData.senha}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                        <input
                            type="password"
                            name="confirmar_senha"
                            placeholder="Confirmar Senha"
                            value={formData.confirmar_senha}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>
                </div>

                {/* --- 2. Dados da Instituição (T_INST_ACADEMICA) --- */}
                <div className="space-y-4 border-b pb-6">
                    <h2 className={`text-2xl font-semibold ${headerColor}`}>2. Informações da Instituição (T_INST_ACADEMICA)</h2>
                    
                    <input
                        type="text"
                        name="nome_instituicao"
                        placeholder="Nome Completo (nm_instAcademica)"
                        value={formData.nome_instituicao}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                    />
                    
                    <input
                        type="text"
                        name="cnpj"
                        placeholder="CNPJ (cnpj_inst_academica)"
                        value={formData.cnpj}
                        onChange={handleChange}
                        className={inputClasses}
                        maxLength={20}
                        required
                    />
                </div>
                
                {/* --- 3. Dados de Endereço (T_ENDERECO) --- */}
                <div className="space-y-4">
                    <h2 className={`text-2xl font-semibold ${headerColor}`}>3. Endereço (T_ENDERECO)</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="cep"
                            placeholder="CEP (cep)"
                            value={formData.cep}
                            onChange={handleChange}
                            className={inputClasses}
                            maxLength={10}
                            required
                        />
                        <input
                            type="text"
                            name="pais"
                            placeholder="País (pais, Ex: BRA)"
                            value={formData.pais}
                            onChange={handleChange}
                            className={inputClasses}
                            maxLength={3}
                            required
                        />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                        <input
                            type="text"
                            name="estado"
                            placeholder="Estado (estado, UF)"
                            value={formData.estado}
                            onChange={handleChange}
                            className={inputClasses}
                            maxLength={2}
                            required
                        />
                        <input
                            type="text"
                            name="cidade"
                            placeholder="Cidade (cidade)"
                            value={formData.cidade}
                            onChange={handleChange}
                            className={`${inputClasses} col-span-2`}
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="bairro"
                        placeholder="Bairro (bairro)"
                        value={formData.bairro}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                    />

                    <div className="grid grid-cols-4 gap-4">
                        <input
                            type="text"
                            name="rua"
                            placeholder="Rua / Logradouro (rua)"
                            value={formData.rua}
                            onChange={handleChange}
                            className={`${inputClasses} col-span-3`}
                            required
                        />
                         <input
                            type="text" 
                            name="numero"
                            placeholder="Nº (numero)"
                            value={formData.numero}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>
                    
                    <input
                        type="text"
                        name="complemento"
                        placeholder="Complemento (complemento - Opcional)"
                        value={formData.complemento}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                </div>
                

                {/* Mensagens de Feedback */}
                {error && (
                    <p className="text-red-500 text-center font-medium p-2 bg-red-100 rounded-lg">{error}</p>
                )}
                {success && (
                    <p className="text-blue-600 text-center font-medium p-2 bg-blue-100 rounded-lg">{success}</p>
                )}
                
                {/* Botão de Envio */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-xl shadow-md hover:bg-blue-700 transition duration-200 mt-6"
                >
                    Cadastrar Instituição Acadêmica
                </button>
            </form>

            {/* Link de Retorno */}
            <div className="mt-6 text-center">
                <Link to="/quemsoueu" className="text-sm text-gray-500 hover:text-blue-600">
                    &larr; Voltar para a escolha de perfil
                </Link>
            </div>
        </div>
    );
}