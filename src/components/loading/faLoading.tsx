import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'

export default function FaLoading() {
  const eleRef = useRef<HTMLDivElement>(null)

  useEffect(()=> {
    let deg = 0;

    setInterval(()=> {
        eleRef.current ? eleRef.current.style.transform = `rotateZ(${deg+=5}deg)` : null
    }, 20)

  }, [])

  return (
    <div ref={eleRef}>
        <FontAwesomeIcon icon={faSpinner} />
    </div>
  )
}
