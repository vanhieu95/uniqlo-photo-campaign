import { useEffect } from 'react'
import uniqloLogo from '../assets/uniqlo.svg'
import { Link } from 'react-router'
import { useSurvey } from '../context/SurveyContext'
import CameraButton from '../assets/images/camera-button.png'

export default function Home() {
  const { clearCapturedImage } = useSurvey()

  useEffect(() => {
    clearCapturedImage()
  }, [])

  return (
    <div className="h-full">
      <div>
        <h1
          className="text-xl mb-4 pt-14 text-[#e85454] uppercase"
          style={{ fontFamily: 'Uniqlo Regular' }}
        >
          Chào mừng bạn đến với
          <img
            src={uniqloLogo}
            className="block mx-auto py-5"
            alt="Uniqlo"
            width={100}
            height={100}
          />
        </h1>
        <h2 className="text-7xl mt-4" style={{ fontFamily: 'Uniqlo Light' }}>
          BRATOP
        </h2>
        <h2 className="text-3xl" style={{ fontFamily: 'Uniqlo Regular' }}>
          Tích Hợp Nâng Đỡ
        </h2>
      </div>

      <Link to="/photo">
        <img
          src={CameraButton}
          className="mx-auto mt-5 mb-2"
          alt="Nhấn để bắt đầu chụp ảnh"
          width={175}
        />
      </Link>

      <Link
        to="/photo"
        className="text-white text-lg uppercase bg-[#e85454] w-fit mx-auto py-2 px-4"
        style={{ fontFamily: 'Uniqlo Regular' }}
      >
        Nhấn để bắt đầu chụp ảnh
      </Link>
    </div>
  )
}
