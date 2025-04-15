import uniqloLogo from '../assets/uniqlo.svg'
import CameraCapture from '../components/CameraCapture'
import BratopLogo from '../assets/images/bratop-logo.png'
import UploadImage from '../components/UploadImage'
import { useSurvey } from '../context/SurveyContext'

export default function Photo() {
  const { capturedImage } = useSurvey()

  return (
    <div>
      <div className="mb-2 fade-item fade-delay-1">
        <h1>
          <img
            src={uniqloLogo}
            className="block mx-auto pt-3"
            alt="Uniqlo"
            width={75}
            height={75}
          />
        </h1>

        <img
          src={BratopLogo}
          className="mx-auto mt-5 mb-2 bratop-logo-sparkle"
          alt="Bra Top tích hợp nâng đỡ"
          width={100}
        />
      </div>
      {/* <CameraCapture /> */}
      {/* Video container with fixed aspect ratio */}
      <div className="flex flex-col items-center space-y-4 fade-item fade-delay-2">
        {!capturedImage && (
          <>
            <CameraCapture />
          </>
        )}
        {/* Captured image preview */}
        {capturedImage && <UploadImage />}
      </div>
    </div>
  )
}
