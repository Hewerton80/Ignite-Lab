import classnames from 'classnames'
import { LogoIcon } from '../icons/LogoIcon'

interface HeaderProps extends GlobalProps {}

function Header({ className, ...restProps }: HeaderProps) {
  return (
    <header
      className={classnames(
        'flex items-center justify-center',
        'w-full',
        'py-5',
        'bg-gray-700 border-b border-gray-500',
        className
      )}
      {...restProps}
    >
      <LogoIcon />
    </header>
  )
}

export default Header
