import uniqloLogo from '../assets/uniqlo.svg'
import { useForm } from 'react-hook-form'
import { useSurvey } from '../context/SurveyContext'
import { useNavigate } from 'react-router'

export default function Content() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { clearCapturedImage, completeSurvey } = useSurvey()
  const navigate = useNavigate()
  const TEXT_AREA_MAX_LENGTH = 80

  async function onSubmit(data) {
    let { content } = data
    content = encodeURIComponent(content)
    const result = await completeSurvey(content)

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
          className="block mx-auto py-5"
          alt="Uniqlo logo"
          width={200}
          height={200}
        />
      </h1>

      <p className="text-3xl text-white font-bold my-5">
        Wear <span>UNIQLO BRA TOP</span> and feel ...
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <textarea
            {...register('content', {
              maxLength: TEXT_AREA_MAX_LENGTH,
            })}
            className="bg-white w-full h-36 text-3xl"
          ></textarea>
          {errors.content && (
            <span className="text-red-600">
              Nội dung không được vượt quá {TEXT_AREA_MAX_LENGTH} ký tự
            </span>
          )}
        </div>

        <button
          className="bg-red-600 text-white text-3xl font-bold uppercase py-4 px-8 mt-10"
          type="submit"
        >
          Hoàn tất
        </button>
      </form>
    </div>
  )
}
