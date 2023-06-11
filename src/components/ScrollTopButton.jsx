import { useEffect, useRef, useState } from 'react'
import './ScrollTopButton.scss'

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false)

  // const showButton = useRef(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowButton(prev => (prev = true))
      } else {
        setShowButton(prev => (prev = false))
      }
    })
    return () => {
      setShowButton(prev => (prev = false))
    }
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      {showButton && (
        <button className="back-to-top" onClick={() => scrollTop()}>
          Top
        </button>
      )}
    </>
  )
}

export default ScrollTopButton
