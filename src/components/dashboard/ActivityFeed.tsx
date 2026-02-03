import { motion } from "framer-motion";
import { MoreHorizontal, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const recentActivity = [
  {
    id: 1,
    title: "New user signup",
    description: "sarah@example.com joined the platform",
    time: "2 min ago",
    type: "user",
  },
  {
    id: 2,
    title: "Project deployed",
    description: "Marketing website v2.1 is now live",
    time: "15 min ago",
    type: "deploy",
  },
  {
    id: 3,
    title: "Revenue milestone",
    description: "Monthly recurring revenue hit $50k",
    time: "1 hour ago",
    type: "revenue",
  },
  {
    id: 4,
    title: "Team member added",
    description: "Alex joined the engineering team",
    time: "3 hours ago",
    type: "team",
  },
  {
    id: 5,
    title: "Bug fixed",
    description: "Payment gateway issue resolved",
    time: "5 hours ago",
    type: "bug",
  },
];

export const ActivityFeed = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="rounded-2xl glass p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {recentActivity.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-cyan-400/20 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{activity.title}</p>
              <p className="text-xs text-muted-foreground truncate">
                {activity.description}
              </p>
            </div>
            <span className="text-xs text-muted-foreground shrink-0">
              {activity.time}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
