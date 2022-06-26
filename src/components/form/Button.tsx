import classNames from 'classnames'
import { ReactNode, useMemo } from 'react'
import Spinner from '../ui/feedback/Spinner'

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
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  isLoding?: boolean
  href?: string
  leftIcon?: ReactNode
  variant?: keyof typeof variantButton
}

function Button({
  className,
  full,
  children,
  as = 'a',
  disabled,
  isLoding,
  variant = 'primary',
  leftIcon,
  ...restProps
}: ButtonProps) {
  const resultClassName = classNames(
    'flex items-center justify-center',
    'px-4 h-14 rounded transition-colors cursor-pointer',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'font-bold uppercase',
    full ? 'w-full' : 'w-fit',
    variantButton[variant],
    className
  )

  const leftIconElement = leftIcon ? <span className="mr-2.5 ">{leftIcon}</span> : <></>

  const childrens = useMemo(() => {
    if (isLoding) {
      return <Spinner />
    }
    return (
      <>
        {leftIconElement}
        {children}
      </>
    )
  }, [leftIconElement, isLoding, children])

  if (as === 'a') {
    return (
      <a className={resultClassName} {...restProps}>
        {childrens}
      </a>
    )
  } else if (as === 'button') {
    return (
      <button className={resultClassName} disabled={disabled || isLoding} {...restProps}>
        {childrens}
      </button>
    )
  }
  return (
    <>
      <button className="opacity-50"></button>
    </>
  )
}

export default Button
