
import React from 'react';
import { cn } from "@/lib/utils";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role, 
  avatar,
  className 
}) => {
  return (
    <div className={cn(
      "p-6 rounded-xl bg-white shadow-sm border border-border/50 relative",
      className
    )}>
      <QuoteIcon className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
      <p className="text-muted-foreground italic mb-6">"{quote}"</p>
      <div className="flex items-center gap-3">
        {avatar ? (
          <img 
            src={avatar} 
            alt={author} 
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium text-foreground">{author}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
