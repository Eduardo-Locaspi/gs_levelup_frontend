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
        nome_instituicao: '',
        cnpj: '',
        
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        if (formData.senha !== formData.confirmar_senha) {
            setError("As senhas digitadas não são iguais.");
            return;
        }

        try {
            const response = await fetch("https://levelup-jtfg.onrender.com/auth/cadastro/instituicao", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();

                if (result === true) {
                    setSuccess("Instituição cadastrada com sucesso!");
                    navigate("/login");
                } else {
                    setError("Não foi possível cadastrar a instituição.");
                }
            } else if (response.status === 400) {
                const msg = await response.text();
                setError(msg);
            } else {
                setError("Erro ao se comunicar com o servidor.");
            }
        } catch (err) {
            console.error("Erro no backend:", err);
            setError("Não foi possível conectar ao servidor.");
        }
    };

    const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition";
    const headerColor = "text-blue-700";

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-2xl">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-2 text-center">
                Cadastro de Instituição Acadêmica
            </h1>
            <p className="text-md text-gray-500 mb-8 text-center">
                Preencha os dados da sua instituição.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. CREDENCIAIS */}
                <div className="space-y-4 border-b pb-6">
                    <h2 className={`text-2xl font-semibold ${headerColor}`}>
                        1. Credenciais de Acesso (T_LVUP_LOGIN)
                    </h2>

                    <input
                        type="text"
                        name="login"
                        placeholder="Login"
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

                {/* 2. INSTITUIÇÃO */}
                <div className="space-y-4 border-b pb-6">
                    <h2 className={`text-2xl font-semibold ${headerColor}`}>
                        2. Informações da Instituição (T_INST_ACADEMICA)
                    </h2>

                    <input
                        type="text"
                        name="nome_instituicao"
                        placeholder="Nome da Instituição"
                        value={formData.nome_instituicao}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                    />

                    <input
                        type="text"
                        name="cnpj"
                        placeholder="CNPJ"
                        value={formData.cnpj}
                        onChange={handleChange}
                        className={inputClasses}
                        maxLength={20}
                        required
                    />
                </div>

                {/* 3. ENDEREÇO */}
                <div className="space-y-4">
                    <h2 className={`text-2xl font-semibold ${headerColor}`}>
                        3. Endereço (T_ENDERECO)
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="cep"
                            placeholder="CEP"
                            value={formData.cep}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                        <input
                            type="text"
                            name="pais"
                            placeholder="País"
                            value={formData.pais}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <input
                            type="text"
                            name="estado"
                            placeholder="Estado"
                            value={formData.estado}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                        <input
                            type="text"
                            name="cidade"
                            placeholder="Cidade"
                            value={formData.cidade}
                            onChange={handleChange}
                            className={`${inputClasses} col-span-2`}
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="bairro"
                        placeholder="Bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        className={inputClasses}
                        required
                    />

                    <div className="grid grid-cols-4 gap-4">
                        <input
                            type="text"
                            name="rua"
                            placeholder="Rua"
                            value={formData.rua}
                            onChange={handleChange}
                            className={`${inputClasses} col-span-3`}
                            required
                        />
                        <input
                            type="text"
                            name="numero"
                            placeholder="Número"
                            value={formData.numero}
                            onChange={handleChange}
                            className={inputClasses}
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="complemento"
                        placeholder="Complemento (Opcional)"
                        value={formData.complemento}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                </div>

                {/* FEEDBACK */}
                {error && (
                    <p className="text-red-500 text-center font-medium p-2 bg-red-100 rounded-lg">
                        {error}
                    </p>
                )}
                {success && (
                    <p className="text-blue-600 text-center font-medium p-2 bg-blue-100 rounded-lg">
                        {success}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-xl shadow-md hover:bg-blue-700 transition duration-200 mt-6"
                >
                    Cadastrar Instituição Acadêmica
                </button>
            </form>

            <div className="mt-6 text-center">
                <Link to="/quemsoueu" className="text-sm text-gray-500 hover:text-blue-600">
                    &larr; Voltar para a escolha de perfil
                </Link>
            </div>
        </div>
    );
}
