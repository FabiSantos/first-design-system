//Documentaçao de um componente no storybook

//tipagem Meta y storyObj, args é o mesmo que props, traz os atalhos
import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

//
export default {
    title: 'Components/Text',
    component: Text,
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
} as Meta<TextProps>//generic


//exportar uma variavel por defecto, con o generic que mostra o que contem no objeto, facilita codear :)
export const Default: StoryObj<TextProps> = {}


//variaçoes para cada tamanho
export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}
export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponet: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testeeee</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            },
         

        },
        asChild:{
            table:{
                disable:true
            }
        }
    }
}