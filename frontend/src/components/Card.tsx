import { forYou } from './data'
import { RightArrow } from './Icons'
type card = {
  text: string
  arrow: boolean
  height: string
  // default data should check for you
}
const Card = (props: card) => {
  const text = props.text
  const arrow = props.arrow
  const height = props.height
  return (
    <article className="mt-4 mb-4">
      <div className="flex justify-between  mb-4">
        <h2 className="heading-1 font-bold mb-4 text-primary">{text}</h2>
        {arrow && <RightArrow />}
      </div> 
      <div className="flex flex-1 overflow-auto relative w-full">
        {forYou.map((data, index) => {
          return (
            <div
              key={index}
              className={`w-[200px] h-${height} flex-shrink-0 relative`}
            >
              <div className="absolute top-2 right-6 w-fit p-1 bg-white rounded-full">
                <img src="/images/VectorIcon.png" alt="n" />
              </div>
<<<<<<< HEAD
              <p className="absolute bottom-3 left-2 max-w-[50px] text-[12px]">
                {data.text}
              </p>
=======
              <div className="absolute bottom-3 left-2 max-w-[50px] text-[12px]">
                <p>{data.text}</p>
              </div> 
>>>>>>> e9571720588995c277b7b02d8e52d960ff65eef1
              <img
                src={data.src}
                alt={data.text}
                className="w-[180px] h-full rounded-lg"
              /> 
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default Card
