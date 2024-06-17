<<<<<<< HEAD:frontend/src/pages/auth/signup/SignUp.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

export type SignUpFormData = {
  firstname: string
  lastname: string
  email: string
}
const SignUp = () => {
  const [formData, setFormData] = useState<SignUpFormData>({} as SignUpFormData)
  // const [showPassword, setShowPassword] = useState(false)
  const onSubmit = () => {
    fetchData()
  }
  const fetchData = () => {}
=======
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

export type SignUpFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "Registration Success!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
>>>>>>> 08a8abc23cb9b111e117d3f8bd30538077af741b:frontend/src/pages/signup/SignUp.tsx

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

        <form className="mt-4" onSubmit={onSubmit}>
          <div className="w-full">
            <div className="">
              <label htmlFor="firstname" className="block form-label">
                First Name
              </label>
              <input
                id="firstname"
                {...register("firstName", { required: "This field is required" })}
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
<<<<<<< HEAD:frontend/src/pages/auth/signup/SignUp.tsx
                type="text"
                value={formData.lastname}
                onChange={(e) => {
                  setFormData({ ...formData, lastname: e.target.value })
                }}
                placeholder="Enter Your Last Name"
=======
                {...register("lastName", { required: "This field is required" })}
>>>>>>> 08a8abc23cb9b111e117d3f8bd30538077af741b:frontend/src/pages/signup/SignUp.tsx
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

<<<<<<< HEAD:frontend/src/pages/auth/signup/SignUp.tsx
          <Button text="Sign up" location="verification" />
=======
              <input
                  id="email"
                  type="email"
                  {...register("email", { required: "This field is required" })}
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
                   {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
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
                   {...register("confirmPassword", {
                    validate: (val) => {
                      if (!val) {
                        return "This field is required";
                      } else if (watch("password") !== val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                   placeholder="Confirm Password"
                  className="signup-input"
                />
                 {errors.confirmPassword && (
                  <span className="text-red-500">{errors.confirmPassword.message}</span>
                )}
            </div>

          </div>
          <Button text="Sign up" />
>>>>>>> 08a8abc23cb9b111e117d3f8bd30538077af741b:frontend/src/pages/signup/SignUp.tsx
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
