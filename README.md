# PitStop · Cantina CESAR

> **Fundamentos de Desenvolvimento de Software (FDS) · Capítulo 5 (Engenharia de Software Moderna — Marco Tulio Valente)**

O **PitStop** é uma aplicação web e mobile-first criada para resolver o gargalo do intervalo na cantina da **CESAR School**: enquanto os alunos agendam seus pedidos pelo celular em um funil linear simples, escolhem a unidade de retirada (**Apolo**, **Brum** ou **Tiradentes**), consultam a projeção de fila por horário e acompanham a senha ao vivo com alertas de chamada no balcão, a equipe da cantina conta com:
- **Painel da Cantina & Visão Celular Balcão:** operação ágil em três etapas (*1. Na Fila*, *2. Em Preparo*, *3. Pronto no Balcão*), botão de **Reavisar** aluno no balcão e controle de **Estoque & Reposição** ordenado por prioridade;
- **Previsão & Métricas por Unidade:** indicadores operacionais e gráfico comparando a média histórica prevista com a demanda confirmada em cada prédio (**Apolo**, **Brum** e **Tiradentes**);
- **Modo TV (Painel de Senhas):** tela de acompanhamento para exibição nas unidades com colunas *Em Preparo* e *Pronto para Retirada*, relógio ao vivo e destaque para senhas chamadas.

---

## Equipe 5 — Integrantes e Contribuições

- **Gabriel Aragão:** Condução do *vibecoding*, definição da arquitetura orientada aos princípios do Capítulo 5, refinamento iterativo dos prompts e ajustes gerais de código, banco de dados e interface.
- **Lívia Acioli:** Definição das decisões de produto para a jornada linear do aluno, regras de negócio do pedido e acompanhamento de senhas em andamento.
- **Vitor Cauã:** Direcionamento visual da aplicação, decisões de identidade da marca, escolha de paleta, layout dos gráficos de projeção e experiência de uso (UX) nas visões mobile e Modo TV.
- **José Rodrigo:** Concepção do fluxo operacional da cantina (etapas do Kanban, lógica de rechamada no balcão e reposição de estoque por prioridade) e diretrizes para o cálculo de estimativa da fila.
- **Ricardo Freire:** Mapeamento das decisões arquiteturais frente aos princípios de projeto do Capítulo 5 (coesão, acoplamento, SOLID e Lei de Demeter) e revisão das métricas geradas.
- **João Gabriel:** Organização das etapas de trabalho do grupo, definição de escopo e prioridades do problema da cantina, estruturação da documentação e alinhamento da entrega.
- **Renato Veras:** Curadoria das opções do cardápio, sugestões de produtos, faixas de preço, tempos estimados de preparo e divisão dos pontos de retirada (Apolo, Brum e Tiradentes).
- **Andressa Souza:** Revisão da clareza das mensagens e notificações exibidas ao usuário, testes práticos do fluxo de agendamento e validação das telas.

---

## Como Rodar Localmente (Zero Dependências Externas)

O projeto utiliza apenas a biblioteca padrão do **Python 3** com banco de dados **SQLite (`pitstop.db`)** nativo e interface com **Tailwind CSS**.

```bash
python3 app.py
```

