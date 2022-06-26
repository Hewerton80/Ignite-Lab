import { CircleNotch } from 'phosphor-react'
import colors from 'tailwindcss/colors'
interface SpinnerProps {
  color?: string
  size?: number
}

function Spinner({ color = colors.white, size = 28 }: SpinnerProps) {
  return <CircleNotch className="animate-spin" size={size} style={{ color }} />
}

export default Spinner
