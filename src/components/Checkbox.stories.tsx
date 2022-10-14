/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    'aria-labelledby': 'labelCheckbox',
    id: 'checkbox'
  },
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <label htmlFor='checkbox' className='flex items-center gap-2'>
          { Story() }
          <Text size='sm' id='labelCheckbox'>Lembrar de mim por 30 dias</Text>
        </label>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}