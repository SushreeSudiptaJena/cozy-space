import { Bell, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const DashboardHeader = () => {
  return (
    <header className="h-16 border-b border-border bg-background/80 backdrop-blur-sm flex items-center justify-between px-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-md flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-10 bg-secondary border-transparent focus:border-primary"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="hero" size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          New Project
        </Button>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </Button>
      </div>
    </header>
  );
};
