import React, { useEffect, useRef, useState } from 'react'
import { useSurvey } from '../context/SurveyContext'
import ScreenShotButton from '../assets/images/screen-shot-button.png'
import ImageUploader from './ImageUploader'

export default function CameraCapture() {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const { capturedImage, captureTheImage } = useSurvey()

  useEffect(() => {
    if (capturedImage != null) {
      return
    }

    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
          audio: false,
        })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
        setIsVideoLoaded(true)
      } catch (err) {
        setIsVideoLoaded(false)
        console.error('Error accessing camera: ', err)
      }
    }

    getCamera()
  }, [capturedImage])

  const capturePhoto = () => {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (video && canvas) {
      const context = canvas.getContext('2d')
      const videoWidth = video.videoWidth
      const videoHeight = video.videoHeight

      // Desired aspect ratio
      const aspectRatio = 3 / 4

      // Calculate dimensions for center crop
      let cropWidth = videoWidth
      let cropHeight = cropWidth / aspectRatio

      if (cropHeight > videoHeight) {
        cropHeight = videoHeight
        cropWidth = cropHeight * aspectRatio
      }

      const cropX = (videoWidth - cropWidth) / 2
      const cropY = (videoHeight - cropHeight) / 2

      // Set canvas size to the cropped size
      canvas.width = cropWidth
      canvas.height = cropHeight

      // Draw cropped video frame to canvas
      context.drawImage(
        video,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        0,
        0,
        canvas.width,
        canvas.height,
      )

      // You can then convert canvas to image or do whatever you need
      const imageDataUrl = canvas.toDataURL('image/jpeg', 0.75)
      captureTheImage(imageDataUrl)
    }
  }

  return (
    <>
      <div
        className="relative w-full max-w-[85%]"
        style={{ aspectRatio: '3 / 4' }}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md border-2 border-[#e85454]"
        />
      </div>

      <div className="flex w-[85%] items-end-safe">
        <button
          className="ml-auto translate-x-[35%]"
          disabled={!isVideoLoaded}
          onClick={capturePhoto}
        >
          <img
            src={ScreenShotButton}
            className={`${
              !isVideoLoaded ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            alt="Chụp ảnh"
            width={100}
          />
        </button>

        <ImageUploader />
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </>
  )
}
