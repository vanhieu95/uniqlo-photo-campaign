import { useSurvey } from '../context/SurveyContext'
import { CameraIcon, MoveRight } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

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
        style={{ aspectRatio: '3 / 5' }}
      >
        <img
          src={capturedImage}
          alt="Captured"
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md border-2 border-[#e85454]"
        />
      </div>
      <div className="flex justify-between items-center mx-auto w-[240px]">
        <button
          onClick={() => {
            clearCapturedImage()
          }}
        >
          <CameraIcon
            className="block mx-auto"
            height={50}
            width={50}
            stroke="#e85454"
          />
          <span
            className="uppercase bg-white py-1 px-3 text-xs text-[#e85454]"
            style={{ fontFamily: 'Uniqlo Bold' }}
          >
            Quay lại
          </span>
        </button>

        <button
          disabled={loading}
          className={`uppercase text-white ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => {
            handleUploadImage()
          }}
        >
          {loading ? (
            <div className="h-[50px] w-[50px] mx-auto border-4 border-white border-t-[#e85454] rounded-full animate-spin" />
          ) : (
            <MoveRight
              className="block mx-auto"
              height={50}
              width={50}
              stroke="#e85454"
            />
          )}

          <span
            className="uppercase text-white py-1 px-3 text-xs bg-[#e85454]"
            style={{ fontFamily: 'Uniqlo Bold' }}
          >
            Tiếp tục
          </span>
        </button>
      </div>
    </>
  )
}
