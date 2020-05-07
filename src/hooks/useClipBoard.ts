import { useEffect, useRef } from 'react'

function useClipBoard() {
  const copyRef = useRef<HTMLAnchorElement | null>(null)
  const helperRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const { current: copyEl } = copyRef
    const { current: helperEl } = helperRef

    if (copyEl && helperEl) {
      copyEl.addEventListener('mouseover', () => {
        helperEl.innerHTML = 'Copy to clipboard'
        helperEl.style.opacity = '1'
        helperEl.style.transform = 'translate(-50%, 0)'
      })
      copyEl.addEventListener('mouseleave', () => {
        helperEl.innerHTML = ''
        helperEl.style.opacity = '0'
        helperEl.style.transform = 'translate(-50%, 10px)'
      })
      copyEl.addEventListener('click', () => {
        const textArea = document.createElement('textarea')

        if (textArea) {
          textArea.value = copyEl.textContent!
          document.body.appendChild(textArea)
          textArea.select()
          document.execCommand('Copy')
          textArea.remove()
        }

        helperEl.innerHTML = 'Copied!'
        helperEl.style.opacity = '1'
        setTimeout(() => {
          helperEl.style.opacity = '0'
          helperEl.style.transform = 'translate(-50%, 10px)'
        }, 3e3)
      })
    }
  })

  return [copyRef, helperRef]
}

export default useClipBoard
