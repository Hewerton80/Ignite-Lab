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

  const isActiveLesson = slug === slugParam
  return (
    <Link
      to={`/event/lesson/${slug}`}
      className={classNames('group', className)}
      {...restProps}
    >
      <span className={classNames('text-gray-300')}>{availableAtFormatted}</span>
      <div
        className={classNames(
          'rounded border border-gray-500 group-hover:border-green-500',
          'p-4 mt-2',
          'transition-colors',
          isActiveLesson && 'bg-green-500'
        )}
      >
        <header className="flex items-center justify-between">
          <span
            className={classNames(
              'flex items-center',
              'text-sm font-medium',
              isActiveLesson
                ? 'text-white'
                : isLessonAvailable
                ? 'text-blue-500'
                : 'text-orange-500'
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
              'rounded border',
              'py-[0.125rem] px-2',
              isActiveLesson ? 'border-white' : 'border-green-300'
            )}
          >
            {isLive ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={classNames('block text-gray-200 mt-5 line-clamp-1')}
          title={title}
        >
          {title}
        </strong>
      </div>
    </Link>
  )
}

export default CardLesson
