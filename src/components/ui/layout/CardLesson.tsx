import classNames from 'classnames'
import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'

interface CardLessonProps extends GlobalProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

function CardLesson({
  className,
  title,
  type,
  slug,
  availableAt,
  ...restProps
}: CardLessonProps) {
  const { slug: slugParam } = useParams<{ slug: string }>()

  const isLive = type === 'live'
  const isLessonAvailable = isPast(availableAt)
  const availableAtFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })
  return (
    <Link
      to={`/event/lesson/${slug}`}
      className={classNames('group', className)}
      {...restProps}
    >
      <span className={classNames('text-gray-300')}>
        {/* Terça • 22 de junho • 19h00
         */}
        {availableAtFormatted}
      </span>
      <div
        className={classNames(
          'rounded border border-gray-500 group-hover:border-green-500',
          'p-4 mt-2',
          'transition-colors',
          slugParam === slug && 'border-green-500'
        )}
      >
        <header className="flex items-center justify-between">
          <span
            className={classNames(
              'flex items-center',
              'text-sm text-blue-500 font-medium',
              isLessonAvailable ? 'text-blue-500' : 'text-orange-500'
            )}
          >
            {isLessonAvailable ? (
              <>
                <CheckCircle size={20} className="mr-2" />
                Conteudo liberado
              </>
            ) : (
              <>
                <Lock size={20} className="mr-2" />
                Em breve
              </>
            )}
          </span>
          <span
            className={classNames(
              'text-xs text-white font-bold',
              'rounded',
              'border border-green-300',
              'py-[0.125rem] px-2'
            )}
          >
            {isLive ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classNames('block text-gray-200 mt-5')}>{title}</strong>
      </div>
    </Link>
  )
}

export default CardLesson
