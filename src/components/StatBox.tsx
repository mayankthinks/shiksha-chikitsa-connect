
import React from 'react';
import { cn } from "@/lib/utils";

interface StatBoxProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

const StatBox: React.FC<StatBoxProps> = ({ 
  value, 
  label, 
  icon,
  className 
}) => {
  return (
    <div className={cn(
      "p-6 rounded-xl bg-white shadow-sm border border-border/50",
      className
    )}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-3xl md:text-4xl font-bold">{value}</p>
          <p className="text-sm text-muted-foreground mt-1">{label}</p>
        </div>
        {icon && (
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatBox;
