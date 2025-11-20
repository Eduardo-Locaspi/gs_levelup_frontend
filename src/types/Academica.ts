// Estrutura de dados para o cadastro de Instituição Académica, baseada no DDL.
// A tabela T_INST_ACADEMICA requer campos de T_LVUP_LOGIN e T_ENDERECO para ser preenchida.
export type InstituicaoCadastro = {
    // T_LVUP_LOGIN (Para id_login)
    login: string;
    senha: string;
    confirmar_senha: string;
    
    // T_INST_ACADEMICA (Campos nm_instAcademica e cnpj_inst_academica)
    nome_instituicao: string; // nm_instAcademica
    cnpj: string; // cnpj_inst_academica
    // O campo st_ativo (Status) será definido pelo backend como 'S' no momento do cadastro.
    
    // T_ENDERECO (Para id_endereco)
    cep: string;
    pais: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string; // Opcional
};