import { Circle } from 'lucide-react'
import { useSurvey } from '../context/SurveyContext'
import ReactWebcam from 'react-webcam'
import UploadImage from './UploadImage'
import uniqloLogo from '../assets/uniqlo.svg'

export default function Webcam() {
  const { capturedImage, captureTheImage } = useSurvey()

  const aspectRatios = {
    aspectRatio: 0.8,
    width: 400,
    height: 500,
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
        <div className="camera-wrapper w-[400px] h-[500px] mx-auto">
          <ReactWebcam
            className="w-full h-full object-contain"
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
        </div>
      )}

      {capturedImage && <UploadImage />}
    </div>
  )
}
