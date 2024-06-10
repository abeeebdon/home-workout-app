import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {
  const [gender, setGender] = useState<'male' | 'female'>()
  const navigate = useNavigate()

  return (
    <section className="w-full flex justify-center items-center bg-blue-50">
      <div className="p-2 w-full max-w-[400px] h-[100vh]">
        <h2 className="text-[1.5rem] leading-[40px] text-[#2C4BA0] font-[500]">
          You are?
        </h2>
        <p className="text-[#6C757D] mt-2">
          Help us tailor your fitness experience by sharing your gender. Choose
          the option that best describes you.
        </p>
        <section className="mt-4 ">
          <article
            className={
              gender === 'male'
                ? 'p-4 flex items-center justify-center gap-8 bg-[#2C4BA0] text-white rounded-lg cursor-pointer'
                : 'p-4 flex items-center justify-center gap-8 text-[#2C4BA0] cursor-pointer'
            }
            onClick={() => setGender('male')}
          >
            <div>
              <img src="/images/male.png" alt="male" />
            </div>
            <div className="text-[1.5rem] ">
              <p>Male</p>
            </div>
          </article>
          <article
            className={
              gender === 'female'
                ? 'p-4 flex items-center justify-center gap-8 bg-[#2C4BA0] text-white rounded-lg cursor-pointer'
                : 'p-4 flex items-center justify-center gap-8 text-[#2C4BA0] cursor-pointer'
            }
            onClick={() => setGender('female')}
          >
            <div className="text-[1.5rem] ">
              <p>Female</p>
            </div>
            <div>
              <img src="/images/female.png" alt="male" />
            </div>
          </article>
        </section>
        <div
          className={
            gender
              ? 'mt-8 bg-[#2C4BA0] p-4 text-center rounded-lg text-white font-[500] cursor-pointer'
              : 'mt-8 border p-4 text-[#2C4BA0] rounded-lg text-center bg-[#C1C9D280] font-[500] cursor-pointer'
          }
          onClick={() => {
            navigate('/')
          }}
        >
          <button>Continue</button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