Acesse no navegador: **[http://localhost:8080](http://localhost:8080)**

---

## Decisões da Stack

- **Back-End & Domínio Orientado a Objetos:** `Python 3` (Classes abstratas `abc.ABC`, `dataclasses`, análise estática via `ast` para cálculo automático de métricas de projeto do Cap. 5.7).
- **Persistência Local:** `SQLite 3` (`pitstop.db` criado e populado automaticamente na primeira execução).
- **Front-End & UI:** `HTML5 + JavaScript ES6 + Tailwind CSS` com paleta de alto contraste (**Preto `#0A0A0A`, Branco `#FFFFFF` e Degradê Âmbar `#FBBF24`**), ícones vetoriais SVG e avisos sonoros sintetizados via **Web Audio API**.

---

## Onde Estão os Princípios do Capítulo 5 no Código?

Todo o código segue rigorosamente **Integridade Conceitual** (identificadores, classes, métodos, variáveis e tabelas em inglês; textos de interface em português):

| Princípio do Capítulo 5 | Arquivo e Classe / Método | Como melhora o projeto |
| :--- | :--- | :--- |
| **1. Integridade Conceitual** | Todo o repositório (`domain/`, `infrastructure/`, `app.py`, `static/app.js`) | Padronização arquitetural e léxica em inglês para código e contratos JSON, separando regras de domínio da camada HTTP e de persistência. |
| **2. Ocultamento de Informação (Encapsulamento)** | [`domain/entities.py`](./domain/entities.py) (`Product` e `Order`) | Os atributos `_stock`, `_price`, `_status` e `_call_count` são privados. O método `product.reserve_stock(quantity)` garante a invariante de que o estoque nunca fica negativo, e `order.increment_call_count()` encapsula as chamadas de balcão. |
| **3. Responsabilidade Única (SRP) & Alta Coesão (`LCOM = 0`)** | [`domain/services.py`](./domain/services.py) (`InventoryService`, `OrderService`, `LiveMetricsEngine`) | Em vez de uma *God Class* que mistura cardápio, pedido e métricas, cada serviço possui uma única razão para mudar e **LCOM = 0** (todos os métodos operam sobre os mesmos atributos coesos). |
| **4. Princípio Aberto/Fechado (OCP) & Substituição de Liskov (LSP)** | [`domain/strategies.py`](./domain/strategies.py) (`PaymentStrategy` e subclasses: `InstantPixPayment`, `PayOnPickupPayment`) | Para adicionar um novo meio de pagamento, basta criar uma nova subclasse de `PaymentStrategy` sem modificar `OrderService`. |
| **5. Segregação de Interfaces (ISP)** | [`domain/interfaces.py`](./domain/interfaces.py) (`CatalogReader`, `InventoryManager`, `OrderRepository`) | Clientes que apenas leem o cardápio não dependem de métodos de escrita ou de pedidos; interfaces pequenas e coesas por papel. |
| **6. Inversão de Dependências (DIP)** | [`domain/interfaces.py`](./domain/interfaces.py) + [`infrastructure/sqlite_repository.py`](./infrastructure/sqlite_repository.py) (`SqliteCanteenRepository`) | Os serviços de domínio em `domain/services.py` **não importam `sqlite3`**. Eles dependem de abstrações, permitindo trocar SQLite por outro banco sem tocar nas regras de negócio. |
| **7. Lei de Demeter & Composição em vez de Herança** | [`domain/entities.py`](./domain/entities.py) (`order.is_delayed()`) & [`domain/strategies.py`](./domain/strategies.py) (`SmartQueueCalculator`) | O cálculo de tempo de fila (`QueueSlaCalculator`) é injetado por **composição** nos serviços, e `order.is_delayed(now)` responde diretamente se o pedido estourou o SLA sem expor objetos internos em cadeia. |

---

## Métricas do Capítulo 5.7 (calculadas via AST em `domain/code_metrics.py`)

O módulo [`domain/code_metrics.py`](./domain/code_metrics.py) analisa a árvore sintática (AST) do código e compara a *God Class* com as classes refatoradas:

| Classe | LCOM | CBO | Complexidade Ciclomática máx. |
| :--- | :---: | :---: | :---: |
| `CanteenGodManager` (Go-Horse, antes) | **3** | 1 | **7** |
| `OrderService` | 0 | 6 | 6 |
| `InventoryService` | 0 | 1 | 3 |
| `LiveMetricsEngine` | 0 | 3 | 5 |
| `Product` / `Order` | 0 | 0 / 1 | 4 |
| `SmartQueueCalculator` | 0 | 2 | 2 |

> **Leitura do CBO:** o CBO dos serviços sobe porque eles passam a depender de **abstrações** (`OrderRepository`, `PaymentStrategy`...) em vez de `sqlite3` direto. É o *trade-off* da Inversão de Dependências: mais dependências, porém estáveis e desacopladas.
