// Estrutura de dados para o cadastro de Instituição Acadêmica, baseada no DDL.
// O cadastro completo envolve dados de T_LVUP_LOGIN, T_INST_ACADEMICA e T_ENDERECO.

export type InstituicaoAcademicaCadastro = {
    // 1. T_LVUP_LOGIN (Necessário para id_login)
    login: string;
    senha: string;
    confirmar_senha: string;
    
    // 2. T_INST_ACADEMICA (Campos de entrada direta)
    nome_instituicao: string; // nm_instAcademica (VARCHAR2(150) NOT NULL)
    cnpj: string; // cnpj_inst_academica (VARCHAR2(20) NOT NULL UNIQUE)
    // O campo st_ativo ('S'/'N') será definido pelo backend como 'S' no momento do cadastro.

    // 3. T_ENDERECO (Para id_endereco)
    cep: string;
    pais: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string; // Opcional
};