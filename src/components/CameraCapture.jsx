import React, { useEffect, useRef } from 'react'
import { useSurvey } from '../context/SurveyContext'
import UploadImage from './UploadImage'

const CameraCapture = () => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
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
      } catch (err) {
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
    <div className="flex flex-col items-center space-y-4">
      {/* Video container with fixed aspect ratio */}
      {!capturedImage && (
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

          <button onClick={capturePhoto} className="record-button mb-1">
            <div className="inner-circle"></div>
          </button>
          <span
            className="uppercase bg-white py-1 px-3 leading-0 text-[0.5rem] text-[#e85454] border-[#e85454] border-1 mb-0"
            style={{ fontFamily: 'Uniqlo Bold' }}
          >
            Chụp ảnh
          </span>

          <canvas ref={canvasRef} style={{ display: 'none' }} />
        </>
      )}
      {/* Captured image preview */}
      {capturedImage && <UploadImage />}
    </div>
  )
}

export default CameraCapture
