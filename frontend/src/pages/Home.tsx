import { useEffect, useState } from 'react'
import { home as homeData } from '../components/data'
import { useNavigate } from 'react-router-dom'

<<<<<<< HEAD
const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [num, setNum] = useState(0)
  const [text, setText] = useState('')
  const [src, setSrc] = useState('')
=======
// type HomeType = { id: number; text: string; src: string }[]

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [num, setNum] = useState(0)
  // const [navDisplay, setNavDisplay] = useState(
  const [navDisplay] = useState(
       new Array(homeData.length).fill(0)
     )
  const [text, setText] = useState('')
  const [src, setSrc] = useState('')
  // const [outputData, setOutputData] = useState<HomeType>([])
>>>>>>> 08a8abc23cb9b111e117d3f8bd30538077af741b
  const navigate = useNavigate()
  const navDisplay = new Array(homeData.length).fill(0)
  useEffect(() => {
    const fetchData = () => {
<<<<<<< HEAD
      const filteredData = homeData.filter((data) => data.id - 1 === num)
=======
      const filteredData = homeData.filter((_data, index) => index === num)
      // setOutputData(filteredData)
>>>>>>> 08a8abc23cb9b111e117d3f8bd30538077af741b
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
<<<<<<< HEAD
    <section className="w-full flex flex-col">
      <div className="h-[75vh]">
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
            className={num === 0 ? 'overflow-hidden' : 'btn-transparent w-fit'}
            onClick={handleSkipBtn}
          >
            {num === 0 ? '' : 'skip'}
          </button>
          <button className="btn-blue w-fit text-right" onClick={handleNextBtn}>
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
=======
    <section className="flex items-center justify-center pt-2">
      <div className="w-full max-w-[400px]">
        <div className="h-[80vh]">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <img src={src} alt="Image" className="w-full h-full" />
          )}
        </div>
        <div className="pt-4 mt-4">
          <p>{text}</p>
          <div className="flex justify-between px-4 mt-4">
            <button
              className={
                num === 0 ? 'overflow-hidden' : 'btn-transparent w-fit'
              }
              onClick={handleSkipBtn}
            >
              {num === 0 ? '' : 'skip'}
            </button>
            <button
              className="text-right btn-blue w-fit"
              onClick={handleNextBtn}
            >
              {num === homeData.length - 1 ? 'Signin' : 'Next'}
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 py-4">
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
>>>>>>> 08a8abc23cb9b111e117d3f8bd30538077af741b
        </div>
      </div>
    </section>
  )
}

export default Home
