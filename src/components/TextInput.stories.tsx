/* eslint-disable import/named */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon key={'icon'}>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder= 'Type your email address' type='email' key={'input'} />
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder= 'Type your email address' type='email' key={'input'} />
  }
}