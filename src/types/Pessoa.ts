export type PessoaCadastro = {
    // T_LVUP_LOGIN
    login: string; 
    senha: string;
    confirmar_senha: string; // Campo de controle do frontend
    
    // T_PESSOA
    nome: string; // nm_pessoa
    cpf: string; // cpf_pessoa
    data_nascimento: string; // dt_nascimento
    
    // T_ENDERECO
    cep: string;
    pais: string; // Máx 3 (Ex: BRA)
    estado: string; // Máx 2 (Ex: SP)
    cidade: string;
    bairro: string;
    rua: string;
    numero: string; 
    complemento: string; // Opcional
}