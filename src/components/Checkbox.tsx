//pega as propriedades e repassa para a primeira propiedade do children

import { clsx } from 'clsx'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from "phosphor-react";




// interface com os valores a ser usados por props
export interface CheckboxProps {
}


//desetruturar as propiedades, por padrao deixamos o tamnho com medio, pois o size é opcional, definido com a interrogaçao
export const Checkbox = ({ }: CheckboxProps) => {

    return (
        <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'>
            <CheckboxPrimitive.Indicator asChild>
                <Check className='h-5 w-5 text-cyan-500' weight='bold' />
            </CheckboxPrimitive.Indicator>

        </CheckboxPrimitive.Root>

    )
}
// por padrao se define como span
//trocamos o texto em duro por children