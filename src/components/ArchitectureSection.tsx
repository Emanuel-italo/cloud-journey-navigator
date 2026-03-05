import { motion } from "framer-motion";
import { Smartphone, Brain, Lock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const blocks = [
  {
    icon: Smartphone,
    emoji: "📱",
    title: "O Cliente",
    subtitle: "App no celular",
    color: "primary",
    detail: {
      title: "📱 O Cliente — App no Celular",
      description:
        "É o aplicativo que o cliente final usa no celular para fazer pagamentos, consultar saldo e receber notificações. Ele se conecta de forma segura aos nossos servidores na nuvem para processar cada transação em tempo real.",
    },
  },
  {
    icon: Brain,
    emoji: "🧠",
    title: "O Cérebro na Nuvem",
    subtitle: "Servidores automáticos",
    color: "secondary",
    detail: {
      title: "🧠 O Cérebro na Nuvem — Servidores Automáticos",
      description:
        "São os servidores que processam todas as transações. Diferente de um servidor físico que tem capacidade fixa, os servidores na nuvem crescem automaticamente quando há pico de uso (como na Black Friday) e reduzem quando a demanda cai — você só paga pelo que usar.",
    },
  },
  {
    icon: Lock,
    emoji: "🔒",
    title: "O Cofre Seguro",
    subtitle: "Banco de dados criptografado",
    color: "accent",
    detail: {
      title: "🔒 O Cofre Seguro — Banco de Dados",
      description:
        "É onde ficam guardados todos os dados financeiros dos clientes, como um cofre de banco. As informações são criptografadas (embaralhadas de forma que só o sistema consegue ler) e têm cópias de segurança automáticas em locais diferentes, garantindo que nada se perca.",
    },
  },
];

const ArchitectureSection = () => {
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

  return (
    <section id="arquitetura" className="section-padding max-w-7xl mx-auto">
      <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
          Arquitetura Descomplicada
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          Como funciona? Apenas 3 peças conectadas. Clique em cada uma para entender.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
        {blocks.map((block, i) => (
          <motion.div
            key={block.title}
            className="flex items-center gap-2 md:gap-4"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Card
              className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-56 border-2 hover:border-secondary/50"
              onClick={() => setSelectedBlock(i)}
            >
              <CardContent className="p-6 text-center space-y-3">
                <div className="text-4xl mb-2">{block.emoji}</div>
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <block.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-foreground">{block.title}</h3>
                <p className="text-sm text-muted-foreground">{block.subtitle}</p>
              </CardContent>
            </Card>

            {i < blocks.length - 1 && (
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="hidden md:block"
              >
                <ArrowRight className="w-6 h-6 text-secondary" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <Dialog open={selectedBlock !== null} onOpenChange={() => setSelectedBlock(null)}>
        {selectedBlock !== null && (
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="font-display text-xl">
                {blocks[selectedBlock].detail.title}
              </DialogTitle>
              <DialogDescription className="text-base leading-relaxed pt-2">
                {blocks[selectedBlock].detail.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ArchitectureSection;
