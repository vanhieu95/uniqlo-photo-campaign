import { useEffect, useState } from 'react'

export default function useCameraPermissionWatcher() {
  const [cameraPermission, setCameraPermission] = useState('prompt') // or 'granted', 'denied'

  useEffect(() => {
    let permissionStatus = null

    async function checkPermission() {
      try {
        permissionStatus = await navigator.permissions.query({ name: 'camera' })

        setCameraPermission(permissionStatus.state)

        permissionStatus.onchange = () => {
          const newState = permissionStatus.state
          setCameraPermission(newState)
        }
      } catch (error) {
        console.warn('Permissions API not supported or failed:', error)
      }
    }

    checkPermission()

    return () => {
      if (permissionStatus) {
        permissionStatus.onchange = null
      }
    }
  }, [])

  return cameraPermission
}
