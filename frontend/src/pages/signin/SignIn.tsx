import { useState } from 'react'
import { FaEye, FaEyeSlash, FaLock, FaStar, FaVoicemail } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type SignInFormData = {
  email: string
  password: string
}

const SignIn = () => {
  const [formData, setFormData] = useState<SignInFormData>({} as SignInFormData)
  const [showPassword, setShowPassword] = useState(false)
  const onSubmit = () => {
    fetchData()
  }
  const fetchData = () => {}

  return (
    <section className="w-full flex justify-center items-center">
      <div className="mt-4 w-full max-w-96">
        <h2 className="text-xl text-[#2C4BA0]">Welcome Back</h2>
        <p className="text-[#111111B2]">
          Log in to access your personalized workouts and track your fitness
          journey.
        </p>

        <form className="mt-[20vh]" onSubmit={onSubmit}>
          <div className="flex items-center gap-4 my-8">
            <FaVoicemail className="text-center" />
            <input
              id="email"
              type="text"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value })
              }}
              placeholder="Email/Username"
              className="basis-[90%] border-b border-black  outline-none"
            />
          </div>
          <div className="flex items-center gap-4 w-full my-8">
            <FaLock />
            <div className="flex items-baseline border-b border-black justify-between basis-[90%]">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value })
                }}
                className="w-full outline-none"
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
          <div>
            <button
              type="submit"
              className="flex btn-blue w-full justify-center items-center gap-2"
            >
              <FaStar />
              <span>Login</span>
            </button>
          </div>
        </form>
        <div className="my-4 text-right">
          <p>Forgot Password?</p>
        </div>
        <div className="w-full text-center my-4">
          <p>OR</p>
        </div>
        <div className="flex items-center justify-center gap-2 my-4">
          <p>Don’t have an account? </p>
          <Link to="/register" className="text-blue-900">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SignIn
