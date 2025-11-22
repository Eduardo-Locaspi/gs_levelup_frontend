// Estrutura de dados para o cadastro de Empresa, baseada no DDL.
// O cadastro completo envolve dados de T_LVUP_LOGIN, T_EMPRESA e T_ENDERECO.

/**
 * Não é mais necessário, pois o campo tp_empresa foi removido do novo DDL T_EMPRESA.
 * export type TipoEmpresa = 'EMPRESA_JUNIOR' | 'EMPRESA_PARTICULAR' | 'OUTROS';
 */

export type EmpresaCadastro = {
    // 1. T_LVUP_LOGIN (Necessário para id_login)
    login: string;
    senha: string;
    confirmar_senha: string;
    
    // 2. T_EMPRESA (Campos de entrada direta)
    nome_empresa: string; // nm_empresa (VARCHAR2(150) NOT NULL)
    cnpj: string; // cnpj_empresa (VARCHAR2(20) NOT NULL UNIQUE)
    email_empresa: string; // email_empresa (VARCHAR2(100) NOT NULL)

    // Campos de DDL gerados pelo sistema (id_empresa, dt_cadastro, st_empresa, id_endereco, id_login)
    // Não são necessários no formulário de cadastro.
    
    // 3. T_ENDERECO (Para id_endereco)
    cep: string;
    pais: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: number;
    complemento: string; // Opcional
    
    // Campos anteriormente considerados adicionais (sigla, data_fundacao) foram removidos para estrita conformidade com o DDL de T_EMPRESA.
};