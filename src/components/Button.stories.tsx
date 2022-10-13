//Documentaçao de um componente no storybook

//tipagem Meta y storyObj, args é o mesmo que props, traz os atalhos
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

//
export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button',
      
        /*   size:'lg'  mudar diretamente os atributos ou criar variaçoes como abaixo...*/
    },
    argTypes: {}
} as Meta<ButtonProps>//generic


//exportar uma variavel por defecto, con o generic que mostra o que contem no objeto, facilita codear :)
export const Default: StoryObj<ButtonProps> = {}


