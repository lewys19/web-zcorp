import { useEffect, useState } from 'react'

export function useTypewriter(words, { type = 70, erase = 35, hold = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  // Empieza con la primera palabra completa para que el HTML prerenderizado tenga un <h1> legible.
  const [text, setText] = useState(words[0])
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let delay = deleting ? erase : type
    if (!deleting && text === word) delay = hold

    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true)
      if (deleting && text === '') {
        setDeleting(false)
        return setIndex((i) => i + 1)
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)))
    }, delay)
    return () => clearTimeout(t)
  }, [text, deleting, index, words, type, erase, hold])

  return text
}
