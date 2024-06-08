import { useEffect, useRef, useState } from 'react'
import { DeleteIcon, GoIcon } from '../../components/Icons'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const OtpVerification = () => {
  const navigate = useNavigate()
  const inputRefs = useRef<HTMLInputElement[]>([])
  const buttonRef = useRef<HTMLButtonElement>()
  // const [formData, setFormData] = useState<SignInFormData>({} as SignInFormData)
  const [otp, setOtp] = useState(new Array(4).fill(''))
  const [timer, setTimer] = useState(60)
  const [inputKey, setInputKey] = useState<number | undefined>()
  const [num, setNum] = useState(0)
  const [keyboard, setKeyboard] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ])
  const [otpError, setOtpError] = useState(false)

  const onSubmit = () => {
    fetchData()
  }

  const fetchData = () => {}
  const handleOtpValueChange = (index: number, data: number) => {
    if (inputKey) {
      const updatedOtp = [...otp]
      updatedOtp[index] = inputKey
      setOtp(updatedOtp)
    } else {
      if (isNaN(data)) return false // do not allow alphabets
      if (data > 9) return false // do not allow more than 9
      const updatedOtp = [...otp]
      updatedOtp[index] = data
      setOtp(updatedOtp)

      // Move to the next input field if not the last one
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus()
      }
    }
  }
  const handleBackspace = (index: number, event: any) => {
    if (event.key === 'Backspace' && index > 0) {
      const updatedOtp = [...otp]
      updatedOtp[index] = ''
      setOtp(updatedOtp)
      if (index > 0) {
        inputRefs.current[index - 1].focus()
      }
    }
  }

  const decrementTimer = () => {
    setTimer((prev) => prev - 1)
  }

  useEffect(() => {
    if (timer > 0) {
      const timerId = setInterval(decrementTimer, 1000)
      return () => clearInterval(timerId)
    }
    // Focus the input element when the component mounts
    // setInterval(() => {
    //   inputRefs.current[num].focus()
    //   // Click the button element after focusing the input element
    //   buttonRef.current?.click()
    // }, 1000)
    // const updatedOtp = [...otp]
    // updatedOtp[num] = inputKey
    // setOtp(updatedOtp)
    // if (inputRefs.current) {
    //   setNum(num + 1)
    // }
  }, [timer])

  const handleKeyBoard = (data: number) => {
    setInputKey(data)
  }
  return (
    <section
      className="w-full flex justify-center min-h-[90vh]"
      onClick={() => setOtpError(false)}
    >
      <div className="mt-4 w-full max-w-96 flex flex-col justify-between">
        <article>
          <h2 className="text-xl text-[#2C4BA0]">Enter OTP</h2>
          <p className="text-[#111111B2]">
            Enter the OTP we sent to your email
          </p>

          <form className="mt-4" onSubmit={onSubmit}>
            <div className=" flex gap-2 py-2 my-4 justify-between">
              {otp.map((data: number, index: number) => {
                return (
                  <input
                    type="text"
                    placeholder=""
                    value={data}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => {
                      handleOtpValueChange(index, Number(e.target.value))
                    }}
                    onKeyDown={(e) => handleBackspace(index, e)}
                    key={index}
                    className={otpError ? 'otp-err' : 'otp'}
                    max-length="1"
                  />
                )
              })}
            </div>
          </form>
          <div className="flex gap-4">
            <p>Didn't receive code? </p>
            <button className="flex gap-2">
              <p>Resend {timer > 0 && `in ${timer}`}</p>
              <FaLongArrowAltDown />
            </button>
          </div>
        </article>

        <article>
          <div className="keyboard">
            {keyboard.map((data) => {
              return (
                <button
                  key={data}
                  ref={() => buttonRef.current}
                  className="w-full max-w-[320px] bg-[#F7F9FC] h-full max-h-[72px] rounded-lg p-4 cursor-pointer"
                  onClick={() => handleKeyBoard(data)}
                >
                  <span>{data}</span>
                </button>
              )
            })}
            <div
              className="w-full max-w-[320px] bg-[#F7F9FC] h-full max-h-[72px]
            rounded-lg p-4 flex justify-center cursor-pointer "
            >
              <DeleteIcon />
            </div>

            <span className="w-full max-w-[320px] bg-[#F7F9FC] h-full max-h-[72px] rounded-lg p-4 cursor-pointer">
              0
            </span>
            <div
              className="w-full max-w-[320px] flex justify-center bg-[#F7F9FC] h-full max-h-[72px]
            rounded-lg p-4 cursor-pointer"
              onClick={() => navigate('/verified')}
            >
              <GoIcon />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default OtpVerification
