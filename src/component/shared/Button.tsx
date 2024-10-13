import { FC } from "react"
const Button: FC <{text:string}> = ({text}) => {
  return (
    <div>
      <button className="px-8 py-3 text-white rounded-full hover:shadow-lg bg-[#00616C] text-lg font-bold transition-transform duration-300 hover:scale-110 cursor-pointer tracking-normal">{text}</button>
    </div>
  )
}

export default Button
