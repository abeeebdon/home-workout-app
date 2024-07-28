import { useNavigate } from 'react-router-dom'
import { BtnIcon } from './Icons'
type prop = {
  text: string
  location: string
  icon?: boolean
}
const Button = (props: prop) => {
  const { text, location, icon } = props
  const navigate = useNavigate()
  return (
    <div className="w-full mt-10 pt-8" onClick={() => navigate(location)}>
      <button
        type="submit"
        className="flex btn-blue w-full justify-center items-center gap-2 mt-8"
      >
        <div className={icon ? 'block' : 'hidden'}>
          <BtnIcon />
        </div>
        <span>{text}</span>
      </button>
    </div>
  )
}

export default Button
