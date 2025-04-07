import { createContext, useContext, useState } from 'react'
import { ref, getDownloadURL, uploadString } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid'
import { storage, setDatabase } from '../utils/firebase'

const SurveyContext = createContext()

export function useSurvey() {
  return useContext(SurveyContext)
}

export function SurveyProvider({ children }) {
  const [capturedImage, setCapturedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState('')

  function captureTheImage(imageSrc) {
    setCapturedImage(imageSrc)
  }

  function clearCapturedImage() {
    setCapturedImage(null)
    setImageUrl('')
  }

  async function uploadImage() {
    if (!capturedImage) {
      return false
    }

    try {
      const imageRef = ref(storage, `images/${uuidv4()}`)
      await uploadString(imageRef, capturedImage, 'data_url')
      const url = await getDownloadURL(imageRef)

      if (url != '') {
        setImageUrl(url)
      }

      return true
    } catch {
      clearCapturedImage()
      return false
    }
  }

  async function completeSurvey(content) {
    try {
      await setDatabase('images', {
        url: imageUrl,
        content,
      })

      return true
    } catch {
      clearCapturedImage()
      return false
    }
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
