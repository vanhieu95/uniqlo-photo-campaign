import { Circle } from 'lucide-react'
import { useSurvey } from '../context/SurveyContext'
import ReactWebcam from 'react-webcam'
import UploadImage from './UploadImage'
import uniqloLogo from '../assets/uniqlo.svg'

export default function Webcam() {
  const { capturedImage, captureTheImage } = useSurvey()

  const aspectRatios = {
    width: { min: 300 },
    height: { min: 300 },
    aspectRatio: 1,
  }

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
          className="block mx-auto"
          screenshotFormat="image/jpeg"
          screenshotQuality={1}
          disablePictureInPicture={true}
          height={300}
          width={300}
          videoConstraints={{
            facingMode: 'user',
            ...aspectRatios,
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
              <Circle fill="white" stroke="none" width={75} height={75} />
            </button>
          )}
        </ReactWebcam>
      )}

      {capturedImage && <UploadImage />}
    </div>
  )
}
