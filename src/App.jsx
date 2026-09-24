import HomePage from './pages/HomePage'
import LessonsPage from './pages/LessonsPage'

function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === '/lessons') {
    return <LessonsPage />
  }

  return <HomePage />
}

export default App
