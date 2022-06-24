import { Routes, Route, Navigate } from 'react-router-dom'
import EventPage from './pages/EventPage'

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<h1>HomePage</h1>} />
      <Route path="event" element={<EventPage />} />
      {/* </Route> */}
      <Route path="event/lesson/:slug" element={<EventPage />} />
      <Route path="*" element={<Navigate to="/event" replace={true} />} />
    </Routes>
  )
}
