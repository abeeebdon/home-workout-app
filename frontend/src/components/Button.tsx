import { BtnIcon } from './Icons'
type prop = {
  text: string
  icon?: boolean
  location?: string
}
const Button = (props: prop) => {
  const { text, icon } = props
  return (
    <div className="w-full mt-5 pt-8 flex justify-center">
      <button
        type="submit"
        className="flex btn-blue w-full max-w-[400px] justify-center items-center p-3 gap-2 mt-4"
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
