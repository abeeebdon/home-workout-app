import { useState } from 'react'
import { FaEye, FaEyeSlash, FaLock, FaVoicemail } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
// import { BtnIcon } from '../../components/Icons'
import Button from '../../components/Button'

export type SignInFormData = {
   email: string;
   password: string;
 };

const SignIn = () => {
  const [formData, setFormData] = useState<SignInFormData>({} as SignInFormData)
  const [showPassword, setShowPassword] = useState(false)
  const onSubmit = () => {
    fetchData()
  }
  const fetchData = () => {}

  return (
    <section className="flex items-center justify-center w-full ">
      <div
        className="p-2 w-full max-w-[400px] h-[100vh]"
        style={{ backgroundImage: 'url(/images/signup.png)' }}
      >
        <h2 className="text-[1.5rem] leading-[40px] text-[#2C4BA0] font-[500]">
          Welcome Back
        </h2>
        <p className="text-[#6C757D] mt-2">
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
              className="basis-[90%] border-b border-black  outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center w-full gap-4 my-8">
            <FaLock />
            <div className="flex items-baseline border-b border-black justify-between basis-[90%] bg-transparent pt-8">
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
          <Button text="Login" />
        </form>
        <NavLink to="/forgot-password">
          <div className="my-4 text-right">
            <p className="text-[#6C757D]">Forgot Password?</p>
          </div>
        </NavLink>
        <div className="w-full my-4 text-center">
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
