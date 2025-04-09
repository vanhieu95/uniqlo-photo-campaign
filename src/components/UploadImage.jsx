import { useSurvey } from '../context/SurveyContext'
import { CameraIcon, MoveRight } from 'lucide-react'
import { useNavigate } from 'react-router'

export default function UploadImage() {
  const { capturedImage, clearCapturedImage, uploadImage } = useSurvey()
  const navigate = useNavigate()

  async function handleUploadImage() {
    const result = await uploadImage()

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
        className="relative w-full max-w-sm"
        style={{ width: '240px', height: '360px' }}
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
          className="uppercase text-white"
          onClick={() => {
            handleUploadImage()
          }}
        >
          <MoveRight
            className="block mx-auto"
            height={50}
            width={50}
            stroke="#e85454"
          />

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
