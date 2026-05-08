import { useState } from 'react'

export function useSidebar(defaultCollapsed = false) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)
  return {
    collapsed,
    toggle: () => setCollapsed(c => !c),
    expand: () => setCollapsed(false),
    collapse: () => setCollapsed(true),
  }
}
