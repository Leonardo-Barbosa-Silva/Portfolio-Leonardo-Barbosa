'use client'

import { useTheme } from 'next-themes'

import { getUiDesignClass } from '../helpers/get-ui-design-class'
import { Button, ButtonProps } from './button'

export function ThemedButton(props: Omit<ButtonProps, 'variant'>) {
  const { theme } = useTheme()

  const variant = getUiDesignClass(theme)

  return <Button variant={variant} {...props} />
}
