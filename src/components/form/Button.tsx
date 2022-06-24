import classNames from 'classnames'
import { ReactNode } from 'react'

const variantButton = {
  primary: classNames('border-green-500 bg-green-500 hover:bg-green-700', 'text-white'),
  secondary: classNames(
    'border border-blue-500',
    'bg-transparent hover:bg-blue-500',
    'text-blue-500 hover:text-gray-900'
  ),
}

interface ButtonProps extends GlobalProps {
  onClick?: Callback
  full?: boolean
  as?: 'button' | 'a'
  href?: string
  leftIcon?: ReactNode
  variant?: keyof typeof variantButton
}

function Button({
  className,
  full,
  children,
  as = 'a',
  variant = 'primary',
  leftIcon,
  ...restProps
}: ButtonProps) {
  const resultClassName = classNames(
    'flex items-start justify-center',
    'p-4 rounded transition-colors',
    'font-bold uppercase',
    full ? 'w-full' : 'w-fit',
    variantButton[variant],
    className
  )

  const leftIconElement = leftIcon ? <span className="mr-2.5 ">{leftIcon}</span> : <></>

  if (as === 'a') {
    return (
      <a className={resultClassName} {...restProps}>
        {leftIconElement}
        {children}
      </a>
    )
  } else if (as === 'button') {
    return (
      <button className={resultClassName} {...restProps}>
        {leftIconElement}
        {children}
      </button>
    )
  }
  return <></>
}

export default Button
