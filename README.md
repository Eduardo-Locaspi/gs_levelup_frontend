# 🌍 Eventos & Oportunidades - Plataforma de Conexão

## 📄 Sumário

* [📜 Sobre o Projeto](#-sobre-o-projeto)
* [🚀 Status do Projeto](#-status-do-projeto)
* [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [⚙️ Instalação e Execução](#️-instalação-e-execução)
* [🛠️ Como Usar (Exemplos de Rotas)](#️-como-usar-exemplos-de-rotas)
* [📁 Estrutura de Pastas](#-estrutura-de-pastas)
* [📍 Endpoints ou Rotas Principais](#-endpoints-ou-rotas-principais)
* [🔗 Links](#-links)
* [📸 Screenshots / Demonstração](#-screenshots--demonstração)
* [🧑‍💻 Autores e Créditos](#-autores-e-créditos)
* [📧 Contato](#-contato)

---

## 📜 Sobre o Projeto

Este projeto consiste em uma **API RESTful** desenvolvida em **Java (Quarkus)** para gerenciar **Eventos, Vagas de Emprego e perfis de Usuários** (Pessoas, Empresas e Instituições Acadêmicas). O objetivo é criar uma plataforma centralizada que conecta pessoas a oportunidades e eventos relevantes.

O sistema permite:
1.  **Autenticação e Cadastro** de diferentes tipos de usuários.
2.  **Gerenciamento de Eventos**, incluindo inscrição e remoção de participantes.
3.  **Gerenciamento de Vagas/Demandas** de emprego por parte das empresas.
4.  **Listagem e consulta** de dados de eventos, vagas, usuários e endereços.

---

## 🚀 Status do Projeto

✅ **Concluído/Pronto para Uso**

O desenvolvimento inicial da API está finalizado, com as principais funcionalidades de autenticação, cadastro e gerenciamento de eventos/vagas implementadas e testadas.

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
| :--- | :---: | :--- |
| **Java** | 17+ | Linguagem principal de desenvolvimento. |
| **Quarkus** | 3.x | Framework Java nativo para nuvem e *container-first*. |
| **Jakarta RESTful Web Services (JAX-RS)** | - | Implementação para criação dos *endpoints*. |
| **PostgreSQL** | - | Sistema de gerenciamento de banco de dados. |
| **Maven** | - | Ferramenta de automação de construção e gerenciamento de dependências. |

---

## ⚙️ Instalação e Execução

### Pré-requisitos
* **Java Development Kit (JDK) 17** ou superior.
* **Apache Maven** instalado.
* Acesso a um banco de dados **PostgreSQL**.

### Passos de Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [Link do Repositório GITHUB]
    cd nome-do-projeto
    ```

2.  **Configurar o Banco de Dados:**
    * Crie um banco de dados PostgreSQL.
    * Configure as credenciais e o JDBC URL no arquivo `src/main/resources/application.properties` (ou equivalente).
    * *Exemplo de configuração (ajuste conforme necessário):*
        ```properties
        quarkus.datasource.db-kind=postgresql
        quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/nomedobanco
        quarkus.datasource.username=seu_usuario
        quarkus.datasource.password=sua_senha
        ```

3.  **Executar a Aplicação (Modo Desenvolvimento):**
    ```bash
    ./mvnw compile quarkus:dev
    ```
    O servidor estará disponível em `http://localhost:8080` (ou porta configurada).

---

## 🛠️ Como Usar (Exemplos de Rotas)

### Cadastro de Pessoa (POST)
Caminho: `/auth/cadastro/pessoa`
Corpo da Requisição (JSON) deve conter os dados de `PessoaCadastro`.

### Inscrição em Evento (POST)
Caminho: `/evento/inscricao`
Corpo da Requisição (JSON) deve conter:
```json
{
  "idPessoa": 1,
  "idEvento": 5
}

Remover Inscrição de Evento (DELETE)
Caminho: /evento/remocao?id_pessoa={idPessoa}&id_evento={idEvento} Exemplo: DELETE http://localhost:8080/evento/remocao?id_pessoa=1&id_evento=5

Listar Todos os Eventos com Endereço (GET)
Caminho: /evento/listar

📁 Estrutura de Pastas

src/
├── main/
│   ├── java/org/acme/
│   │   ├── model/           # Classes DTOs e entidades
│   │   ├── repository/      # Camada de acesso a dados (DAO)
│   │   ├── service/         # Camada de lógica de negócios
│   │   └── resource/        # Camada RESTful (Endpoints)
│   └── resources/           # Configurações (e.g., application.properties)
└── test/
    └── java/org/acme/      # Testes Unitários e de Integração


Camada (Resource),Método,Path Base,Path Completo,Descrição
LoginCadastroResource,POST,/auth,/auth/login,Realiza o login.
LoginCadastroResource,POST,/auth,/auth/cadastro/pessoa,Cadastra uma nova Pessoa.
LoginCadastroResource,POST,/auth,/auth/cadastro/empresa,Cadastra uma nova Empresa.
LoginCadastroResource,POST,/auth,/auth/cadastro/instituicao,Cadastra uma nova Instituição.
EventoResource,POST,/evento,/evento/inscricao,Inscreve uma pessoa em um evento.
EventoResource,DELETE,/evento,/evento/remocao,Remove a inscrição de uma pessoa em um evento.
EventoResource,GET,/evento,/evento/listar,Lista todos os eventos com informações de endereço.
Vaga_EmpresaResource,POST,/listagem/vagas,/listagem/vagas/nova-demanda/{idEmpresa},Cria uma nova vaga/demanda para uma empresa.
GreetingResource,GET,/listagem,/listagem/eventos,Lista todos os eventos (menos detalhado).
GreetingResource,GET,/listagem,/listagem/pessoa/{idPessoa},Lista eventos inscritos por uma Pessoa.
GreetingResource,GET,/listagem,/listagem/minhas-demandas/{idEmpresa},Lista vagas criadas por uma Empresa.
GreetingResource,GET,/listagem,/listagem/pessoa/dadospessoais/{idPessoa},Busca dados pessoais de uma Pessoa.
GreetingResource,GET,/listagem,/listagem/empresa/dadosEmpresariais/{idEmpresa},Busca dados de uma Empresa.
GreetingResource,GET,/listagem,/listagem/minhaconta/dadosinstituicao/{idInstituicao},Busca dados de uma Instituição Acadêmica.
GreetingResource,GET,/listagem,/listagem/minhaconta/dadosendereco/{idEndereco},Busca dados de Endereço por ID.
Outras Listagens,GET,/listagem,"/listagem/pessoas, /enderecos, /logins, /empresas, /instAcademicas, /vagasDasEmpresas",Listas gerais para manutenção/administração.

---
## 🔗 Links

### **GITHUB**

* **Repositório Front-end:** [https://github.com/Eduardo-Locaspi/gs_levelup_frontend.git](https://github.com/Eduardo-Locaspi/gs_levelup_frontend.git)
* **Repositório Back-end:** [https://github.com/victoralves10/levelup-DDD-java] *(Preencher com o link do repositório da API)*
---
## 🧑‍💻 Autores e Créditos

Desenvolvido pelo time:

* **Eduardo Batista Locaspi** - (RM: 561713) - [https://github.com/Eduardo-Locaspi](https://github.com/Eduardo-Locaspi)
* **Victor Alves Lopes** - (RM: 561833) - [https://github.com/victoralves10](https://levelup-jtfg.onrender.com/)


---
## 📧 Contato

| Nome | E-mail |
| :--- | :--- |
| **Eduardo Batista Locaspi** | rm561713@fiap.com.br |
| **Victor Alves Lopes** | rm561833@fiap.com.br |
| **[Seu Nome/Nome do Grupo]** | [seu.email@exemplo.com] |
