import { useEffect, useState, useRef, useCallback } from "react";
import Header from "@/components/Header";
import DiagnosticSection from "@/components/DiagnosticSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ROICalculator from "@/components/ROICalculator";
import MigrationStepper from "@/components/MigrationStepper";
import SecurityChecklist from "@/components/SecurityChecklist";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const sectionIds = ["diagnostico", "arquitetura", "calculadora", "migracao", "seguranca"];

const Index = () => {
  const [progress, setProgress] = useState(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const roiRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleExport = useCallback(async () => {
    const el = mainRef.current;
    if (!el) return;

    // Create a summary div for PDF
    const summaryDiv = document.createElement("div");
    summaryDiv.style.cssText =
      "width:800px;padding:48px;font-family:sans-serif;background:#fff;color:#1e3a5f;position:fixed;left:-9999px;top:0;";
    summaryDiv.innerHTML = `
      <div style="text-align:center;margin-bottom:32px;">
        <h1 style="font-size:28px;font-weight:800;color:#1e3a5f;margin:0;">☁️ Jornada para a Nuvem</h1>
        <p style="font-size:14px;color:#666;margin-top:8px;">Resumo Executivo — ${new Date().toLocaleDateString("pt-BR")}</p>
        <hr style="border:none;border-top:2px solid #6c3fa0;margin-top:16px;"/>
      </div>
      <div style="margin-bottom:24px;">
        <h2 style="font-size:18px;color:#6c3fa0;margin-bottom:8px;">📊 Cenário Selecionado</h2>
        <p style="font-size:14px;line-height:1.6;">Confira os valores interativos na calculadora do dashboard para comparar CAPEX vs. OPEX em diferentes velocidades de migração.</p>
      </div>
      <div style="margin-bottom:24px;">
        <h2 style="font-size:18px;color:#6c3fa0;margin-bottom:8px;">🗺️ Plano de Migração</h2>
        <ol style="font-size:14px;line-height:1.8;padding-left:20px;">
          <li><strong>Arrumar a Casa</strong> — Inventário de sistemas e preparação da equipe</li>
          <li><strong>O Teste</strong> — Migrar sistema pequeno para validar</li>
          <li><strong>A Grande Virada</strong> — Migração completa e desligamento do datacenter</li>
        </ol>
      </div>
      <div style="margin-bottom:24px;">
        <h2 style="font-size:18px;color:#6c3fa0;margin-bottom:8px;">🔒 Segurança e Governança</h2>
        <ul style="font-size:14px;line-height:1.8;list-style:none;padding:0;">
          <li>✅ Dados em datacenters certificados no Brasil</li>
          <li>✅ Controle granular de permissões e auditoria</li>
          <li>✅ Backups automáticos em múltiplas regiões</li>
          <li>✅ Recuperação em minutos, não dias</li>
        </ul>
      </div>
      <div style="text-align:center;margin-top:32px;padding-top:16px;border-top:1px solid #ddd;">
        <p style="font-size:12px;color:#999;">Gerado automaticamente pelo Dashboard Jornada para a Nuvem</p>
      </div>
    `;
    document.body.appendChild(summaryDiv);

    try {
      const canvas = await html2canvas(summaryDiv, { scale: 2, useCORS: true });
      const pdf = new jsPDF("p", "mm", "a4");
      const imgW = 210;
      const imgH = (canvas.height * imgW) / canvas.width;
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, imgW, Math.min(imgH, 297));
      pdf.save("resumo-executivo-nuvem.pdf");
    } finally {
      document.body.removeChild(summaryDiv);
    }
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background">
      <Header progress={progress} onExport={handleExport} />
      <div className="pt-20 space-y-8">
        <DiagnosticSection />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <hr className="border-border" />
        </div>
        <ArchitectureSection />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <hr className="border-border" />
        </div>
        <ROICalculator ref={roiRef} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <hr className="border-border" />
        </div>
        <MigrationStepper />
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <hr className="border-border" />
        </div>
        <SecurityChecklist ref={securityRef} />

        {/* Footer */}
        <footer className="text-center py-12 text-sm text-muted-foreground border-t border-border">
          <p>☁️ Jornada para a Nuvem — Dashboard Interativo</p>
          <p className="mt-1">Feito para facilitar decisões estratégicas de migração</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
