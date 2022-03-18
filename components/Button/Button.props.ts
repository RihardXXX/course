import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";


export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    apeareance: 'primary' | 'ghost',
    arrow?: 'right' | 'down' | undefined
}