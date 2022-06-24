import { gql, useQuery } from '@apollo/client'
import classNames from 'classnames'
import { ILesson } from '../../types/Lesson'
import CardLesson from '../ui/layout/CardLesson'

const GET_CLASS_LESSONS_QUERY = gql`
  query MyGetClassLessonsQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`

interface SidebarProps extends GlobalProps {}

function Sidebar({ className, ...restProps }: SidebarProps) {
  const {
    data: dataLessons,
    loading: loadingLessons,
    error,
  } = useQuery<{ lessons: ILesson[] }>(GET_CLASS_LESSONS_QUERY)

  return (
    <aside
      className={classNames(
        'w-[348px]',
        'p-6',
        'bg-gray-700 border-l border-gray-600',
        className
      )}
      {...restProps}
    >
      <span className="block font-bold text-2xl pb-6 mb-6 border-b border-gray-500">
        Cronograma de aulas
      </span>

      <div className="flex flex-col space-y-8">
        {dataLessons?.lessons?.map((lesson) => (
          <CardLesson
            key={lesson.id!}
            title={lesson.title!}
            availableAt={new Date(lesson?.availableAt!)}
            type={lesson.lessonType!}
            slug={lesson.slug!}
          />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
