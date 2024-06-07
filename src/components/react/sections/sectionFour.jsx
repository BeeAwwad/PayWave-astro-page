import SubHeader from "./subHeader"
import Card from "../card"
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

function sectionFour() {
  const subHeaderContent = [
    {
      header:
        "<span class='text-[#327CEB] italic'>Savings</span> your money with Paywave",
    },
    {
      paragraph:
        "Choose the plan that fits your style and keep track of your savings.",
    },
  ]

  const infoCards = [
    {
      title: "Fixed Deposit Savings",
      color: "bg-[#327CEB]",
      description:
        "Planning a trip or next semester’s school fees, paywave helps you save lumpsum of money towards a target or for a fixed amount of time.",
    },
    {
      title: "Periodic Savings",
      color: "bg-[#32EB9D]",
      description:
        "Save as you go. With paywave, you can save a fixed amount of money daily, weekly or monthly.",
    },
    {
      title: "Custom Savings",
      color: "bg-[#FF85CE]",
      description:
        "Paywave gives you freedom. Choose the plan that fits your style and keep track of your savings.",
    },
  ]

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <>
      <SubHeader
        className="mt-72"
        header={subHeaderContent[0].header}
        paragraph={subHeaderContent[1].paragraph}
      >
        <h3>Savings</h3>
      </SubHeader>
      <section
        ref={container}
        className="mt-20 card-section mx-5 md:mx-16 xl:mx-48"
      >
        {infoCards.map((card, index) => {
          const targetScale = 1 - (infoCards.length - index) * 0.05

          return (
            <Card
              key={index}
              idx={index}
              {...card}
              range={[index * 0.33333333, 0.9994846619281572]}
              progress={scrollYProgress}
              targetScale={targetScale}
            />
          )
        })}
      </section>
    </>
  )
}

export default sectionFour
