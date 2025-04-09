import { Circle } from 'lucide-react'
import { useSurvey } from '../context/SurveyContext'
import ReactWebcam from 'react-webcam'
import UploadImage from './UploadImage'
import uniqloLogo from '../assets/uniqlo.svg'

export default function Webcam() {
  const { capturedImage, captureTheImage } = useSurvey()

  const aspectRatios = {
    width: { max: 300 },
    aspectRatio: 0.6,
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
          videoConstraints={{
            facingMode: 'user',
            ...aspectRatios,
          }}
        >
          {({ getScreenshot }) => (
            <button
              className="block mx-auto mt-10"
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
