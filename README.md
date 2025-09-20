# 📊 iInvestment - Plataforma de Gestão de Investimentos

Uma aplicação moderna e intuitiva para gerenciamento de carteira de investimentos, desenvolvida com as mais recentes tecnologias do ecossistema Angular.

## 🎯 Sobre o Projeto

O **iInvestment** é uma plataforma completa para acompanhamento e gestão de investimentos, oferecendo aos usuários uma interface elegante e funcional para:

- 📈 Visualizar carteira de investimentos
- 💰 Acompanhar rentabilidade
- 📊 Analisar performance de ativos
- 🔍 Consultar detalhes específicos de cada investimento
- ❓ Acessar FAQ e suporte
- ✅ Confirmar operações com feedback visual

## 🚀 Tecnologias Utilizadas

### Frontend

- **Angular 20** - Framework principal com as últimas funcionalidades
- **Angular Material 20** - Biblioteca de componentes UI/UX moderna
- **TypeScript 5.9** - Tipagem estática e recursos avançados
- **SCSS** - Estilização avançada com suporte a variáveis e mixins
- **Lucide Angular** - Ícones modernos e customizáveis

### Backend & Dados

- **JSON Server** - API REST simulada para desenvolvimento
- **RxJS 7.8** - Programação reativa e gerenciamento de estado

### Ferramentas de Desenvolvimento

- **Angular CLI 20** - Ferramentas de linha de comando
- **npm-run-all** - Execução paralela de scripts
- **Prettier** - Formatação automática de código

## 🏗️ Arquitetura do Projeto

```
src/
├── app/
│   ├── pages/                    # Páginas principais
│   │   ├── home-page/           # Dashboard principal
│   │   ├── detail-investment/   # Detalhes do investimento
│   │   ├── faq-page/           # Perguntas frequentes
│   │   ├── success-page/       # Confirmação de ações
│   │   └── error/              # Tratamento de erros
│   ├── shared/                  # Componentes reutilizáveis
│   │   ├── components/         # Componentes compartilhados
│   │   ├── services/          # Serviços globais
│   │   └── constants/         # Constantes da aplicação
│   └── styles/                 # Estilos globais e temas
└── public/                     # Assets estáticos
```

## 🛠️ Funcionalidades

### ✨ Principais Features

- **Dashboard Interativo**: Visão geral da carteira com cards informativos
- **Detalhamento de Ativos**: Informações completas sobre cada investimento
- **Sistema de Notificações**: Feedback visual para ações do usuário
- **Interface Responsiva**: Adaptável a diferentes dispositivos
- **Tema Customizado**: Design system consistente com Angular Material

### 📱 Componentes Especiais

- **Bottom Sheet**: Modais deslizantes para ações rápidas
- **Cards de Investimento**: Visualização otimizada de dados financeiros
- **Empty State**: Tratamento elegante para estados vazios
- **Header Dinâmico**: Navegação contextual

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

### Instalação

```bash
# Clone o repositório
git clone https://github.com/LucasMartinsStore/iInvestment.git

# Acesse o diretório
cd project_invest

# Instale as dependências
npm install
```

### Executando o Projeto

```bash
# Inicia o servidor de desenvolvimento e a API mock
npm start

# Ou execute separadamente:
npm run start:app    # Angular dev server (http://localhost:4200)
npm run start:mock   # JSON Server API (http://localhost:3000)
```

### Scripts Disponíveis

```bash
npm run build        # Build de produção
npm run watch        # Build em modo watch
```

## 📊 API Mock

O projeto utiliza **JSON Server** para simular uma API REST completa com dados realísticos de investimentos:

- **Endpoint**: `http://localhost:3000/investimentos`
- **Dados**: Ações, fundos, títulos com informações detalhadas
- **Features**: listagem e filtros

## 🎨 Design System

- **Cores**: Paleta customizada com tons de azul e verde
- **Tipografia**: Roboto (padrão Material Design)
- **Componentes**: Baseados no Angular Material com customizações
- **Responsividade**: Mobile-first approach

## 📈 Próximos Passos

- [ ] Integração com APIs reais de mercado financeiro
- [ ] Implementação de autenticação
- [ ] Dashboard com gráficos avançados
- [ ] Notificações push
- [ ] Teste unitário em jest

## 👥 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Fazer commit das mudanças
4. Fazer push para a branch
5. Abrir um Pull Request

---

Desenvolvido com ❤️ usando Angular moderno e as melhores práticas de desenvolvimento.
