import { useState } from 'react'
import { FaEye, FaEyeSlash, FaLock, FaVoicemail } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Button from '../../../components/Button'
import { SignInFormData } from '../../../utils/types/Type'

const SignIn = () => {
  const [formData, setFormData] = useState<SignInFormData>({} as SignInFormData)
  const [showPassword, setShowPassword] = useState(false)
  // const [isError, setIsError] = useState<boolean>(false)
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    navigate('/home')
    // const url = 'https://home-workout-app.onrender.com/login/'
    // const resp = await axios.post(url, formData, {
    //   headers: {
    //     'Content-Type': 'Application/json',
    //   },
    // })
    // if (resp.status === 200) {
    //   navigate('/')
    // } else {
    //   setIsError(true)
    // }
  }
  return (
    <>
      <section
        className="p-2"
        style={{
          backgroundImage: 'url(/images/signup.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <h2 className="text-[1.5rem] leading-[40px] text-[#2C4BA0] font-[500]">
          Welcome Back
        </h2>
        <p className="text-[#6C757D] mt-2">
          Log in to access your personalized workouts and track your fitness
          journey.
        </p>

        <form className="mt-[20vh]" onSubmit={handleSubmit}>
          <div className="flex items-center gap-4 my-8 outline-none">
            <FaVoicemail className="text-center" />
            <input
              id="email"
              type="text"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
              }}
              placeholder="Email/Username"
              className="basis-[90%] border-b pb-2 border-black outline-none bg-transparent text-center"
            />
          </div>
          <div className="flex items-baseline gap-4 w-full my-8">
            <FaLock />
            <div className="flex items-baseline border-b pb-2 border-black justify-between basis-[90%] bg-transparent pt-8">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value })
                }}
                className="w-full outline-none bg-transparent text-center"
              />
              <div
                onClick={() => {
                  setShowPassword(!showPassword)
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <Button icon text="Login" />
        </form>
        <NavLink to="/forgot-password">
          <div className="my-4 text-right">
            <p className="text-[#6C757D]">Forgot Password?</p>
          </div>
        </NavLink>
        <div className="w-full text-center my-4">
          <p>OR</p>
        </div>
        <div className="flex items-center justify-center gap-2 my-4">
          <p>Don’t have an account? </p>
          <Link to="/register" className="text-blue-900">
            Sign up
          </Link>
        </div>
        {/* {isError && <p> there is an error</p>} */}
      </section>
    </>
  )
}

export default SignIn
