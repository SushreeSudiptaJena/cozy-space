import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { Users, DollarSign, TrendingUp, ShoppingCart } from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "12,847",
    change: "+14.2%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Revenue",
    value: "$48,352",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: DollarSign,
  },
  {
    title: "Growth Rate",
    value: "23.5%",
    change: "+4.1%",
    changeType: "positive" as const,
    icon: TrendingUp,
  },
  {
    title: "Active Orders",
    value: "1,284",
    change: "-2.3%",
    changeType: "negative" as const,
    icon: ShoppingCart,
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar />
      
      <div className="ml-64">
        <DashboardHeader />
        
        <main className="p-6">
          {/* Welcome section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, John 👋</h1>
            <p className="text-muted-foreground">
              Here's what's happening with your projects today.
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatsCard key={stat.title} {...stat} delay={index * 0.1} />
            ))}
          </div>

          {/* Charts and activity */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div>
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
