import uniqloLogo from '../assets/uniqlo.svg'
import BratopLogo from '../assets/images/bratop-logo.png'
import { useForm } from 'react-hook-form'
import { useSurvey } from '../context/SurveyContext'
import { useNavigate } from 'react-router'
import { useState } from 'react'

export default function Content() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' })
  const [loading, setLoading] = useState(false)
  const { clearCapturedImage, completeSurvey } = useSurvey()
  const navigate = useNavigate()
  const CONTENT_MAX_LENGTH = 40
  const NAME_REGEX = /^[\p{L} ,.'-]+$/u
  const CONTENT_REGEX = /^[a-zA-Z]+\.[a-zA-Z]{4,10}^/

  async function onSubmit(data) {
    let { name, content } = data
    content = encodeURIComponent(content)
    setLoading(true)
    const result = await completeSurvey({ name, content })
    setLoading(false)

    if (result) {
      navigate('/complete')
    } else {
      clearCapturedImage()
      navigate('/photo')
      return
    }
  }

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

      <img
        src={BratopLogo}
        className="mx-auto mt-3 mb-5"
        alt="Bra Top tích hợp nâng đỡ"
        width={100}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <p className="text-lg" style={{ fontFamily: 'Uniqlo Light' }}>
            Tên của bạn là
          </p>

          <input
            {...register('name', {
              required: 'Tên không được bỏ trống',
              minLength: {
                value: 2,
                message: 'Tên không đủ độ dài',
              },
              pattern: {
                value: NAME_REGEX,
                message: 'Tên không hợp lệ',
              },
            })}
            type="text"
            className=" bg-white rounded-md w-[70%] max-w-sm h-9 p-3 border border-[#e85454] shadow-[2px_2px_0px_0px_rgba(232,84,84,1)] focus:outline-none"
            style={{ fontFamily: 'Uniqlo Regular' }}
          />
          {errors.name && (
            <p
              role="alert"
              className="text-red-600 mt-1"
              style={{ fontFamily: 'Uniqlo Light' }}
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <p className="text-lg" style={{ fontFamily: 'Uniqlo Light' }}>
          Cảm nhận của bạn thế nào về
        </p>

        <h3
          className="text-2xl text-[#e85454]"
          style={{ fontFamily: 'Uniqlo Bold' }}
        >
          UNIQLO BRATOP
        </h3>

        <p className="text-xs" style={{ fontFamily: 'Uniqlo Light' }}>
          Hãy cùng nhau chia sẽ nhé ❤️
        </p>

        <div className="framed-textarea-wrapper mx-auto mt-7 w-[90%] max-w-sm">
          <textarea
            {...register('content', {
              maxLength: {
                value: CONTENT_MAX_LENGTH,
                message: `Nội dung không được vượt quá ${CONTENT_MAX_LENGTH} ký tự`,
              },
              pattern: {
                value: CONTENT_REGEX,
                message: 'Nội dung không được chứa ký tự đặc biệt',
              },
            })}
            className="bg-white h-48 text-3xl mx-auto text-black resize-none framed-textarea focus:outline-none"
            style={{ fontFamily: 'Uniqlo Regular' }}
          ></textarea>
        </div>
        {errors.content && (
          <p
            role="alert"
            className="text-red-600 mt-1"
            style={{ fontFamily: 'Uniqlo Light' }}
          >
            {errors.content.message}
          </p>
        )}

        <button
          disabled={loading}
          className={`bg-[#e85454] text-white text-2xl uppercase py-2 px-4 mt-8 shadow-2xl ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          type="submit"
          style={{ fontFamily: 'Uniqlo Bold' }}
        >
          Hoàn tất
        </button>
      </form>
    </div>
  )
}
