import { ButtonProps } from '../ui/button'

export function getUiDesignClass(theme?: string): ButtonProps['variant'] {
  return theme === 'dark' ? 'neon-ui' : 'soft-ui'
}
