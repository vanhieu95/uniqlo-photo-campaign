import React, { useEffect, useRef, useState } from 'react'

const CameraCapture = () => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [capturedImage, setCapturedImage] = useState(null)

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
  }, [])

  const capturePhoto = () => {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (video && canvas) {
      const context = canvas.getContext('2d')
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      const imageDataURL = canvas.toDataURL('image/png')
      setCapturedImage(imageDataURL)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Video container with fixed aspect ratio */}
      <div
        className="relative w-full max-w-sm"
        style={{ aspectRatio: '3 / 5' }}
      >
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      <button
        onClick={capturePhoto}
        className="bg-red-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-red-600 transition"
      >
        Capture
      </button>

      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {/* Captured image preview */}
      {capturedImage && (
        <div
          className="relative w-full max-w-sm"
          style={{ aspectRatio: '3 / 5' }}
        >
          <img
            src={capturedImage}
            alt="Captured"
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      )}
    </div>
  )
}

export default CameraCapture
