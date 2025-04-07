import uniqloLogo from '../assets/uniqlo.svg'
import { Camera as CameraIcon } from 'lucide-react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly h-full">
      <div>
        <h1 className="uppercase text-4xl text-white mb-4 font-black">
          Chào mừng bạn đến với
          <img
            src={uniqloLogo}
            className="block mx-auto py-5"
            alt="Uniqlo logo"
            width={350}
            height={350}
          />
        </h1>
        <h2 className="uppercase text-3xl text-white font-bold">
          Uniqlo Bra Top
        </h2>
      </div>

      <Link to="/photo" className="text-white text-2xl">
        <CameraIcon className="block mx-auto" height={75} width={75} />
        Nhấn để bắt đầu chụp ảnh
      </Link>
    </div>
  )
}
