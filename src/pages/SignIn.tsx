/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Checkbox } from '@radix-ui/react-checkbox'
import { Envelope, Lock } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { Text } from '../components/Text'
import { TextInput } from '../components/TextInput'
import { Logo } from '../Logo'
import axios from 'axios'


export function SignIn(): JSX.Element {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignIn(event: FormEvent):Promise<void> {
    event.preventDefault()

    await axios.post('/sessions', {
      email,
      password
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />
        <Heading size='lg' className='mt-4'>Ignite Lab</Heading>
        <Text size='lg' className='text-gray-400 mt-1'>Faça login e comece a usar!</Text>
      </header>

      <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>

        {isUserSignedIn && <Text>Login realizado!</Text>}

        <label htmlFor='email' className='flex flex-col gap-2'>
          <Text className='font-semibold'>Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' onChange={({ target }) => setEmail(target.value)} value={email} />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-2'>
          <Text className='font-semibold'>Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id='password' placeholder='*************' onChange={({ target }) => setPassword(target.value)} value={password} />
          </TextInput.Root>
        </label>

        <label htmlFor='remeber' className='flex items-center gap-2'>
          <Checkbox id='remeber' aria-labelledby='labelRemeber' />
          <Text className='text-gray-200' id='labelRemeber'>Lembrar de mim por 30 dias</Text>
        </label>

        <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
  )
}