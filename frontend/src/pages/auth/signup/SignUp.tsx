import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

import { useForm } from 'react-hook-form'
import axios from 'axios'
// import { useMutation, useQueryClient } from 'react-query'
// import { Signup } from '../../../api-client'
// import { useAppContext } from '../../../contexts/AppContext'
// import { useNavigate } from 'react-router-dom'

export type SignUpFormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const SignUp = () => {
  // const queryClient = useQueryClient()
  // const navigate = useNavigate()
  // const { showToast } = useAppContext()
  const url = 'https://home-workout-app.onrender.com/api/users/register'
  const { register, watch, handleSubmit, formState, getValues } =
    useForm<SignUpFormData>()

  const { errors } = formState
  // const mutation = useMutation(apiClient.register, {
  //   onSuccess: async () => {
  //     showToast({ message: 'Registration Success!', type: 'SUCCESS' })
  //     await queryClient.invalidateQueries('validateToken')
  //     navigate('/')
  //   },
  //   onError: (error: Error) => {
  //     showToast({ message: error.message, type: 'ERROR' })
  //   },
  // })
  const Signup = async (data: SignUpFormData) => {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
  }
  const onSubmit = () => {
    const data = getValues()
    Signup(data)
    console.log(data)
  }

  return (
    <section className="flex items-center justify-center w-full">
      <div className="p-2 w-full max-w-[400px] h-[100vh]">
        <h2 className="text-[1.5rem] leading-[40px] text-[#2C4BA0] font-[500]">
          Welcome !!!
        </h2>
        <p className="text-[#6C757D] mt-2">
          Get personalized fitness with us! Sign up for tailored workouts, track
          progress, and connect with others. Start now!
        </p>

        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="">
              <label htmlFor="firstname" className="block form-label">
                First Name
              </label>
              <input
                id="firstname"
                {...register('firstName', {
                  required: 'This field is required',
                })}
                className="signup-input"
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
            </div>

            <div className="">
              <label htmlFor="lastname" className="block form-label">
                Last Name
              </label>
              <input
                id="lastname"
                {...register('lastName', {
                  required: 'This field is required',
                })}
                className="signup-input"
              />
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </div>

            <div className="">
              <label htmlFor="email" className="block form-label">
                Email
              </label>

              <input
                id="email"
                type="email"
                {...register('email', { required: 'This field is required' })}
                placeholder="Enter your Email for username"
                className="signup-input"
                // ></input>
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="">
              <label htmlFor="password" className="block form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register('password', {
                  required: 'This field is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                })}
                placeholder="Create Password"
                className="signup-input"
                // ></input>
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div className="">
              <label htmlFor="password" className="block form-label">
                Confirm Password
              </label>
              <input
                id="password"
                type="password"
                {...register('confirmPassword', {
                  validate: (val) => {
                    if (!val) {
                      return 'This field is required'
                    } else if (watch('password') !== val) {
                      return 'Your passwords do no match'
                    }
                  },
                })}
                placeholder="Confirm Password"
                className="signup-input"
              />
              {errors.confirmPassword && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
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
