import { Circle } from 'lucide-react'
import { useSurvey } from '../context/SurveyContext'
import ReactWebcam from 'react-webcam'
import UploadImage from './UploadImage'
import uniqloLogo from '../assets/uniqlo.svg'

export default function Webcam() {
  const { capturedImage, captureTheImage } = useSurvey()

  return (
    <div>
      <h1>
        <img
          src={uniqloLogo}
          className="block mx-auto py-5"
          alt="Uniqlo logo"
          width={200}
          height={200}
        />
      </h1>

      {!capturedImage && (
        <ReactWebcam
          className="block mx-auto h-[65vh]"
          screenshotFormat="image/jpeg"
          screenshotQuality={1}
          videoConstraints={{
            facingMode: 'user',
            height: 1280,
            width: 720,
          }}
        >
          {({ getScreenshot }) => (
            <button
              className="block mx-auto"
              onClick={() => {
                const imageSrc = getScreenshot()
                captureTheImage(imageSrc)
              }}
            >
              <Circle fill="white" stroke="none" width={100} height={100} />
            </button>
          )}
        </ReactWebcam>
      )}

      {capturedImage && <UploadImage />}
    </div>
  )
}
