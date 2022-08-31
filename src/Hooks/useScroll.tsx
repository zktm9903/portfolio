import { useState, useEffect } from "react"

export default function useWindowScrollPosition(options) {
    let opts = Object.assign({}, defaultOptions, options)
  
    let [position, setPosition] = useState(window.pageXOffset)
  
    useEffect(() => {
      let handleScroll = _throttle(() => {
        setPosition(window.pageXOffset)
      }, opts.throttle)
  
      window.addEventListener(
        'scroll',
        handleScroll,
        supportsPassive ? { passive: true } : false
      )
  
      return () => {
        handleScroll.cancel()
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
  
    return position
  }