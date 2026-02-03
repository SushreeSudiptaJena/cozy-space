import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-12 md:p-20 overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-cyan-500/10 to-transparent" />
          <div className="absolute inset-0 glass" />
          
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your{" "}
              <span className="gradient-text">workflow</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join thousands of teams already using Pulse to build faster, 
              collaborate better, and ship with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="group" asChild>
                <Link to="/dashboard">
                  Get started for free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg">
                Talk to sales
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
