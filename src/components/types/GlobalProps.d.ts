import { ReactNode, CSSProperties } from 'react'

declare global {
  interface GlobalProps {
    id?: string
    className?: string
    children?: ReactNode
    style?: CSSProperties
  }
  type Callback = (...args: any[]) => void
}
