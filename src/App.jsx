import { useEffect } from 'react'
import HomePage from './pages/HomePage'
import LessonsPage from './pages/LessonsPage'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  const lessonPage = path === '/lessons'

  useEffect(() => {
    const title = lessonPage ? 'Guitar Lessons | Tyler Reid' : 'Tyler Reid | Web Developer & Music Instructor'
    const description = lessonPage
      ? 'Personalized private guitar lessons with Tyler Reid, from beginner to advanced. Explore technique, songs, theory, and ear training online or in person.'
      : 'Web development, technical help, and private guitar lessons from Tyler Reid.'
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
  }, [lessonPage])

  if (lessonPage) {
    return <LessonsPage />
  }

  return <HomePage />
}

export default App
