import { ITeacher } from './Teacher'

export interface ILesson {
  id: string
  videoId?: string
  description?: string
  title?: string
  slug?: string
  availableAt?: string
  lessonType?: 'live' | 'class'
  teacher?: ITeacher
}
