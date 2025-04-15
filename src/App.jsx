import { Route, Routes } from 'react-router'
import { SurveyProvider } from './context/SurveyContext'
import Home from './pages/Home'
import Photo from './pages/Photo'
import Content from './pages/Content'
import Complete from './pages/Complete'
import Guide from './pages/Guide'
import Term from './pages/Term'
import './assets/sounds/button-sound.mp3'

function App() {
  return (
    <div className="text-center relative h-svh">
      <SurveyProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="guide" element={<Guide />} />
          <Route path="term" element={<Term />} />
          <Route path="photo" element={<Photo />} />
          <Route path="content" element={<Content />} />
          <Route path="complete" element={<Complete />} />
        </Routes>
      </SurveyProvider>
    </div>
  )
}

export default App
