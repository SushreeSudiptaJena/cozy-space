import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: LucideIcon;
  delay?: number;
}

export const StatsCard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  delay = 0,
}: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/20 group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span
          className={`text-sm font-medium ${
            changeType === "positive" ? "text-emerald-400" : "text-rose-400"
          }`}
        >
          {change}
        </span>
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-sm text-muted-foreground">{title}</p>
    </motion.div>
  );
};
