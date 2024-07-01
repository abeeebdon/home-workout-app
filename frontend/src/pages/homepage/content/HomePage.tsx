import { useState } from 'react'
import { btnData } from '../../../components/data'
import HomeBody from './HomeBody'

const HomePage = () => {
  const [btnActive, setBtnActive] = useState<number>(0)

  return (
    <section className="h-[90vh] p-4 overflow-scroll">
      <article>
        <div className="border rounded-lg border-gray-300 bg-transparent flex justify-around">
          {btnData.map((data, index) => {
            return (
              <button
                key={index}
                onClick={() => setBtnActive(index)}
                className={
                  index === btnActive
                    ? 'py-3 px-6 text-white basis-[34%] rounded-lg bg-[#2C4BA0]'
                    : 'py-3 px-6 text-[#2C4BA0] basis-[34%] rounded-lg'
                }
              >
                {data}
              </button>
            )
          })}
        </div>
      </article>
      <HomeBody btnActive={btnActive} />
    </section>
  )
}

export default HomePage
