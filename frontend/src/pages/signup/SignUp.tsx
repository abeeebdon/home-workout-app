import { useState } from 'react'
import { FaEye, FaEyeSlash, FaLock, FaVoicemail } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BtnIcon } from '../../components/Icons'
import Button from '../../components/Button'

const SignUp = () => {
  type SignInFormData = {
    firstname: string
    lastname: string
    email: string
  }

  const [formData, setFormData] = useState<SignInFormData>({} as SignInFormData)
  const [showPassword, setShowPassword] = useState(false)
  const onSubmit = () => {
    fetchData()
  }
  const fetchData = () => {}

  return (
    <section className="w-full flex justify-center items-center">
      <div className="p-2 w-full max-w-[400px] h-[100vh]">
        <h2 className="text-[1.5rem] leading-[40px] text-[#2C4BA0] font-[500]">
          Welcome !!!
        </h2>
        <p className="text-[#6C757D] mt-2">
          Get personalized fitness with us! Sign up for tailored workouts, track
          progress, and connect with others. Start now!
        </p>

        <form className="mt-4" onSubmit={onSubmit}>
          <div className="w-full">
            <div className="">
              <label htmlFor="firstname" className="form-label block">
                First Name
              </label>
              <input
                id="firstname"
                type="text"
                value={formData.firstname}
                onChange={(e) => {
                  setFormData({ ...formData, firstname: e.target.value })
                }}
                placeholder="Enter Your First Name"
                className="signup-input"
              />
            </div>
            <div className="">
              <label htmlFor="lastname" className="form-label block">
                Last Name
              </label>
              <input
                id="lastname"
                type="text"
                value={formData.lastname}
                onChange={(e) => {
                  setFormData({ ...formData, firstname: e.target.value })
                }}
                placeholder="Enter Your Last Name"
                className="signup-input"
              />
            </div>
            <div className="">
              <label htmlFor="email" className="form-label block">
                Email
              </label>
              <input
                id="email"
                type="text"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value })
                }}
                placeholder="Email/Username"
                className="signup-input"
              />
            </div>
          </div>

          <Button text="Sign up" />
        </form>

        <Link to="/signin">
          <div className="flex items-center justify-center gap-2 my-4">
            <p>Already have an account? </p>

            <span className="text-blue-900">Log in</span>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default SignUp
