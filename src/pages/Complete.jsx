import uniqloLogo from '../assets/uniqlo.svg'
import BratopLogo from '../assets/images/bratop-logo.png'
import HomeButton from '../assets/images/home-button.png'
import { Link } from 'react-router'

export default function Complete() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <h1>
          <img
            src={uniqloLogo}
            className="block mx-auto pt-[130px]"
            alt="Uniqlo"
            width={125}
            height={125}
          />
        </h1>

        <p
          className="uppercase text-2xl text-[#e85454] w-[85%] mx-auto mt-18"
          style={{ fontFamily: 'Uniqlo Bold' }}
        >
          Chúc bạn có một trải nghiệm thật thú vị cùng
        </p>

        <img
          src={BratopLogo}
          className="mx-auto mt-5 mb-2"
          alt="Bra Top tích hợp nâng đỡ"
          width={200}
        />
      </div>

      <div className="relative">
        <Link to="/">
          <img
            src={HomeButton}
            className="absolute left-[20px] bottom-[40px]"
            alt="Về trang đầu"
            width={30}
          />
        </Link>
        <div className="horizontal-line"></div>
      </div>
    </div>
  )
}
