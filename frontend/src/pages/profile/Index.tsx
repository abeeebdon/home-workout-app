import {
  fitnessGoals,
  profileData,
  workoutPreference,
} from '../../components/data'

const Profile = () => {
  const profile = profileData
  return (
    <section className="px-4">
      <article className="text-center py-4 border-b-2">
        <div></div>
        <div className="flex justify-center flex-col">
          <img
            src="/images/profile.png"
            alt="profile img"
            className="mb-2 mx-auto size-20"
          />
          <p>John Dane</p>
        </div>
        <div className="my-2">
          <button className="border p-2 rounded-lg border-[#2C4BA0] text-[#2C4BA0]">
            Edit Profile
          </button>
        </div>
      </article>
      <article className="py-4">
        <h2 className="font-[500] text-[#343A40]">Basic Info</h2>
        <div className="border bg-[#CED4DA] rounded-lg w-full max-w-[400px] mx-auto mt-4 px-4 py-6">
          <div className="w-[280px] ">
            <div className="flex gap-12 py-1">
              <div className="basis-[30%] flex justify-between">
                <p>Age</p>
                <span>:</span>
              </div>
              <p>{profile.Age}</p>
            </div>
            <div className="flex gap-12 py-1">
              <div className="basis-[30%] flex justify-between">
                <p>Weight</p>
                <span>:</span>
              </div>
              <p>{profile.weight}</p>
            </div>
            <div className="flex gap-12 py-1">
              <div className="basis-[30%] flex justify-between">
                <p>Height</p>
                <span>:</span>
              </div>
              <p>{profile.height}</p>
            </div>
          </div>
        </div>
      </article>
      <article className="py-4 my-4">
        <h2 className="font-[500] text-[#343A40]">Fitness Goals</h2>
        <div className="border bg-[#CED4DA] rounded-lg w-full max-w-[400px] mx-auto mt-4 px-4 py-6">
          <div className="flex flex-wrap gap-4">
            {fitnessGoals.map((data, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#6C8EEF] rounded-lg text-white p-2"
                >
                  <p>{data}</p>
                </div>
              )
            })}
          </div>
        </div>
      </article>
      <article className="py-4 my-4">
        <h2 className="font-[500] text-[#343A40]">Workout Preference</h2>
        <div className="border bg-[#CED4DA] rounded-lg w-full max-w-[400px] mx-auto mt-4 px-4 py-6">
          <div className="flex flex-wrap gap-4">
            {workoutPreference.map((data, index) => {
              return (
                <div
                  key={index}
                  className="bg-[#6C8EEF] rounded-lg text-white p-2"
                >
                  <p>{data}</p>
                </div>
              )
            })}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Profile
