import { useEffect } from 'react'

const useUnmount = (fn: () => void) => {
  useEffect(() => {
    return () => {
      fn?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useUnmount
