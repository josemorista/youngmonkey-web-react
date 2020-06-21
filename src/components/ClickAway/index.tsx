import React, { useCallback, useEffect, useRef } from 'react'

const Content: React.FC<{ onClose: any }> = ({ onClose, children }) => {
  const ref = useRef(null)
  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }, [onClose])
  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (onClose && !(ref.current! as any).contains(e.target)) {
        onClose()
      }
    },
    [onClose],
  )
  useEffect(() => {
    document.addEventListener('click', clickListener)
    document.addEventListener('keyup', escapeListener)
    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keyup', escapeListener)
    }
  }, [clickListener, escapeListener])
  return (
    <div
      ref={ref}
    >
      {children}
    </div>
  )
}

export default Content;