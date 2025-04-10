import { useSurvey } from '../context/SurveyContext'
import { CameraIcon, MoveRight } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import BackButton from '../assets/images/back-button.png'
import NextButton from '../assets/images/next-button.png'

export default function UploadImage() {
  const [loading, setLoading] = useState(false)
  const { capturedImage, clearCapturedImage, uploadImage } = useSurvey()
  const navigate = useNavigate()

  async function handleUploadImage() {
    setLoading(true)
    const result = await uploadImage()
    setLoading(false)

    if (result) {
      navigate('/content')
    } else {
      clearCapturedImage()
      navigate('/photo')
      return
    }
  }

  return (
    <>
      <div
        className="relative w-full max-w-[85%]"
        style={{ aspectRatio: '3 / 4' }}
      >
        <img
          src={capturedImage}
          alt="Captured"
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md border-2 border-[#e85454]"
        />
      </div>
      <div className="flex justify-between items-center mx-auto w-[85%]">
        <button
          disabled={loading}
          className={`${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => {
            clearCapturedImage()
          }}
        >
          <img
            src={BackButton}
            className="mx-auto"
            alt="Tiếp tục"
            width={100}
          />
        </button>

        <button
          disabled={loading}
          className={`${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => {
            handleUploadImage()
          }}
        >
          {loading ? (
            <div className="h-[50px] w-[50px] mx-auto border-4 border-white border-t-[#e85454] rounded-full animate-spin" />
          ) : (
            <img
              src={NextButton}
              className="mx-auto"
              alt="Tiếp tục"
              width={100}
            />
          )}
        </button>
      </div>
    </>
  )
}
