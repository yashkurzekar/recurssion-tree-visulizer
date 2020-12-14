import React from 'react'

// executa callback enquanto delay não for null
const useInterval = (callback: () => void, delay: number | null) => {
  const latestCallback = React.useRef(() => {})

  React.useEffect(() => {
    latestCallback.current = callback
  }, [callback])

  // reinicia o intervalo com um novo delay se delay mudar para algum valor não nulo
  // não reinicia o intervalo se a callback mudar, mas latestCallback sempre refencia a última callback
  React.useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => latestCallback.current(), delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
