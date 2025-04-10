import uniqloLogo from '../assets/uniqlo.svg'
import CameraCapture from '../components/CameraCapture'
import BratopLogo from '../assets/images/bratop-logo.png'

export default function Photo() {
  return (
    <>
      <div className="mb-2">
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
          className="mx-auto mt-5 mb-2"
          alt="Bra Top tích hợp nâng đỡ"
          width={100}
        />
      </div>
      <CameraCapture />
    </>
  )
}
