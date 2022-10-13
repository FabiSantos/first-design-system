//Documentaçao de um componente no storybook

//tipagem Meta y storyObj, args é o mesmo que props, traz os atalhos
import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope } from "phosphor-react";

//
export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder="Text Input" />
        ],
    },
    argTypes: {}
} as Meta<TextInputRootProps>//generic


//exportar uma variavel por defecto, con o generic que mostra o que contem no objeto, facilita codear :)
export const Default: StoryObj<TextInputRootProps> = {}

export const WhitOutIcon: StoryObj<TextInputRootProps> = {
    args:{
        children: <TextInput.Input placeholder="Text Input" />
        
    }
}

