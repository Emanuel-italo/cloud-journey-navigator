import { motion, AnimatePresence } from "framer-motion";
import { Home, FlaskConical, Rocket, ChevronDown, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const steps = [
  {
    icon: Home,
    emoji: "🏠",
    title: "Arrumar a Casa",
    subtitle: "Inventário e preparação",
    duration: "4–6 semanas",
    details: [
      "Mapear todos os sistemas e servidores existentes",
      "Identificar quais sistemas são críticos e quais podem ser migrados primeiro",
      "Treinar a equipe de TI nos conceitos básicos de nuvem",
      "Definir o orçamento e cronograma com a diretoria",
      "Escolher o provedor de nuvem mais adequado",
    ],
  },
  {
    icon: FlaskConical,
    emoji: "🧪",
    title: "O Teste",
    subtitle: "Migrar um sistema pequeno",
    duration: "2–4 semanas",
    details: [
      "Escolher um sistema pequeno e não crítico (ex: site institucional ou sistema de relatórios)",
      "Migrar para a nuvem em ambiente de teste",
      "Validar performance, segurança e custos reais",
      "Documentar lições aprendidas",
      "Ganhar confiança da equipe e da diretoria",
    ],
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "A Grande Virada",
    subtitle: "Migração completa",
    duration: "8–16 semanas",
    details: [
      "Migrar os sistemas críticos com janela de manutenção planejada",
      "Manter servidores antigos em paralelo por segurança (período de transição)",
      "Monitorar performance e custos em tempo real",
      "Desligar servidores físicos gradualmente",
      "Celebrar com a equipe! 🎉",
    ],
  },
];

const MigrationStepper = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <section id="migracao" className="section-padding max-w-7xl mx-auto">
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          O Caminho das Pedras
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          Plano de migração em 3 passos claros. Clique em cada etapa para ver os detalhes.
        </p>
      </motion.div>

      <div className="space-y-4 max-w-2xl mx-auto">
        {steps.map((step, i) => {
          const isExpanded = expandedStep === i;
          return (
            <motion.div
              key={step.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card
                className={`cursor-pointer transition-all duration-300 ${
                  isExpanded ? "border-secondary shadow-lg" : "hover:shadow-md"
                }`}
                onClick={() => setExpandedStep(isExpanded ? null : i)}
              >
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    {/* Step number connector */}
                    <div className="flex flex-col items-center">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${
                        isExpanded ? "bg-secondary text-secondary-foreground" : "bg-muted"
                      }`}>
                        {step.emoji}
                      </div>
                      {i < steps.length - 1 && (
                        <div className="w-0.5 h-4 bg-border mt-2 hidden md:block" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-display font-bold text-foreground">
                            Passo {i + 1}: {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                            {step.duration}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 ml-16 space-y-2"
                      >
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-success shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MigrationStepper;
