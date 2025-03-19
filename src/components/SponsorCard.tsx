
import React from 'react';
import { cn } from "@/lib/utils";

interface SponsorCardProps {
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  className?: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ 
  name, 
  logo, 
  tier,
  className 
}) => {
  const tierColors = {
    platinum: "bg-gradient-to-br from-slate-100 to-slate-300 border-slate-300",
    gold: "bg-gradient-to-br from-amber-50 to-amber-200 border-amber-300",
    silver: "bg-gradient-to-br from-neutral-100 to-neutral-200 border-neutral-300",
    bronze: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
  };

  return (
    <div className={cn(
      "flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 hover:shadow-md border",
      tierColors[tier],
      className
    )}>
      <div className="w-24 h-24 flex items-center justify-center mb-4">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="max-w-full max-h-full object-contain" 
        />
      </div>
      <h3 className="text-base font-medium text-foreground">{name}</h3>
      <span className="text-xs uppercase tracking-wide mt-1 text-muted-foreground">
        {tier} Sponsor
      </span>
    </div>
  );
};

export default SponsorCard;
