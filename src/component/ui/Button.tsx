import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant" | "size"> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}: ButtonProps) => {
    const baseClasses = "rounded-lg cursor-pointer font-semibold transition duration-300";

    const variantClasses: Record<Required<ButtonProps>['variant'], string> = {
        primary: "bg-white text-[#05152C] hover:bg-[#03061D] hover:text-white",
        secondary: "bg-[#03217F] text-white border-[#22263F] border-2",
        outline: "border border-white text-white hover:bg-white hover:text-[#03061D]"
    };

    const sizeClasses: Record<Required<ButtonProps>['size'], string> = {
        sm: "px-4 py-1 text-sm",
        md: "px-5 py-2",
        lg: "px-6 py-3 text-lg"
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`;

    return (
        <motion.button
            className={classes}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;