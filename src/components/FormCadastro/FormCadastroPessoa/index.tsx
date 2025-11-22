import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { PessoaCadastro } from "../../../types/Pessoa";

export default function FormCadastroPessoa() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<PessoaCadastro>({
        login: '',
        senha: '',
        confirmar_senha: '',
        nome: '',
        cpf: '',
        data_nascimento: '',
        cep: '',
        pais: 'BRA', // valor padrão
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: 0,
        complemento: ''
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Se for número, converter para number
        if (name === "numero") {
            setFormData(prev => ({ ...prev, [name]: Number(value) }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        // Validação senha
        if (formData.senha !== formData.confirmar_senha) {
            setError("As senhas digitadas não são iguais.");
            return;
        }

        // Validação de data
        if (!formData.data_nascimento) {
            setError("Data de nascimento é obrigatória.");
            return;
        }

        // Enviar dados para backend
        try {
            const response = await fetch("http://localhost:8080/auth/cadastro/pessoa", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                if (result === true) {
                    setSuccess("Cadastro concluído com sucesso!");
                    navigate('/login'); // redirecionar se quiser
                } else {
                    setError("Não foi possível cadastrar a pessoa. Tente novamente.");
                }
            } else if (response.status === 400) {
                const msg = await response.text();
                setError(msg);
            } else {
                setError("Ocorreu um erro no servidor. Tente novamente mais tarde.");
            }
        } catch (err) {
            console.error("Erro ao chamar backend:", err);
            setError("Não foi possível conectar ao servidor.");
        }
    };

    const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150";

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white p-10 rounded-xl shadow-2xl">
                <h1 className="text-4xl font-extrabold text-blue-600 mb-2 text-center">Cadastro de Pessoa Física</h1>
                <p className="text-md text-gray-500 mb-8 text-center">Preencha seus dados para criar sua conta LVUP.</p>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* --- Credenciais --- */}
                    <div className="space-y-4 border-b pb-6">
                        <h2 className="text-2xl font-semibold text-gray-700">1. Credenciais de Acesso</h2>
                        <input type="text" name="login" placeholder="Login" value={formData.login} onChange={handleChange} className={inputClasses} required />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} className={inputClasses} required />
                            <input type="password" name="confirmar_senha" placeholder="Confirmar Senha" value={formData.confirmar_senha} onChange={handleChange} className={inputClasses} required />
                        </div>
                    </div>

                    {/* --- Dados Pessoais --- */}
                    <div className="space-y-4 border-b pb-6">
                        <h2 className="text-2xl font-semibold text-gray-700">2. Informações Pessoais</h2>
                        <input type="text" name="nome" placeholder="Nome Completo" value={formData.nome} onChange={handleChange} className={inputClasses} required />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} className={inputClasses} maxLength={15} required />
                            <input type="date" name="data_nascimento" placeholder="Data de Nascimento" value={formData.data_nascimento} onChange={handleChange} className={inputClasses} required />
                        </div>
                    </div>

                    {/* --- Endereço --- */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-700">3. Endereço</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange} className={inputClasses} maxLength={10} required />
                            <input type="text" name="pais" placeholder="País" value={formData.pais} onChange={handleChange} className={inputClasses} maxLength={3} required />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <input type="text" name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange} className={inputClasses} maxLength={2} required />
                            <input type="text" name="cidade" placeholder="Cidade" value={formData.cidade} onChange={handleChange} className={`${inputClasses} col-span-2`} required />
                        </div>
                        <input type="text" name="bairro" placeholder="Bairro" value={formData.bairro} onChange={handleChange} className={inputClasses} required />
                        <div className="grid grid-cols-4 gap-4">
                            <input type="text" name="rua" placeholder="Rua" value={formData.rua} onChange={handleChange} className={`${inputClasses} col-span-3`} required />
                            <input type="number" name="numero" placeholder="Nº" value={formData.numero} onChange={handleChange} className={inputClasses} required />
                        </div>
                        <input type="text" name="complemento" placeholder="Complemento" value={formData.complemento} onChange={handleChange} className={inputClasses} />
                    </div>

                    {error && <p className="text-red-500 text-center p-2 bg-red-100 rounded-lg">{error}</p>}
                    {success && <p className="text-green-600 text-center p-2 bg-green-100 rounded-lg">{success}</p>}

                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-xl shadow-md hover:bg-blue-700 transition duration-200 mt-6">Cadastrar Pessoa</button>
                </form>

                <div className="mt-6 text-center">
                    <Link to="/quemsoueu" className="text-sm text-gray-500 hover:text-blue-600">&larr; Voltar para a escolha de perfil</Link>
                </div>
            </div>
        </div>
    );
}
