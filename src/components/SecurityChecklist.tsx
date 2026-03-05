import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, DatabaseBackup, LifeBuoy, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useState, forwardRef } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const items = [
  {
    icon: MapPin,
    question: "Onde ficam os dados?",
    answer: "Em datacenters certificados no Brasil, com as mais rigorosas certificações de segurança do mercado financeiro (PCI-DSS, SOC 2, ISO 27001).",
  },
  {
    icon: Users,
    question: "Quem tem acesso?",
    answer: "Controle granular de permissões: cada pessoa só acessa exatamente o que precisa. Todas as ações são registradas em log de auditoria.",
  },
  {
    icon: DatabaseBackup,
    question: "Como funciona o backup?",
    answer: "Cópias automáticas feitas a cada hora, armazenadas em pelo menos 2 regiões diferentes. Mesmo que um datacenter inteiro pare, seus dados estão seguros.",
  },
  {
    icon: LifeBuoy,
    question: "E se der problema?",
    answer: "Recuperação em minutos, não dias. O sistema troca automaticamente para servidores de reserva sem que o cliente perceba qualquer interrupção.",
  },
];

const SecurityChecklist = forwardRef<HTMLDivElement>((_, ref) => {
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const allChecked = checked.every(Boolean);

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <section id="seguranca" className="section-padding max-w-7xl mx-auto" ref={ref}>
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          Segurança e Governança
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          As perguntas que a diretoria precisa ver respondidas. Marque cada item após revisá-lo.
        </p>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-4">
        {items.map((item, i) => (
          <motion.div
            key={item.question}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className={`transition-all duration-300 ${checked[i] ? "border-success/40 bg-success/5" : ""}`}>
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    checked[i] ? "bg-success/10" : "bg-muted"
                  }`}>
                    <item.icon className={`w-5 h-5 ${checked[i] ? "text-success" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-semibold text-foreground">{item.question}</h3>
                      <Switch checked={checked[i]} onCheckedChange={() => toggle(i)} />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        <AnimatePresence>
          {allChecked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex justify-center pt-4"
            >
              <Badge className="text-base px-6 py-3 bg-success text-success-foreground border-transparent gap-2">
                <ShieldCheck className="w-5 h-5" />
                Diretoria Tranquila ✅
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

SecurityChecklist.displayName = "SecurityChecklist";
export default SecurityChecklist;
