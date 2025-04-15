import uniqloLogo from '../assets/uniqlo.svg'
import BratopLogo from '../assets/images/bratop-logo.png'
import HomeButton from '../assets/images/home-button.png'
import { Link } from 'react-router'
import playSound from '../hooks/useSound'

export default function Complete() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <h1>
          <img
            src={uniqloLogo}
            className="block mx-auto pt-[130px] fade-item fade-delay-1"
            alt="Uniqlo"
            width={125}
            height={125}
          />
        </h1>

        <p
          className="uppercase text-2xl text-[#e85454] mx-auto mt-18 fade-item fade-delay-2"
          style={{ fontFamily: 'Uniqlo Bold' }}
        >
          Chúc bạn có một trải
        </p>
        <p
          className="uppercase text-2xl text-[#e85454] mx-auto fade-item fade-delay-2"
          style={{ fontFamily: 'Uniqlo Bold' }}
        >
          nghiệm thật thú vị cùng
        </p>

        <div className="fade-item fade-delay-3">
          <img
            src={BratopLogo}
            className="mx-auto mt-5 mb-2 bratop-logo-sparkle"
            alt="Bra Top tích hợp nâng đỡ"
            width={200}
          />
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto w-[85%] max-w-sm fade-item fade-delay-4">
          <Link to="/" onClick={playSound}>
            <img
              src={HomeButton}
              className="mb-5"
              alt="Về trang đầu"
              width={30}
            />
          </Link>
        </div>
        <div className="horizontal-line"></div>
      </div>
    </div>
  )
}
