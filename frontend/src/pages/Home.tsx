import { useEffect, useState } from 'react'
import { home as homeData } from '../components/data'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [num, setNum] = useState(0)
  const [text, setText] = useState('')
  const [src, setSrc] = useState('')
  const navigate = useNavigate()
  const navDisplay = new Array(homeData.length).fill(0)
  useEffect(() => {
    const fetchData = () => {
      const filteredData = homeData.filter((data) => data.id - 1 === num)
      if (filteredData.length > 0) {
        setSrc(filteredData[0].src)
        setText(filteredData[0].text)
      }
    }
    setIsLoading(true)
    fetchData()
    setIsLoading(false)
  }, [num])
  const handleNextBtn = () => {
    if (num < homeData.length - 1) {
      setNum(num + 1)
    } else {
      navigate('/signin')
    }
  }
  const handleSkipBtn = () => {
    setNum(homeData.length - 1)
  }

  const handleBottomIcons = (id: number) => {
    setNum(id)
  }
  return (
    <section className="flex justify-center items-center pt-2 bg-blue-50">
      <div className="w-full max-w-[400px]">
        <div className="h-[80vh]">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <img src={src} alt="Image" className="w-full h-full" />
          )}
        </div>
        <div className="mt-4 pt-4">
          <p>{text}</p>
          <div className="mt-4 flex justify-between px-4">
            <button
              className={
                num === 0 ? 'overflow-hidden' : 'btn-transparent w-fit'
              }
              onClick={handleSkipBtn}
            >
              {num === 0 ? '' : 'skip'}
            </button>
            <button
              className="btn-blue w-fit text-right"
              onClick={handleNextBtn}
            >
              {num === homeData.length - 1 ? 'Signin' : 'Next'}
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 py-4">
            {navDisplay.map((data, index) => {
              return (
                <div
                  className={
                    index === num
                      ? 'w-4  border bg-blue-600 px-3 py-2 rounded-lg'
                      : 'w-4  border border-blue-600 px-3 py-2 rounded-lg'
                  }
                  key={data}
                  onClick={() => handleBottomIcons(index)}
                >
                  <p className="w-full "></p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
