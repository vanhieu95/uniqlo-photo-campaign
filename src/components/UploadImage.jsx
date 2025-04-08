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
    }
  }

  return (
    <div>
      <img
        className="block mx-auto object-contain h-[300px] w-[300px]"
        src={capturedImage}
      />
      <div className="flex justify-between items-center max-w-[600px] mx-auto overflow-hidden">
        <button
          className="uppercase text-white"
          onClick={() => {
            clearCapturedImage()
          }}
        >
          <CameraIcon className="block mx-auto" height={75} width={75} />
          Quay lại
        </button>

        <button
          className="uppercase text-white"
          onClick={() => {
            handleUploadImage()
          }}
        >
          <MoveRight className="block mx-auto" height={75} width={75} />
          Tiếp tục
        </button>
      </div>
    </div>
  )
}
