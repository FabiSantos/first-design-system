//pega as propriedades e repassa para a primeira propiedade do children
import { Slot } from "@radix-ui/react-slot";
import { clsx } from 'clsx'
import { ReactNode } from "react";


// interface com os valores a ser usados por props
export interface ButtonProps {
    children: ReactNode;
    asChild: boolean
}


//desetruturar as propiedades, por padrao deixamos o tamnho com medio, pois o size é opcional, definido com a interrogaçao
export const Button = ({ children, asChild }: ButtonProps) => {
    const Component = asChild ? Slot : 'button'
    return (
        <Component className={clsx(
            'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full  transitions:colors hover:bg-cyan-400 focus:ring-white ring-2',
        )}
        >
            {children}
        </Component>
    )
}
// por padrao se define como span
//trocamos o texto em duro por children