import { House } from 'lucide-react'
import uniqloLogo from '../assets/uniqlo.svg'
import { Link } from 'react-router'

export default function Complete() {
  return (
    <>
      <h1 className="pt-16">
        <img
          src={uniqloLogo}
          className="block mx-auto py-5"
          alt="Uniqlo logo"
          width={300}
          height={300}
        />
      </h1>

      <h2 className="uppercase text-4xl text-white font-black py-10">
        Uniqlo Bra Top
      </h2>

      <p className="uppercase text-3xl text-white font-bold">
        Cảm ơn bạn đã chia sẻ cùng <span>UNIQLO</span>!
      </p>

      <Link to="/">
        <House
          className="block mx-auto mt-10"
          height={75}
          width={75}
          stroke="white"
        />
      </Link>
    </>
  )
}
