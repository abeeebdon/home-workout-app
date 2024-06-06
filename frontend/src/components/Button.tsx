import { BtnIcon } from './Icons'
type prop = {
  text: string
}
const Button = (props: prop) => {
  const text = props.text
  return (
    <div className="w-full mt-10 pt-8">
      <button
        type="submit"
        className="flex btn-blue w-full justify-center items-center gap-2 mt-8"
      >
        <BtnIcon />
        <span>{text}</span>
      </button>
    </div>
  )
}

export default Button
