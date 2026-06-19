# 🌐 BrowserMonitor

Uma extensão para navegadores que monitora o tempo de navegação em diferentes sites e gera estatísticas de uso em tempo real.

O projeto foi desenvolvido com o objetivo de estudar o desenvolvimento de extensões para navegadores utilizando apenas tecnologias web nativas, sem dependências externas.

---

## 📸 Demonstração

Adicione aqui capturas de tela da extensão.

### Dashboard

![Dashboard](screenshots/dashboard.png)

### Ranking de Sites

![Ranking](screenshots/ranking.png)

---

## ✨ Funcionalidades

* Monitoramento de sites visitados
* Registro de tempo de navegação por domínio
* Ranking dos sites mais acessados
* Contagem de visitas por site
* Site favorito baseado no tempo de uso
* Armazenamento local dos dados
* Exclusão completa dos dados registrados
* Interface simples e intuitiva

---

## 🛠 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* Chrome Extensions API (Manifest V3)

---

## 📂 Estrutura do Projeto

```text
BrowserMonitor/

├── background.js
├── popup.html
├── popup.js
├── style.css
├── manifest.json
├── privacy-policy.html

├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png

└── screenshots/
```

---

## ⚙️ Como Instalar

1. Baixe ou clone este repositório.
2. Abra o Google Chrome.
3. Acesse:

```text
chrome://extensions
```

4. Ative o **Modo do Desenvolvedor**.
5. Clique em **Carregar sem compactação**.
6. Selecione a pasta do projeto.

Pronto. A extensão estará disponível na barra de extensões.

---

## 📊 Como Funciona

O BrowserMonitor monitora:

* Troca de abas
* Mudanças de URL
* Tempo gasto em cada domínio

Os dados são armazenados localmente utilizando:

```javascript
chrome.storage.local
```

Nenhuma informação é enviada para servidores externos.

---

## 🔒 Privacidade

Todos os dados permanecem armazenados exclusivamente no navegador do usuário.

A extensão:

* Não coleta senhas
* Não coleta formulários
* Não coleta cookies
* Não compartilha informações com terceiros
* Não envia dados para servidores externos

---

## 🎯 Objetivos do Projeto

Este projeto foi desenvolvido para fins educacionais e para estudo de:

* Desenvolvimento de extensões Chrome
* Manifest V3
* Eventos do navegador
* Armazenamento local
* Manipulação de dados em JavaScript
* Arquitetura de extensões

---

## 🚀 Possíveis Melhorias Futuras

* Exportação para JSON
* Exportação para CSV
* Dashboard avançado
* Estatísticas diárias e semanais
* Gráficos interativos
* Sincronização entre dispositivos
* Tema personalizável

---

## 📦 Versão

```text
v1.0.0
```

---

## 👨‍💻 Autor

Desenvolvido por **jp**.

Projeto criado para aprendizado prático de desenvolvimento web e extensões para navegadores.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.
