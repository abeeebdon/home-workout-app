import { useEffect, useState } from 'react'
import { workoutList } from '../../../components/data'
type Workout = {
  id: number
  name: ''
  source: ''
  time: ''
}
const SingleWorkout = () => {
  const [works] = useState(new Array(workoutList.length).fill(0))
  const [num, setNum] = useState<number>(1)
  const [workData, setWorkData] = useState<Workout | null>()
  const handleNav = (id: number) => {
    setNum(id)
  }
  useEffect(() => {
    const filterData = workoutList.find((data) => data.id === num)
    if (filterData) {
      setWorkData(filterData as Workout)
    } else {
      setWorkData(null)
    }
  }, [num])

  return (
    <>
      <section className="flex justify-center mt-4">
        <article>
          <h3 className="text-secondary heading">Workout {num} of 12</h3>
          <div className="flex gap-1">
            {works.map((work, index) => {
              return (
                <p
                  className={
                    index < num
                      ? 'w-6  border bg-blue-600  py-1 rounded-lg'
                      : 'w-6  border  py-1 rounded-lg'
                  }
                  key={work}
                  onClick={() => handleNav(index + 1)}
                ></p>
              )
            })}
          </div>
        </article>
      </section>
      <section className="text-center my-8">
        <h2 className="heading-2 uppercase">{workData?.name}</h2>
        <p className="text-[18px] leading-[28px] font-[500]">20s</p>
        <h3 className="text-[#6C8EEF] heading-2 ">READY TO GO</h3>
      </section>
      <div className="flex gap-6 justify-center text-[14px] leading-[20px]">
        <button className="rounded-lg w-[146px] h-[42px] bg-[#E3E8EE]">
          Pause
        </button>
        <button className="bg-secondary rounded-lg text-white w-[146px] h-[42px]">
          Skip to Training
        </button>
      </div>
    </>
  )
}

export default SingleWorkout
