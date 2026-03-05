import { Cloud, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface HeaderProps {
  progress: number;
  onExport: () => void;
}

const Header = ({ progress, onExport }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Cloud className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-sm md:text-base font-display font-bold text-foreground leading-tight">
              Jornada para a Nuvem
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">Dashboard Interativo</p>
          </div>
        </div>

        <Button onClick={onExport} size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground gap-2">
          <FileDown className="w-4 h-4" />
          <span className="hidden sm:inline">Exportar Resumo</span>
          <span className="sm:hidden">PDF</span>
        </Button>
      </div>
      <Progress value={progress} className="h-1 rounded-none" />
    </header>
  );
};

export default Header;
