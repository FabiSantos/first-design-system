import { Slot } from "@radix-ui/react-slot";
import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';
/* import { TextInput } from './TextInput'; */



// interface com os valores a ser usados por props, importo desde react com extends, para importar todas as propiedades que o input normal recebe do html
export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { }

//patner de composiçao do react ao inves de retornar um componente com muitas variaçoes, é melhor exportar varios componentes com a variaçoes por separado

export interface TextInputRootProps {
    children: ReactNode
}

export interface TextInputIconProps {
    children: ReactNode
}

const TextInputRoot = (props: TextInputRootProps) => {

    return (
        <div className={clsx(
            ' flex items-center gap-3 py-4 px-3 h-12 rounded  bg-gray-800 w-full focus-within:ring-2 ring-cyan-400 ',
        )}>
            {props.children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInputIcon.Root'

const TextInputIcon = (props: TextInputIconProps) => {

    return (
        <Slot className=" w-6 h-6 text-gray-400">
            {props.children}
        </Slot>
    )
}
TextInputIcon.displayName = 'TextInputIcon.Icon'

const TextInputInput = (props: TextInputInputProps) => {
    return (
        <input className='bg-transparent flex-1 text-xs placeholder:text-gray-400  text-gray-100 outline-none'
            {...props}
        />
    )
}
TextInputInput.displayName = 'TextInputIcon.Input'
export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}

// por padrao se define como span
//trocamos o texto em duro por children