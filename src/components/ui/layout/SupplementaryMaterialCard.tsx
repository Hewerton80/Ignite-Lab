import classNames from 'classnames'
import { CaretRight, FileArrowDown, Image } from 'phosphor-react'
import { ReactNode } from 'react'

interface SupplementaryMaterialCardProps extends GlobalProps {
  title: string
  description: string
  type: 'donwload' | 'link'
  href: string
}

function SupplementaryMaterialCard({
  className,
  title,
  description,
  type,
  ...restProps
}: SupplementaryMaterialCardProps) {
  return (
    <a
      className={classNames(
        'flex items-stretch',
        'space-x-6 h-auto',
        'bg-gray-700 hover:bg-gray-600',
        'rounded',
        'overflow-hidden transition-colors',
        className
      )}
      {...restProps}
    >
      <div className="flex items-center bg-green-700 h-full p-6">
        {type === 'donwload' ? <FileArrowDown size={40} /> : <Image size={40} />}
      </div>
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{title}</strong>
        <p className="text-sm text-gray-200 mt-2">{description}</p>
      </div>
      <div className="flex items-center h-full p-6">
        <CaretRight />
      </div>
    </a>
  )
}

export default SupplementaryMaterialCard
