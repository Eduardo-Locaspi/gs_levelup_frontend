export type DadosPessoais_Empresa = {
  nm_empresa: string;
  cnpj_empresa: string;
  email_empresa: string;
  dt_cadastro: string; // pode ser Date ou string dependendo do fetch
  id_endereco: number; // referência para o endereço
};