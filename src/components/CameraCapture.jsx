import React, { useEffect, useRef, useState } from 'react'
import { useSurvey } from '../context/SurveyContext'
import ScreenShotButton from '../assets/images/screen-shot-button.png'
import ImageUploader from './ImageUploader'
import playSound from '../hooks/useSound'
// import useCameraPermissionWatcher from '../hooks/useCameraPermissionWatcher'

export default function CameraCapture() {
  // const cameraPermission = useCameraPermissionWatcher()
  const { capturedImage, captureTheImage } = useSurvey()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isCameraOff, setIsCameraOff] = useState(false)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const streamRef = useRef(null)

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
        streamRef.current = stream

        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
        setIsVideoLoaded(true)
      } catch (err) {
        setIsVideoLoaded(false)
        console.error('Error accessing camera: ', err)
      }
    }

    // if (cameraPermission === 'granted') {
    //   getCamera()
    // }
    getCamera()
  }, [capturedImage])

  function turnOffCamera() {
    const video = videoRef.current

    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop()
      })
      streamRef.current = null
    }

    if (video) {
      video.srcObject = null
      video.removeAttribute('src')
      video.pause()
      // video.load()
    }

    setIsCameraOff(true)
    setIsVideoLoaded(false)
  }

  const capturePhoto = () => {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (video && canvas) {
      const context = canvas.getContext('2d')
      const videoWidth = video.videoWidth
      const videoHeight = video.videoHeight

      const aspectRatio = 3 / 4
      let cropWidth = videoWidth
      let cropHeight = cropWidth / aspectRatio

      if (cropHeight > videoHeight) {
        cropHeight = videoHeight
        cropWidth = cropHeight * aspectRatio
      }

      const cropX = (videoWidth - cropWidth) / 2
      const cropY = (videoHeight - cropHeight) / 2

      canvas.width = cropWidth
      canvas.height = cropHeight

      context.save()
      context.scale(-1, 1)
      context.translate(-canvas.width, 0)
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
      context.restore()

      const imageDataUrl = canvas.toDataURL('image/jpeg', 0.75)
      captureTheImage(imageDataUrl)
    }
  }

  function isButtonDisabled() {
    return !isVideoLoaded || isCameraOff
  }

  return (
    <>
      <div
        className="relative w-[85%] max-w-sm"
        style={{ aspectRatio: '3 / 4' }}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md border-2 border-[#e85454]"
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>

      <div className="flex w-[85%] max-w-sm items-end-safe">
        <button
          className={`ml-auto translate-x-[35%] ${
            isButtonDisabled() ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isButtonDisabled()}
          onClick={() => {
            playSound()
            capturePhoto()
            turnOffCamera()
          }}
        >
          <img
            src={ScreenShotButton}
            className={`${
              !isVideoLoaded || isCameraOff
                ? 'opacity-50 cursor-not-allowed'
                : ''
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
