import { FaArrowLeft } from 'react-icons/fa'
import { workoutList } from '../../../components/data'

const Workouts = () => {
  return (
    <section className="p-4">
      <article>
        <div className="h-[60vh] max-h-[280px] relative">
          <img
            src="/images/image-sit.png"
            alt="sit out image"
            className="w-full h-full"
          />
          <div className="flex gap-6 items-center text-[1.5rem] absolute top-0 left-2">
            <FaArrowLeft />
            <h2>ABS BEGINNER</h2>
          </div>
        </div>
      </article>
      <article>
        <div></div>
        <div>
          <div></div>
          {workoutList.map((workout) => {
            return (
              <div key={workout.id}>
                <h2>{workout.name}</h2>
                <p>{workout.time}</p>
              </div>
            )
          })}
        </div>
      </article>
      <div>
        <button>Continue</button>
      </div>
    </section>
  )
}

export default Workouts
