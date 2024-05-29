// import { useQuery } from "react-query";
// import * as apiClient from "../api-client";
// import LatestDestinationCard from "../components/LatestDestinationCard";
import { useEffect, useState } from 'react'
import { home } from '../components/data'
type home = { id: number; text: string }[]
const Home = () => {
  // const { data: hotels } = useQuery("fetchQuery", () =>
  //   apiClient.fetchHotels()
  // );

  // const topRowHotels = hotels?.slice(0, 2) || [];
  // const bottomRowHotels = hotels?.slice(2) || [];
  const [num, setNum] = useState(1)
  const [text, setText] = useState('')
  const [outputData, setOutputData] = useState<undefined | home>()
  useEffect(() => {
    const filteredData = home.filter((data) => data.id === num)
    setOutputData(filteredData)
    outputData?.map((data) => {
      const text: string | undefined = data.text
      setText(text)
    })
  }, [num])
  const handleNextBtn = () => {
    if (home.length > num) {
      setNum(num + 1)
    } else {
      setNum(1)
    }
  }
  return (
    <section className="flex justify-center items-center">
      <div className="w-full max-w-96">
        <div className="h-[80vh] mt-4">
          <img src="" alt="image1" />
        </div>
        <div>
          <p>{text}</p>
          <div className="mt-4 text-right">
            <button className="btn-blue" onClick={handleNextBtn}>
              Next
            </button>
          </div>
        </div>
        {/* <h2 className="text-3xl font-bold">Latest Destinations</h2>
      <p>Most recent desinations added by our hosts</p> */}
        <div className="grid gap-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* {topRowHotels.map((hotel) => (
            <LatestDestinationCard hotel={hotel} />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {bottomRowHotels.map((hotel) => (
            <LatestDestinationCard hotel={hotel} />
          ))} */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
