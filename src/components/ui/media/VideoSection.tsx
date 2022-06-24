import { DefaultUi, Player, Youtube } from '@vime/react'
import classNames from 'classnames'
import { DiscordLogo, Lightning } from 'phosphor-react'
import Button from '../../form/Button'
import SupplementaryMaterialCard from '../layout/SupplementaryMaterialCard'
// Default theme. ~960B
import '@vime/core/themes/default.css'
// Optional light theme (extends default). ~400B
import '@vime/core/themes/light.css'
import { gql, useQuery } from '@apollo/client'
import { ILesson } from '../../../types/Lesson'
import { useEffect } from 'react'

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }, stage: PUBLISHED) {
      title
      videoId
      description
      teacher {
        bio
        name
        avatarURL
      }
    }
  }
`

interface VideoSectionProps extends GlobalProps {
  lessonSlug: string
}

function VideoSection({ lessonSlug }: VideoSectionProps) {
  const { data: dataLesson, loading: loadingLesson } = useQuery<{ lesson: ILesson }>(
    GET_LESSON_BY_SLUG_QUERY,
    {
      variables: { slug: lessonSlug },
    }
  )
  useEffect(() => {
    if (dataLesson) {
      console.log('videoId', dataLesson?.lesson?.videoId)
    }
  }, [dataLesson])

  if (!dataLesson) {
    return <div className="flex-1">Carregando...</div>
  }

  return (
    <div className={classNames('flex-1')}>
      <div className="bg-black">
        <div
          className={classNames(
            'h-full max-w-[1100px] max-h-[60vh] mx-auto',
            'aspect-video'
          )}
        >
          <Player>
            <Youtube videoId={dataLesson.lesson.videoId!} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start space-x-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{dataLesson.lesson.title}</h1>
            <p
              className="mt-4 text-gray-200 line-clamp-3"
              title={dataLesson.lesson.description}
            >
              {dataLesson.lesson.description}
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <Button
              as="a"
              href="#"
              full
              variant="primary"
              leftIcon={<DiscordLogo size={24} />}
            >
              Comunidade no discord
            </Button>
            <Button
              as="a"
              href="#"
              full
              variant="secondary"
              leftIcon={<Lightning size={24} />}
            >
              Acesse o desafio
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-6">
          <img
            className="h-16 w-16 rounded-full border-2 border-blue-500 object-cover"
            src={dataLesson.lesson.teacher?.avatarURL}
            alt={dataLesson.lesson.teacher?.name}
          />
          <div className="leading-relaxed">
            <strong className="font-bold text-2xl block">
              {dataLesson.lesson.teacher?.name}
            </strong>
            <span
              title={dataLesson.lesson.teacher?.bio}
              className="text-gray-200 text-sm block line-clamp-1"
            >
              {dataLesson.lesson.teacher?.bio}
            </span>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-8">
          <SupplementaryMaterialCard
            href="#"
            title="Material complementar"
            description="Acesse o material complementar para acelerar o seu desenvolvimento"
            type="donwload"
          />
          <SupplementaryMaterialCard
            href="#"
            title="Wallpapers do evento"
            description="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
            type="link"
          />
        </div>
      </div>
    </div>
  )
}

export default VideoSection
