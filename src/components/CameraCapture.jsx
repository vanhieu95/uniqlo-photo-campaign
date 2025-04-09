import React, { useEffect, useRef } from 'react'
import { useSurvey } from '../context/SurveyContext'
import UploadImage from './UploadImage'

const CameraCapture = () => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const { capturedImage, captureTheImage } = useSurvey()

  useEffect(() => {
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
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      const imageDataURL = canvas.toDataURL('image/jpeg', 0.6)
      captureTheImage(imageDataURL)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Video container with fixed aspect ratio */}
      {!capturedImage && (
        <>
          <div
            className="relative w-full max-w-sm"
            style={{ width: '240px', height: '360px' }}
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
            className="uppercase bg-white py-1 px-3 text-xs text-[#e85454] border-[#e85454] border-1 mb-0"
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
