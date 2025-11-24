# 🌍 Eventos & Oportunidades - Plataforma de Conexão

## 📄 Sumário

- [📜 Sobre o Projeto](#-sobre-o-projeto)
- [🚀 Status do Projeto](#-status-do-projeto)
- [💻 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [⚙️ Instalação e Execução](#️-instalação-e-execução)
- [🛠️ Como Usar (Exemplos de Rotas)](#️-como-usar-exemplos-de-rotas)
- [📁 Estrutura de Pastas](#-estrutura-de-pastas)
- [📍 Endpoints Principais](#-endpoints-principais)
- [🔗 Links](#-links)
- [🧑‍💻 Autores e Créditos](#-autores-e-créditos)
- [📧 Contato](#-contato)

---

## 📜 Sobre o Projeto

Esta é uma **API RESTful** desenvolvida em **Java + Quarkus**, que gerencia:

- **Eventos**
- **Vagas/Demandas de emprego**
- **Perfis de Usuários** (Pessoa, Empresa, Instituição Acadêmica)

A plataforma conecta pessoas a oportunidades e eventos, oferecendo:

1. **Autenticação e cadastro** de diferentes tipos de usuários.
2. **Gerenciamento de eventos**, com inscrição e remoção de participantes.
3. **Criação e listagem de vagas** por empresas.
4. **Acesso centralizado a dados** de usuários, eventos, vagas e endereços.

---

## 🚀 Status do Projeto

✅ **Concluído / Pronto para Uso**

A API já possui as principais funcionalidades implementadas e testadas.

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|:------:|-----------|
| **Java** | 17+ | Linguagem principal |
| **Quarkus** | 3.x | Framework nativo para cloud |
| **JAX-RS / Jakarta REST** | — | Criação dos endpoints |
| **PostgreSQL** | — | Banco de dados |
| **Maven** | — | Gerenciamento de dependências |

---

## ⚙️ Instalação e Execução

### ✔ Pré-requisitos
- **JDK 17+**
- **Maven**
- **PostgreSQL**

### ✔ Instalação

1. **Clonar o repositório**
```bash
git clone [link-do-repositorio]
cd nome-do-projeto
Configurar banco de dados
Edite src/main/resources/application.properties:

properties
Copiar código
quarkus.datasource.db-kind=postgresql
quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/nomedobanco
quarkus.datasource.username=seu_usuario
quarkus.datasource.password=sua_senha
Rodar em modo desenvolvimento

bash
Copiar código
./mvnw compile quarkus:dev
API disponível em:
http://localhost:8080

🛠️ Como Usar (Exemplos de Rotas)
✔ Cadastro de Pessoa (POST)
Rota: /auth/cadastro/pessoa
Body: JSON de PessoaCadastro.

✔ Inscrição em Evento (POST)
Rota: /evento/inscricao

json
Copiar código
{
  "idPessoa": 1,
  "idEvento": 5
}
✔ Remover Inscrição (DELETE)
Rota:

bash
Copiar código
/evento/remocao?id_pessoa={idPessoa}&id_evento={idEvento}
Exemplo:

bash
Copiar código
DELETE http://localhost:8080/evento/remocao?id_pessoa=1&id_evento=5
✔ Listar Eventos (GET)
Rota: /evento/listar

📁 Estrutura de Pastas
bash
Copiar código
src/
├── main/
│   ├── java/org/acme/
│   │   ├── model/        # Entidades e DTOs
│   │   ├── repository/   # Acesso a dados
│   │   ├── service/      # Regras de negócio
│   │   └── resource/     # Endpoints REST
│   └── resources/        # application.properties
└── test/
    └── java/org/acme/    # Testes
📍 Endpoints Principais
🔐 Login & Cadastro (/auth)
Método	Caminho	Descrição
POST	/auth/login	Realiza o login
POST	/auth/cadastro/pessoa	Cadastra Pessoa
POST	/auth/cadastro/empresa	Cadastra Empresa
POST	/auth/cadastro/instituicao	Cadastra Instituição

🎟 Eventos (/evento)
Método	Caminho	Descrição
POST	/evento/inscricao	Inscreve pessoa em evento
DELETE	/evento/remocao	Remove inscrição
GET	/evento/listar	Lista eventos com endereço

💼 Vagas / Demandas (/listagem/vagas)
Método	Caminho	Descrição
POST	/listagem/vagas/nova-demanda/{idEmpresa}	Cria nova vaga

📚 Consultas Gerais (/listagem)
Método	Caminho	Descrição
GET	/listagem/eventos	Lista eventos
GET	/listagem/pessoa/{idPessoa}	Eventos inscritos
GET	/listagem/minhas-demandas/{idEmpresa}	Vagas criadas
GET	/listagem/pessoa/dadospessoais/{idPessoa}	Dados pessoais
GET	/listagem/empresa/dadosEmpresariais/{idEmpresa}	Dados da empresa
GET	/listagem/minhaconta/dadosinstituicao/{idInstituicao}	Dados de instituição
GET	/listagem/minhaconta/dadosendereco/{idEndereco}	Endereço por ID
GET	/listagem/(pessoas, enderecos, logins, empresas, instAcademicas, vagasDasEmpresas)	Listagens gerais

🔗 Links
GitHub
Front-end: https://github.com/Eduardo-Locaspi/gs_levelup_frontend.git

Back-end: https://github.com/victoralves10/levelup-DDD-java

Links dos deploys:
Frontend: https://levelup-six-delta.vercel.app/
BAckend: https://levelup-jtfg.onrender.com/

🧑‍💻 Autores e Créditos
Eduardo Batista Locaspi — RM 561713
https://github.com/Eduardo-Locaspi

Victor Alves Lopes — RM 561833
https://github.com/victoralves10

📧 Contato
Nome	E-mail
Eduardo Batista Locaspi	rm561713@fiap.com.br
Victor Alves Lopes	rm561833@fiap.com.br


Vídeo Pitch
link: https://www.youtube.com/shorts/_mLTC6II3CQ

Imagens Plataforma:
https://docs.google.com/document/d/1ddiYhCDwlibD-CpIXiWSRc8a_vupulgZJibdoX8aABo/edit?usp=sharing
