import { useEffect } from 'react'
import uniqloLogo from '../assets/uniqlo.svg'
import { Link } from 'react-router'
import { useSurvey } from '../context/SurveyContext'
import BratopLogo from '../assets/images/bratop-logo.png'
import CameraButton from '../assets/images/camera-button.png'
import GuideButton from '../assets/images/guide-button.png'
import TermButton from '../assets/images/term-button.png'

export default function Home() {
  const { clearCapturedImage } = useSurvey()

  useEffect(() => {
    clearCapturedImage()
  }, [])

  return (
    <div className="h-full flex flex-col justify-between">
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
        <img
          src={BratopLogo}
          className="mx-auto mt-5 mb-2"
          alt="Bra Top tích hợp nâng đỡ"
          width={300}
        />

        <Link to="/photo">
          <img
            src={CameraButton}
            className="mx-auto mt-10 mb-2"
            alt="Nhấn để bắt đầu chụp ảnh"
            width={250}
          />
        </Link>
      </div>

      <div className="relative">
        <div className=" absolute bottom-0 left-1/2 translate-x-[-50%] flex justify-between items-center mx-auto w-[85%]">
          <Link to="/term">
            <button>
              <img
                src={TermButton}
                className="mx-auto"
                alt="Điều khoản"
                width={100}
              />
            </button>
          </Link>

          <Link to="/guide">
            <button>
              <img
                src={GuideButton}
                className="mx-auto"
                alt="Cách sử dụng"
                width={100}
              />
            </button>
          </Link>
        </div>
        <div div className="horizontal-line"></div>
      </div>
    </div>
  )
}
