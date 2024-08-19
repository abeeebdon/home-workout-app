import { BtnIcon } from './Icons'
type prop = {
  text: string
  icon?: boolean
}
const Button = (props: prop) => {
  const { text, icon } = props
  return (
    <div className="w-full mt-10 pt-8">
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
