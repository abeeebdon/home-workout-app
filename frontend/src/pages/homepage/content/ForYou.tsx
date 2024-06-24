import Card from '../../../components/Card'
const ForYou = () => {
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
      <section className="mt-4">
        <Card arrow={true} text="CATEGORIES" height="200px" />
      </section>
      <section className="my-4">
        <Card arrow={true} text="SPECIAL ROUTINES" height="200px" />
      </section>
    </article>
  )
}

export default ForYou
