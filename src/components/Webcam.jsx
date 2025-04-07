import { Circle } from 'lucide-react'
import { useSurvey } from '../context/SurveyContext'
import ReactWebcam from 'react-webcam'
import UploadImage from './UploadImage'
import uniqloLogo from '../assets/uniqlo.svg'

export default function Webcam() {
  const { capturedImage, captureTheImage } = useSurvey()

  const aspectRatios = {
    width: { min: 360 },
    height: { min: 720 },
    aspectRatio: 0.5,
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
          height={720}
          width={360}
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
              <Circle fill="white" stroke="none" width={100} height={100} />
            </button>
          )}
        </ReactWebcam>
      )}

      {capturedImage && <UploadImage />}
    </div>
  )
}
