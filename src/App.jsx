import { Route, Routes } from 'react-router'
import { SurveyProvider } from './context/SurveyContext'
import Home from './pages/Home'
import Photo from './pages/Photo'
import Content from './pages/Content'
import Complete from './pages/Complete'

function App() {
  return (
    <div className="container mx-auto px-5 text-center bg-fuchsia-400 h-svh">
      <SurveyProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="photo" element={<Photo />} />
          <Route path="content" element={<Content />} />
          <Route path="complete" element={<Complete />} />
        </Routes>
      </SurveyProvider>
    </div>
  )
}

export default App
