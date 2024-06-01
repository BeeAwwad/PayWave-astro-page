import { Button } from "../ui/button"
import { motion, useTransform } from "framer-motion"
function Card(props) {
  const { idx, title, description, color, progress, range, targetScale } = props
  const topValue = `calc(-10% + ${idx * 30}px)`
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div className="flex items-center justify-center sticky top-0 h-screen">
      <motion.div
        style={{ scale: scale, top: topValue }}
        className={`flex flex-col justify-between origin-top mt-16 py-10 px-5 rounded-3xl w-[62.5rem] h-[31.25rem] ${color} relative`}
      >
        <div className="max-w-[43.75rem]">
          <h2 className="mt-10 text-3xl md:text-4xl lg:text-5xl font-medium text-white">
            {title}
          </h2>
          <p className="text-black font-normal mt-16 text-xl md:text-xl lg:text-2xl">
            {description}
          </p>
        </div>
        <Button
          className={
            "text-base bg-[#002C6E] ease-in w-fit group hover:scale-105 hover:text-white hover:bg-[#002C6E] transition-transform duration-300"
          }
        >
          <span className="relative inline-block transition-transform duration-300 group-hover:scale-105">
            Start a fixed savings plan
          </span>
        </Button>
      </motion.div>
    </div>
  )
}

export default Card
