import { useNavigate } from 'react-router-dom'
import { EmojiSad } from '../../components/Icons'

const WorkoutCompleted = () => {
  const navigate = useNavigate()
  return (
    <section>
      <div className="h-[60vh] relative">
        <img
          src="/images/image-sit.png"
          alt="sit out image"
          className="w-full h-full"
        />
        <div className="absolute bottom-[5%] left-10 z-20 text-[#F7F9FC]">
          <h2 className="font-[700] text-[1.5rem] leading-10 text-white ">
            Congratulation!!!
          </h2>
          <p>You’ve completed your workout!</p>
          <p className="font-[500]">Abs Beginner</p>
        </div>
      </div>
      <section className="bg-white">
        <article className="flex justify-around py-6 bg-blue-50 text-[#343A40]">
          <div className="text-center">
            <p>Exercises</p>
            <h2 className="font-[700] text-center text-[1.4rem] leading-9 text-[#2C4BA0]">
              16
            </h2>
          </div>
          <div className="text-center">
            <p>Total Calories</p>
            <h2 className="font-[700] text-center text-[1.4rem] leading-9 text-[#2C4BA0]">
              125 Kcal
            </h2>
          </div>
          <div className="text-center">
            <p>Duration</p>
            <h2 className="font-[700] text-center text-[1.4rem] leading-9 text-[#2C4BA0]">
              20 mins
            </h2>
          </div>
        </article>
        <article className="mt-6 bg-blue-50 p-4 px-6 border">
          <div className="text-center">
            <h2 className="text-[#343A40] font-[500] leading-5 my-4">
              How was the experience?
            </h2>
            <p>
              Your feedback will help us provide more suitable workouts for you
            </p>
          </div>
          <div className="flex justify-center gap-8 mt-4">
            <div className="">
              <div className="bg-[#CED4DA] p-4 rounded-full my-2">
                <EmojiSad />
              </div>
              <p>Too hard</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#CED4DA] p-4 rounded-full my-2">
                <EmojiSad />
              </div>
              <p>Just right</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#CED4DA] p-4 rounded-full my-2">
                <EmojiSad />
              </div>
              <p>Too Easy</p>
            </div>
          </div>
        </article>
      </section>
      <article className="bg-white p-8">
        <div className="w-full bg-[#2C4BA0] p-4 text-white text-center rounded-lg">
          <button className="">Continue</button>
        </div>
        <div
          className="w-full border border-[#2C4BA0] p-4 text-[#2C4BA0] font-[500] text-center rounded-lg mt-4 cursor-pointer"
          onClick={() => navigate('/home')}
        >
          <button>Go Home</button>
        </div>
      </article>
    </section>
  )
}

export default WorkoutCompleted
