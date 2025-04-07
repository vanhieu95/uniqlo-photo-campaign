import { createContext, useContext, useState } from 'react'

const SurveyContext = createContext()

export function useSurvey() {
  return useContext(SurveyContext)
}

export function SurveyProvider({ children }) {
  const [capturedImage, setCapturedImage] = useState(null)

  function captureTheImage(imageSrc) {
    setCapturedImage(imageSrc)
  }

  function clearCapturedImage() {
    setCapturedImage(null)
  }

  function uploadImage() {
    if (!capturedImage) {
      return false
    }

    return true
  }

  function completeSurvey(content) {
    return true
  }

  const value = {
    capturedImage,
    captureTheImage,
    clearCapturedImage,
    uploadImage,
    completeSurvey,
  }

  return (
    <SurveyContext.Provider value={value}>{children}</SurveyContext.Provider>
  )
}
