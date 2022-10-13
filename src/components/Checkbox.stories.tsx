//Documentaçao de um componente no storybook

//tipagem Meta y storyObj, args é o mesmo que props, traz os atalhos
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

//
export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {

    },
    argTypes: {},
    decorators: [
        (Story) => {
            return(
                <div className="flex items-center gap-2">
                {Story()}
                   <Text size="sm">Heloo</Text>
                </div>

            )
        }
    ]
} as Meta<CheckboxProps>//generic


//exportar uma variavel por defecto, con o generic que mostra o que contem no objeto, facilita codear :)
export const Default: StoryObj<CheckboxProps> = {}


