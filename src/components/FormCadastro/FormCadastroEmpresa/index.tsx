import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FormCadastroEmpresa() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        login: "",
        senha: "",
        confirmar_senha: "",

        nome_empresa: "",
        cnpj: "",
        email: "",

        cep: "",
        pais: "BRA",
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: 0,
        complemento: "",
    });

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

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

        if (formData.senha !== formData.confirmar_senha) {
            setError("As senhas não correspondem.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/auth/cadastro/empresa", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();

                if (result === true) {
                    setSuccess("Empresa cadastrada com sucesso!");
                    navigate("/login");
                } else {
                    setError("Não foi possível cadastrar a empresa.");
                }
            } else if (response.status === 400) {
                const msg = await response.text();
                setError(msg);
            } else {
                setError("Erro no servidor, tente novamente.");
            }

        } catch (err) {
            console.error("Erro ao conectar:", err);
            setError("Erro ao conectar ao servidor.");
        }
    };

    const inputClasses =
        "w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150";

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-white p-10 rounded-xl shadow-2xl">
                <h1 className="text-4xl font-extrabold text-green-600 mb-2 text-center">
                    Cadastro de Empresa
                </h1>
                <p className="text-md text-gray-500 mb-8 text-center">
                    Preencha os dados da sua empresa para criar sua conta LVUP.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* CREDENCIAIS */}
                    <div className="space-y-4 border-b pb-6">
                        <h2 className="text-2xl font-semibold text-gray-700">1. Credenciais</h2>
                        <input type="text" name="login" placeholder="Login"
                               value={formData.login} onChange={handleChange}
                               className={inputClasses} required />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="password" name="senha" placeholder="Senha"
                                   value={formData.senha} onChange={handleChange}
                                   className={inputClasses} required />

                            <input type="password" name="confirmar_senha" placeholder="Confirmar Senha"
                                   value={formData.confirmar_senha} onChange={handleChange}
                                   className={inputClasses} required />
                        </div>
                    </div>

                    {/* DADOS EMPRESA */}
                    <div className="space-y-4 border-b pb-6">
                        <h2 className="text-2xl font-semibold text-gray-700">2. Dados da Empresa</h2>

                        <input type="text" name="nome_empresa" placeholder="Nome da Empresa"
                               value={formData.nome_empresa} onChange={handleChange}
                               className={inputClasses} required />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" name="cnpj" placeholder="CNPJ"
                                   value={formData.cnpj} onChange={handleChange}
                                   className={inputClasses} maxLength={14} required />

                            <input type="email" name="email" placeholder="Email"
                                   value={formData.email} onChange={handleChange}
                                   className={inputClasses} required />
                        </div>
                    </div>

                    {/* ENDEREÇO */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-700">3. Endereço</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" name="cep" placeholder="CEP"
                                   value={formData.cep} onChange={handleChange}
                                   className={inputClasses} required />

                            <input type="text" name="pais" placeholder="País"
                                   value={formData.pais} onChange={handleChange}
                                   className={inputClasses} />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <input type="text" name="estado" placeholder="UF"
                                   value={formData.estado} onChange={handleChange}
                                   className={inputClasses} required />

                            <input type="text" name="cidade" placeholder="Cidade"
                                   value={formData.cidade} onChange={handleChange}
                                   className={`${inputClasses} col-span-2`} required />
                        </div>

                        <input type="text" name="bairro" placeholder="Bairro"
                               value={formData.bairro} onChange={handleChange}
                               className={inputClasses} required />

                        <div className="grid grid-cols-4 gap-4">
                            <input type="text" name="rua" placeholder="Rua"
                                   value={formData.rua} onChange={handleChange}
                                   className={`${inputClasses} col-span-3`} required />

                            <input type="number" name="numero" placeholder="Nº"
                                   value={formData.numero} onChange={handleChange}
                                   className={inputClasses} required />
                        </div>

                        <input type="text" name="complemento" placeholder="Complemento"
                               value={formData.complemento} onChange={handleChange}
                               className={inputClasses} />
                    </div>

                    {error && (
                        <p className="text-red-500 text-center p-2 bg-red-100 rounded-lg">
                            {error}
                        </p>
                    )}

                    {success && (
                        <p className="text-green-600 text-center p-2 bg-green-100 rounded-lg">
                            {success}
                        </p>
                    )}

                    <button type="submit"
                            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-xl shadow-md hover:bg-green-700 transition duration-200 mt-6">
                        Cadastrar Empresa
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link to="/quemsoueu"
                          className="text-sm text-gray-500 hover:text-green-600">
                        &larr; Voltar para a escolha de perfil
                    </Link>
                </div>
            </div>
        </div>
    );
}
