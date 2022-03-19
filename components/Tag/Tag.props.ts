import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    size: 'medium' | 'big',
    color?: 'ghost' | 'red' | 'grey' | 'primary' | 'green',
    href?: string
}