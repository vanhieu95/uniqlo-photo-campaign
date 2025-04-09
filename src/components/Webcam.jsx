import uniqloLogo from '../assets/uniqlo.svg'
import CameraCapture from './CameraCapture'

export default function Webcam() {
  return (
    <div>
      <h1>
        <img
          src={uniqloLogo}
          className="block mx-auto pt-3"
          alt="Uniqlo"
          width={75}
          height={75}
        />
      </h1>

      <h2
        className="text-3xl mt-4 leading-none"
        style={{ fontFamily: 'Uniqlo Light' }}
      >
        BRATOP
      </h2>
      <h2
        className="text-sm leading-none mb-2"
        style={{ fontFamily: 'Uniqlo Regular' }}
      >
        Tích Hợp Nâng Đỡ
      </h2>

      <CameraCapture />
    </div>
  )
}
