//Documentaçao de um componente no storybook

//tipagem Meta y storyObj, args é o mesmo que props, traz os atalhos
import { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "./Heading";

//
export default {
    title: 'Components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum',
        size: 'md'
        /*   size:'lg'  mudar diretamente os atributos ou criar variaçoes como abaixo...*/
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeadingProps>//generic


//exportar uma variavel por defecto, con o generic que mostra o que contem no objeto, facilita codear :)
export const Default: StoryObj<HeadingProps> = {}


//variaçoes para cada tamanho
export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Testeeee</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
           asChild:{
            table:{
                disable:true
            }
        }
    }
}