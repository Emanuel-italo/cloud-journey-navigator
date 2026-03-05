import { motion } from "framer-motion";
import {
  Server, AlertTriangle, Zap, HardDrive, Cloud, TrendingDown,
  ShieldCheck, Scaling, ChevronDown, ChevronUp, Home, Hotel
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DiagnosticSection = () => {
  const [analogyOpen, setAnalogyOpen] = useState(false);

  return (
    <section id="diagnostico" className="section-padding max-w-7xl mx-auto">
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          O Diagnóstico
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          Entenda por que manter servidores físicos está custando caro — e como a nuvem resolve isso.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Datacenter Físico */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="h-full border-destructive/30 bg-destructive/5">
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">Datacenter Físico</h3>
                  <p className="text-sm text-muted-foreground">Modelo atual</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Zap, label: "Custo de energia alto", desc: "Conta de luz crescente para manter servidores ligados 24h", color: "destructive" },
                  { icon: HardDrive, label: "Limite de espaço", desc: "Sala cheia, sem espaço para novos servidores", color: "destructive" },
                  { icon: AlertTriangle, label: "Risco de falha", desc: "Se o hardware queimar, o sistema para", color: "warning" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-card">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      item.color === "destructive" ? "bg-destructive/10" : "bg-warning/10"
                    }`}>
                      <item.icon className={`w-4 h-4 ${
                        item.color === "destructive" ? "text-destructive" : "text-warning"
                      }`} />
                    </div>
                    <div>
                      <Badge variant="destructive" className="mb-1 text-xs">{item.label}</Badge>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Nuvem */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Card className="h-full border-success/30 bg-success/5">
            <CardContent className="p-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center animate-float">
                  <Cloud className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground">Computação em Nuvem</h3>
                  <p className="text-sm text-muted-foreground">O novo caminho</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { icon: TrendingDown, label: "Pague só pelo uso", desc: "Sem comprar equipamento caro antecipadamente" },
                  { icon: Scaling, label: "Cresce com você", desc: "Precisa de mais? A nuvem expande automaticamente" },
                  { icon: ShieldCheck, label: "Segurança de ponta", desc: "Criptografia, backups automáticos e monitoramento 24h" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-card">
                    <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-success" />
                    </div>
                    <div>
                      <Badge className="mb-1 text-xs bg-success text-success-foreground border-transparent">{item.label}</Badge>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Analogia */}
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <Card className="glass-card cursor-pointer" onClick={() => setAnalogyOpen(!analogyOpen)}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Home className="w-5 h-5 text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Hotel className="w-5 h-5 text-secondary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">
                    💡 Analogia: Comprar uma Casa vs. Alugar um Hotel
                  </h3>
                  <p className="text-sm text-muted-foreground">Clique para entender a diferença</p>
                </div>
              </div>
              {analogyOpen ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
            </div>

            {analogyOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 pt-4 border-t border-border space-y-3"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-primary/5">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Home className="w-4 h-4" /> Comprar uma Casa (Datacenter)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Você paga tudo antecipadamente, cuida de manutenção, reformas, segurança, encanamento…
                      Se precisar de mais espaço, tem que comprar outra casa. Se algo quebrar, o conserto é por sua conta.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/5">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Hotel className="w-4 h-4" /> Alugar um Hotel (Nuvem)
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Você paga pela diária, usa o que precisa. Limpeza, segurança, manutenção — tudo incluso.
                      Precisa de mais quartos? Reserva mais. Não precisa? Cancela. Simples assim.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default DiagnosticSection;
