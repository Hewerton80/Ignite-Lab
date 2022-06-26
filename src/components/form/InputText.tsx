import classNames from 'classnames'

interface InputTextProps extends GlobalProps {
  value?: string
  placeholder?: string
  disabled?: boolean
  name?: string
  type?: 'text' | 'email'
  required?: boolean
  autoFocus?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function InputText({ className, ...restProps }: InputTextProps) {
  return (
    <input
      className={classNames('bg-gray-900', 'rounded', 'px-5', 'h-14', className)}
      {...restProps}
    />
  )
}

export default InputText
