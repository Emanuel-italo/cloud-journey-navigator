

# Dashboard Interativo: Jornada para a Nuvem ☁️

Uma aplicação educativa e interativa em formato de storytelling, voltada para diretores e executivos de uma operadora de cartões de crédito que precisa migrar seus servidores físicos para a nuvem.

---

## Estrutura e Navegação

- **SPA com navegação por seções** (scroll suave ou stepper lateral)
- **Header fixo** com logo da empresa, título "Jornada para a Nuvem" e botão "Exportar Resumo Executivo"
- **Tema corporativo** em tons de azul/roxo financeiro, tipografia grande e legível
- **Barra de progresso** no topo indicando em qual seção o usuário está

---

## Seção 1 — O Diagnóstico: Físico vs. Nuvem

- Layout dividido em **dois painéis lado a lado** (antes/depois)
- **Lado Esquerdo (Datacenter Físico):** ilustração com ícones de servidor, alertas visuais piscando (custo de energia alto, limite de espaço, risco de falha de hardware) usando badges vermelhos/amarelos
- **Lado Direito (Nuvem):** visual limpo e expansivo com ícones de elasticidade, economia e segurança em badges verdes
- **Card de analogia** na parte inferior: "Comprar uma casa vs. Alugar um hotel com tudo incluso" com toggle para expandir a explicação

## Seção 2 — Arquitetura Descomplicada

- **3 blocos clicáveis** dispostos horizontalmente conectados por setas animadas:
  1. 📱 **O Cliente** (app no celular)
  2. 🧠 **O Cérebro na Nuvem** (servidores automáticos)
  3. 🔒 **O Cofre Seguro** (banco de dados criptografado)
- Ao clicar em cada bloco, um **painel lateral ou modal** aparece com explicação simples, sem jargões técnicos
- Animação de "dados fluindo" entre os blocos ao interagir

## Seção 3 — Calculadora de Valor (ROI)

- **Slider** com 3 posições: Lenta (12 meses), Cautelosa (6 meses), Agressiva (3 meses)
- **Gráfico de barras** (Recharts) comparando:
  - CAPEX (modelo antigo): custo de compra de servidores + manutenção
  - OPEX (nuvem): mensalidade por uso
- Os valores mudam dinamicamente conforme o slider
- Cards com **métricas resumidas**: economia estimada, tempo de retorno, redução de risco
- Esses valores serão capturados para o PDF exportável

## Seção 4 — Plano de Migração em 3 Passos

- **Stepper vertical animado** com 3 etapas:
  1. 🏠 **Arrumar a Casa** — inventário dos sistemas e preparação da equipe
  2. 🧪 **O Teste** — migrar um sistema pequeno e não crítico para validar
  3. 🚀 **A Grande Virada** — migração completa e desligamento do datacenter
- Cada passo expande ao clicar, revelando detalhes, duração estimada e checklist de ações

## Seção 5 — Segurança e Governança

- **Checklist interativo** com toggles/checkboxes para cada preocupação:
  - ✅ Onde ficam os dados? (Resposta: datacenters certificados no Brasil)
  - ✅ Quem tem acesso? (Controle granular de permissões)
  - ✅ Como funciona o backup? (Cópias automáticas em múltiplas regiões)
  - ✅ E se der problema? (Recuperação em minutos, não dias)
- Ao marcar todos os itens, aparece um **badge de "Diretoria Tranquila ✅"** com animação

## Exportar Resumo Executivo

- Botão fixo no header que gera um **PDF de 1 página** (usando html2canvas + jsPDF)
- O PDF captura: cenário escolhido na calculadora, economia estimada, passos do plano e status do checklist de segurança
- Layout do PDF limpo e corporativo, pronto para ser apresentado à diretoria

---

## Design e UX

- Paleta de cores: azul corporativo (#1e3a5f) com acentos em roxo financeiro (#6c3fa0) e branco
- Tipografia: fontes grandes e legíveis, hierarquia clara
- Ícones: Lucide React para todos os ícones (Server, Cloud, Shield, Smartphone, TrendingUp, etc.)
- Animações sutis de entrada nas seções (fade-in ao scroll)
- Totalmente responsivo (mobile e desktop)

