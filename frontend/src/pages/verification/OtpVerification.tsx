import { useState } from 'react'
// import { FaEye, FaEyeSlash, FaLock, FaStar, FaVoicemail } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

const OtpVerification = () => {
  // type SignInFormData = {
  //   email: string
  //   password: string
  // }

  // const [formData, setFormData] = useState<SignInFormData>({} as SignInFormData)
  const [otp, setOtp] = useState(new Array(4).fill(''))
  // const [otpError, setOtpError] = useState(false)

  const onSubmit = () => {
    fetchData()
  }
  const fetchData = () => {}
  const handleOtpValueChange = (index: number, data: string | number) => {
    // if (isNaN(data)) return false // do not allow alphabets
    // if (data > 9) return false // do not allow more than 9
    const updatedOtp = [...otp]
    updatedOtp[index] = data
    setOtp(updatedOtp)

    // Move to the next input field if not the last one
    // if (index < inputLength - 1 && value !== '') {
    //   inputRefs.current[index + 1].focus()
    // }
    // // jump the hyphen separator
    // if (index === 2 && value !== '') {
    //   inputRefs.current[index + 2].focus()
    // }
  }

  return (
    <section className="flex items-center justify-center w-full">
      <div className="w-full mt-4 max-w-96">
        <h2 className="text-xl text-[#2C4BA0]">Enter OTP</h2>
        <p className="text-[#111111B2]">Enter the OTP we sent to your email</p>

        <form className="mt-4" onSubmit={onSubmit}>
          <div className="flex gap-2 py-2 my-4 ">
            {otp.map((data: number, index: number) => {
              return (
                <input
                  type="text"
                  placeholder=""
                  value={data}
                  onChange={(e) => handleOtpValueChange(index, e.target.value)}
                  // key={index}
                  // className={otpError ? 'otp-err' : 'otp'}
                  // max-length="1"
                />
              )
            })}
          </div>
        </form>
      </div>
    </section>
  )
}

export default OtpVerification
