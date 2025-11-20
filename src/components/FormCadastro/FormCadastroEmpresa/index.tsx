
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// O TipoEmpresa foi removido do arquivo types
import type { EmpresaCadastro } from "../../../types/Empresa"; 

export default function FormCadastroEmpresa() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<EmpresaCadastro>({
        // 1. T_LVUP_LOGIN
        login: '',
        senha: '',
        confirmar_senha: '',
        
        // 2. T_EMPRESA (Campos de entrada direta no DDL)
        nome_empresa: '', // nm_empresa
        cnpj: '', // cnpj_empresa
        email_empresa: '', // email_empresa (NOVO CAMPO OBRIGATÓRIO)
        
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        // Ajuste para garantir que 'numero' seja tratado como string no estado, mas validado como número se necessário no backend.
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
        
        // Validações de formato de dados (simplificadas para o protótipo)
        if (!formData.email_empresa.includes('@') || !formData.email_empresa.includes('.')) {
             setError("O formato do e-mail parece inválido.");
            return;
        }

        // Os campos st_empresa ('A' ou 'I') e dt_cadastro serão definidos no backend.
        
        // --- LÓGICA DE ENVIO PARA O BACKEND AQUI ---
        console.log("Dados de Cadastro de Empresa (DDL T_EMPRESA Estrito) para envio:", formData);

        // Simulação de sucesso
        setSuccess("Cadastro de Empresa iniciado com sucesso! Aguardando a integração com o backend.");
        // navigate('/login'); // Redirecionar após o sucesso real
    };

    const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150";

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
            <h1 className="text-4xl font-extrabold text-green-600 mb-2 text-center">Cadastro de Empresa Parceira</h1>
            <p className="text-md text-gray-500 mb-8 text-center">
                Preencha os dados da sua empresa. Os campos correspondem estritamente ao DDL da tabela T_EMPRESA.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* --- 1. Credenciais de Acesso (T_LVUP_LOGIN) --- */}
                <div className="space-y-4 border-b pb-6">
                    <h2 className="text-2xl font-semibold text-gray-700">1. Credenciais de Acesso (T_LVUP_LOGIN)</h2>
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

                {/* --- 2. Dados da Empresa (T_EMPRESA) --- */}
                <div className="space-y-4 border-b pb-6">
                    <h2 className="text-2xl font-semibold text-gray-700">2. Informações da Empresa (T_EMPRESA)</h2>
                    
                    <input
                        type="text"
                        name="nome_empresa"
                        placeholder="Nome Completo (nm_empresa)"
                        value={formData.nome_empresa}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="cnpj"
                            placeholder="CNPJ (cnpj_empresa)"
                            value={formData.cnpj}
                            onChange={handleChange}
                            className={inputClasses}
                            maxLength={20}
                            required
                        />
                        <input
                            type="email"
                            name="email_empresa"
                            placeholder="Email da Empresa (email_empresa)"
                            value={formData.email_empresa}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>
                    {/* Campos removidos (tp_empresa, sigla, data_fundacao) para conformidade com o DDL T_EMPRESA */}

                </div>
                
                {/* --- 3. Dados de Endereço (T_ENDERECO) --- */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-700">3. Endereço (T_ENDERECO)</h2>

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
                    <p className="text-green-600 text-center font-medium p-2 bg-green-100 rounded-lg">{success}</p>
                )}
                
                {/* Botão de Envio */}
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-xl shadow-md hover:bg-green-700 transition duration-200 mt-6"
                >
                    Cadastrar Empresa
                </button>
            </form>

            {/* Link de Retorno */}
            <div className="mt-6 text-center">
                <Link to="/quemsoueu" className="text-sm text-gray-500 hover:text-green-600">
                    &larr; Voltar para a escolha de perfil
                </Link>
            </div>
        </div>
    );
}