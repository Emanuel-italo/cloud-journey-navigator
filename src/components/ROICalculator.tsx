import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, ShieldCheck } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { useState, forwardRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scenarios = [
  { label: "Lenta", months: 12, capex: 2400000, opex: 960000, saving: 60, roi: 18, risk: 30 },
  { label: "Cautelosa", months: 6, capex: 2400000, opex: 720000, saving: 70, roi: 10, risk: 55 },
  { label: "Agressiva", months: 3, capex: 2400000, opex: 540000, saving: 78, roi: 6, risk: 75 },
];

const formatCurrency = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(v);

const ROICalculator = forwardRef<HTMLDivElement>((_, ref) => {
  const [scenarioIndex, setScenarioIndex] = useState(1);
  const scenario = scenarios[scenarioIndex];

  const chartData = [
    { name: "CAPEX\n(Modelo Antigo)", value: scenario.capex, type: "capex" },
    { name: "OPEX\n(Nuvem)", value: scenario.opex, type: "opex" },
  ];

  return (
    <section id="calculadora" className="section-padding max-w-7xl mx-auto" ref={ref}>
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          Calculadora de Valor
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          Arraste o controle para comparar cenários de migração e ver a economia projetada.
        </p>
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Slider */}
        <Card className="glass-card mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-foreground">Velocidade da Migração</span>
              <span className="text-sm font-bold text-secondary">
                {scenario.label} — {scenario.months} meses
              </span>
            </div>
            <Slider
              value={[scenarioIndex]}
              onValueChange={(v) => setScenarioIndex(v[0])}
              max={2}
              min={0}
              step={1}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>🐢 Lenta (12 meses)</span>
              <span>⚖️ Cautelosa (6 meses)</span>
              <span>🚀 Agressiva (3 meses)</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Chart */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Comparação de Custos (Anual)</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={chartData} barSize={60}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis
                    tickFormatter={(v) => `R$${(v / 1000000).toFixed(1)}M`}
                    tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
                  />
                  <Tooltip
                    formatter={(v: number) => [formatCurrency(v), "Custo"]}
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {chartData.map((entry) => (
                      <Cell
                        key={entry.type}
                        fill={entry.type === "capex" ? "hsl(var(--destructive))" : "hsl(var(--success))"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Metrics */}
          <div className="space-y-4">
            {[
              {
                icon: TrendingUp,
                label: "Economia Estimada",
                value: `${scenario.saving}%`,
                desc: `Economize até ${formatCurrency(scenario.capex - scenario.opex)} por ano`,
                color: "text-success",
              },
              {
                icon: Clock,
                label: "Retorno do Investimento",
                value: `${scenario.roi} meses`,
                desc: "Tempo estimado para recuperar o investimento na migração",
                color: "text-secondary",
              },
              {
                icon: ShieldCheck,
                label: "Redução de Risco",
                value: `${scenario.risk}%`,
                desc: "Menos chance de parada por falha de hardware",
                color: "text-primary",
              },
            ].map((metric) => (
              <Card key={metric.label} className="glass-card">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className={`text-2xl font-display font-bold ${metric.color}`}>{metric.value}</p>
                    <p className="text-xs text-muted-foreground">{metric.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
});

ROICalculator.displayName = "ROICalculator";
export default ROICalculator;
