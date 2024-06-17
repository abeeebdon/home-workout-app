import { useState } from 'react'
import { FaEye, FaEyeSlash, FaLock, FaVoicemail } from 'react-icons/fa'
import Button from '../../components/Button'
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../api-client";
import { useAppContext } from "../../contexts/AppContext";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";


export type SignInFormData = {
   email: string;
   password: string;
 };

 const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
      await queryClient.invalidateQueries("validateToken");
      navigate(location.state?.from?.pathname || "/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });

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
               type="email"
               {...register("email", { required: "This field is required" })}
              placeholder="Email/Username"
              className="basis-[90%] border-b border-black  outline-none bg-transparent"
            />
            {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
          </div>
          <div className="flex items-center w-full gap-4 my-8">
            <FaLock />
            <div className="flex items-baseline border-b border-black justify-between basis-[90%] bg-transparent pt-8">
              <input
                id="password"
                 type="password"
                placeholder="Password"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full outline-none"
              />
               {errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}

              <div
                onClick={() => {
                  setShowPassword(!showPassword)
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <Button  text="Login" /> 
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
