import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
  className?: string;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-[var(--accent-bronze)] text-white hover:bg-[#7a6755] hover:shadow-lg",
    secondary: "bg-[var(--accent-gold)] text-white hover:bg-[var(--accent-gold-dark)] hover:shadow-lg",
    outline: "border-2 border-[var(--accent-gold)] text-[var(--accent-gold-dark)] hover:bg-[var(--accent-gold)] hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
