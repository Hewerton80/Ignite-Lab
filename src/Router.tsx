import { Routes, Route, Navigate } from 'react-router-dom'
import EventPage from './pages/EventPage'
import SubscribePage from './pages/SubscribePage'

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<SubscribePage />} />
      <Route path="event" element={<EventPage />} />
      {/* </Route> */}
      <Route path="event/lesson/:slug" element={<EventPage />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  )
}
