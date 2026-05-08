import { useContext } from 'react'
import { ThemeContext } from '@/app/Providers'

export function useTheme() {
  return useContext(ThemeContext)
}
