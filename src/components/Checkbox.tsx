import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CheckboxProps {
}

export function Checkbox(): JSX.Element {
  return (
    <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded">
      <CheckboxPrimitive.CheckboxIndicator asChild>
        <Check weight='bold' className='h-5 w-5 text-cyan-500'/>
      </CheckboxPrimitive.CheckboxIndicator>
    </CheckboxPrimitive.Root>
  )
}
