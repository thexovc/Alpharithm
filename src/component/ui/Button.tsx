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
    const baseClasses = "rounded font-medium transition duration-300";

    const variantClasses: Record<Required<ButtonProps>['variant'], string> = {
        primary: "bg-white text-blue-900 hover:bg-blue-100",
        secondary: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-white text-white hover:bg-white hover:text-blue-900"
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