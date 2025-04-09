import { House } from 'lucide-react'
import uniqloLogo from '../assets/uniqlo.svg'

export default function Complete() {
  return (
    <>
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
        className="uppercase text-xl text-[#e85454] w-[85%] mx-auto mt-18"
        style={{ fontFamily: 'Uniqlo Regular' }}
      >
        Chúc bạn có một trải nghiệm thật thú vị cùng
      </p>

      <h2
        className="text-6xl mt-2 leading-none"
        style={{ fontFamily: 'Uniqlo Light' }}
      >
        BRATOP
      </h2>
      <h2
        className="text-lg leading-none mb-2"
        style={{ fontFamily: 'Uniqlo Regular' }}
      >
        Tích Hợp Nâng Đỡ
      </h2>
    </>
  )
}
