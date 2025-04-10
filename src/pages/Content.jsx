import uniqloLogo from '../assets/uniqlo.svg'
import { useForm } from 'react-hook-form'
import { useSurvey } from '../context/SurveyContext'
import { useNavigate } from 'react-router'
import { useState } from 'react'

export default function Content() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [loading, setLoading] = useState(false)
  const { clearCapturedImage, completeSurvey } = useSurvey()
  const navigate = useNavigate()
  const TEXT_AREA_MAX_LENGTH = 80

  async function onSubmit(data) {
    let { content } = data
    content = encodeURIComponent(content)
    setLoading(true)
    const result = await completeSurvey(content)
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

      <h2
        className="text-3xl mt-2 leading-none"
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

      <p style={{ fontFamily: 'Uniqlo Light' }}>Cảm nhận của bạn thế nào về</p>

      <h3
        className="text-2xl text-[#e85454]"
        style={{ fontFamily: 'Uniqlo Bold' }}
      >
        UNIQLO BRATOP
      </h3>

      <p className="text-sm" style={{ fontFamily: 'Uniqlo Light' }}>
        Hãy cùng nhau chia sẽ nhé ❤️
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="framed-textarea-wrapper mx-auto mt-8">
          <textarea
            {...register('content', {
              maxLength: TEXT_AREA_MAX_LENGTH,
            })}
            className="bg-white w-[90%] h-48 text-3xl mx-auto text-black resize-none framed-textarea"
          ></textarea>
          {errors.content && (
            <span className="text-red-600">
              Nội dung không được vượt quá {TEXT_AREA_MAX_LENGTH} ký tự
            </span>
          )}
        </div>

        <button
          disabled={loading}
          className={`bg-[#e85454] text-white text-2xl uppercase py-2 px-4 mt-8 ${
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
