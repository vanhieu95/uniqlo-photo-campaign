import { useSurvey } from '../context/SurveyContext'
import { CameraIcon, MoveRight } from 'lucide-react'
import { useNavigate } from 'react-router'

export default function UploadImage() {
  const { capturedImage, clearCapturedImage, uploadImage } = useSurvey()
  const navigate = useNavigate()

  function handleUploadImage() {
    const result = uploadImage()

    if (result) {
      navigate('/content')
    } else {
      clearCapturedImage()
    }
  }

  return (
    <div>
      <img
        className="block mx-auto h-[65vh] object-contain"
        src={capturedImage}
      />
      <div className="flex justify-between items-center max-w-[600px] mx-auto">
        <button
          className="uppercase text-white"
          onClick={() => {
            clearCapturedImage()
          }}
        >
          <CameraIcon className="block mx-auto" height={100} width={100} />
          Quay lại
        </button>

        <button
          className="uppercase text-white"
          onClick={() => {
            handleUploadImage()
          }}
        >
          <MoveRight className="block mx-auto" height={100} width={100} />
          Tiếp tục
        </button>
      </div>
    </div>
  )
}
