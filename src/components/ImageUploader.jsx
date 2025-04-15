import React, { useRef } from 'react'
import { useSurvey } from '../context/SurveyContext'
import LibraryButton from '../assets/images/library-button.png'
import playSound from '../hooks/useSound'

export default function ImageUploader() {
  const { captureTheImage } = useSurvey()
  const inputRef = useRef(null)

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      alert('Chỉ chấp nhận ảnh JPG hoặc PNG.')
      return
    }

    const img = new Image()
    const reader = new FileReader()

    reader.onload = (event) => {
      img.onload = () => {
        // const cropped = cropToAspect(img, 3 / 4)
        captureTheImage(img.src)
      }
      img.src = event.target.result
    }

    reader.readAsDataURL(file)
  }

  // const cropToAspect = (img, aspectRatio) => {
  //   const canvas = document.createElement('canvas')

  //   const inputWidth = img.width
  //   const inputHeight = img.height
  //   const inputAspectRatio = inputWidth / inputHeight

  //   let outputWidth, outputHeight

  //   if (inputAspectRatio > aspectRatio) {
  //     // Crop width
  //     outputHeight = inputHeight
  //     outputWidth = inputHeight * aspectRatio
  //   } else {
  //     // Crop height
  //     outputWidth = inputWidth
  //     outputHeight = inputWidth / aspectRatio
  //   }

  //   const offsetX = (inputWidth - outputWidth) / 2
  //   const offsetY = (inputHeight - outputHeight) / 2

  //   canvas.width = outputWidth
  //   canvas.height = outputHeight

  //   const ctx = canvas.getContext('2d')
  //   ctx.drawImage(
  //     img,
  //     offsetX,
  //     offsetY,
  //     outputWidth,
  //     outputHeight,
  //     0,
  //     0,
  //     outputWidth,
  //     outputHeight,
  //   )

  //   // Convert to JPG
  //   return canvas.toDataURL('image/jpeg', 0.7)
  // }

  return (
    <div className="ml-auto">
      <input
        type="file"
        accept="image/jpeg,image/png"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <button
        onClick={() => {
          playSound()
          inputRef.current.click()
        }}
      >
        <img
          src={LibraryButton}
          className="mx-auto"
          alt="Cách sử dụng"
          width={80}
        />
      </button>
    </div>
  )
}
