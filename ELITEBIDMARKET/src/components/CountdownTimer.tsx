import { useState, useEffect } from "react"

interface ItemProps {
  endTime: string
}

const CountdownTimer = (props: ItemProps) => {
  const [countdown, setCountdown] = useState<string>("")

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date()
      const end = new Date(props.endTime)
      const timeDifference = end.getTime() - now.getTime()

      if (timeDifference <= 0) {
        setCountdown("Expired")
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        )
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        if (days > 0) {
          setCountdown(
            `${days}d ${formatTwoDigits(hours)}:${formatTwoDigits(
              minutes
            )}:${formatTwoDigits(seconds)}`
          )
        } else {
          setCountdown(
            `${formatTwoDigits(hours)}:${formatTwoDigits(
              minutes
            )}:${formatTwoDigits(seconds)}`
          )
        }
      }
    }

    // Update countdown every second
    const intervalId = setInterval(calculateCountdown, 1000)

    // Clear interval on component unmount
    return () => clearInterval(intervalId)
  }, [props.endTime])

  const formatTwoDigits = (value: number): string => {
    return value < 10 ? `0${value}` : `${value}`
  }

  return (
    <div>
      <p>{countdown}</p>
    </div>
  )
}

export default CountdownTimer
