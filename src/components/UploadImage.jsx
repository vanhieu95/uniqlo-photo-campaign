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
    <div>
      <img className="block mx-auto object-contain" src={capturedImage} />
      <div className="flex justify-between items-center max-w-[600px] mx-auto mt-10">
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
