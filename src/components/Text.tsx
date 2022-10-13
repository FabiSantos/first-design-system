//pega as propriedades e repassa para a primeira propiedade do children
import { Slot } from "@radix-ui/react-slot";
import { clsx } from 'clsx'
import { ReactNode } from "react";


// interface com os valores a ser usados por props
export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild: boolean
}


//desetruturar as propiedades, por padrao deixamos o tamnho com medio, pois o size é opcional, definido com a interrogaçao
export const Text = ({ size = 'md', children, asChild }: TextProps) => {
    const Component = asChild ? Slot : 'span'
    return (
        <Component className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
            }
        )}
        >
            {children}
        </Component>
    )
}
// por padrao se define como span
//trocamos o texto em duro por children