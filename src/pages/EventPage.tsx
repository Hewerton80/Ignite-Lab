import classNames from 'classnames'
import { useParams } from 'react-router-dom'
import Header from '../components/commom/Header'
import Sidebar from '../components/commom/Sidebar'
import VideoSection from '../components/ui/media/VideoSection'

function EventPage() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={classNames('flex flex-1')}>
        {slug ? <VideoSection lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  )
}

export default EventPage
