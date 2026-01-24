import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  href,
  ...props 
}) => {
  // Se añade relative, z-50, touch-manipulation y animate-sway
  const baseStyles = "relative z-50 inline-flex items-center justify-center font-extrabold uppercase tracking-widest text-sm transition-all duration-300 ease-out border rounded-full px-10 py-4 cursor-pointer no-underline touch-manipulation select-none active:scale-95 animate-sway";
  
  const variants = {
    primary: "bg-gradient-to-br from-premium-gold to-premium-gold-dark text-premium-dark border-transparent shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:brightness-110",
    outline: "bg-transparent text-premium-gold border-premium-gold hover:bg-premium-gold/10"
  };

  const classes = `${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};