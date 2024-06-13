import { FaSearch } from 'react-icons/fa'
import { forYou } from '../../../components/data'
import { RightArrow } from '../../../components/Icons'
import { useState } from 'react'
import Card from '../../../components/Card'

type incomingData = { btnActive: number }
const HomeBody = (props: incomingData) => {
  const [selectedLevel, setSelectedLevel] = useState<string>('beginner')
  const btnActive = props.btnActive
  // if index is zero if is the for you part
  // if index is 1 it is browse and
  //if index is 2 it is saved
  const handleSelectedLevel = (e: any) => {
    setSelectedLevel(e.target.value)
  }
  if (btnActive === 0) {
    return (
      <article>
        <h2 className="text-[1.2rem] font-[500] mt-[1rem]">SELECTED FOR YOU</h2>
        <div className="h-[200px] w-full relative max-w-[500px] rounded-lg mt-4">
          <div className="absolute right-4 top-3">
            <img src="/images/Vector-2.png" alt="vector2" />
          </div>
          <img
            src="/images/image-sit.png"
            alt="sit up"
            className="h-full w-full rounded-lg"
          />
          <div className="absolute left-5 bottom-2 text-white">
            <h3 className="font-[700]">ABS BEGINNER</h3>
            <p className="font-[500]">20 MINS . 16 EXERCISES</p>
          </div>
        </div>
        <h2 className="my-4">Your progress</h2>
        <section className="bg-[#F7F9FC] p-4 rounded-lg">
          <div className="flex justify-between">
            <p>You have not started any program.</p>
            <span className="font-[500] text-[1.5rem] text-[#2C4BA0]">0%</span>
          </div>
          <article className="bg-[#6C8EEF] mt-4 rounded-lg p-4">
            <div className="flex text-white items-baseline gap-4">
              <h2>Health Metrics</h2>
              <p className="text-[10px]">Updated 5 mins ago</p>
            </div>
            <article className="mt-5 flex justify-around items-center">
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-[10px]">Weight</p>
                <p className="text-[#2C4BA0] text-[1.3rem] font-[700]">
                  176<sub className="text-[#6C757D] font-normal">lbs</sub>
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg text-center">
                <p>Steps</p>
                <p className="text-[#2C4BA0] text-[1.3rem] font-[700]">298</p>
              </div>

              <div className="bg-white p-4 rounded-lg text-center">
                <p>Weight</p>

                <p className="text-[#2C4BA0] text-[1.3rem] font-[700]">
                  105<sub>bpm</sub>
                </p>
              </div>
            </article>
          </article>
        </section>
        <section>
          <div className="flex justify-between px-6 mb-4">
            <h2>CATEGORIES</h2>
            <RightArrow />
          </div>
          <div className="flex flex-1 overflow-auto w-full">
            {forYou.map((data, index) => {
              return (
                <div key={index} className="w-[200px] h-[180px] flex-shrink-0">
                  <img
                    src={data.src}
                    alt={data.text}
                    className="w-[180px] h-full rounded-lg"
                  />
                </div>
              )
            })}
          </div>
        </section>
        <section className="my-4">
          <div className="flex justify-between px-6 mb-4">
            <h2>Special Routines</h2>
            <RightArrow />
          </div>
          <div className="flex flex-1 overflow-auto w-full">
            {forYou.map((data, index) => {
              return (
                <div key={index} className="w-[200px] h-[180px] flex-shrink-0">
                  <img
                    src={data.src}
                    alt={data.text}
                    className="w-[180px] h-full rounded-lg"
                  />
                </div>
              )
            })}
          </div>
        </section>
      </article>
    )
  } else if (btnActive === 1) {
    return (
      <section>
        <div className="flex w-full mt-4 bg-[#6C8EEF] items-center p-4 rounded-xl">
          <input
            type="text"
            className="w-full bg-transparent text-white outline-none border-none placeholder:text-white px-4"
            placeholder="Search Program"
          />
          <FaSearch className="basis-[20%] text-white text-[1.2rem] " />
        </div>
        <article className="mt-4">
          <div className=" mb-4">
            <h3>Select Level</h3>
          </div>
          <div>
            <select
              id="level"
              value={selectedLevel}
              onChange={(e) => handleSelectedLevel(e)}
              className="block w-full p-2 border border-gray-300 rounded-md bg-transparent focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="Beginner">Beginner</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        </article>
        <Card />
        <Card />
      </section>
    )
  } else {
    return <p>Saved</p>
  }
}

export default HomeBody
