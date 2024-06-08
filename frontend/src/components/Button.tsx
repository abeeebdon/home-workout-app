import { useNavigate } from 'react-router-dom'
import { BtnIcon } from './Icons'
type prop = {
  text: string
  location: string
}
const Button = (props: prop) => {
  const navigate = useNavigate()
  const text = props.text
  const location = props.location
  return (
    <div className="w-full mt-10 pt-8">
      <button
        type="submit"
        className="flex btn-blue w-full justify-center items-center gap-2 mt-8"
        onClick={() => navigate(`/${location}`)}
      >
        <BtnIcon />
        <span>{text}</span>
      </button>
    </div>
  )
}

export default Button
