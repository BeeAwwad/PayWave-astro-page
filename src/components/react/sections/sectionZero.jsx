import { Button } from "@/components/ui/button"

function sectionZero() {
  const Content = [
    { header: "Take control of your finances" },
    {
      paragraph:
        "We're crafting the ultimate solution for seamlessly managing all your financial transactions. Minimal fees, Maximum convenience.",
    },
  ]
  return (
    <section className="relative z-10 md:mx-12">
      <div className="flex flex-col justify-center items-center bg-[#DCEAFF] text-[#002C6E] py-20 px-10 md:rounded-2xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center max-w-[900px]">
          {Content[0].header}
        </h1>
        <p className="mt-14 text-center font-medium md:text-xl lg:text-2xl max-w-3xl">
          {Content[1].paragraph}
        </p>
        <Button className="text-base bg-[#327CEB] hover:bg-[#002C6E] ease-in mt-14 max-w-[1252.05px] duration-300 transform group hover:scale-105">
          <span className="transition-transform duration-300 group-hover:scale-105">
            Read the Paywave Story
          </span>
        </Button>
      </div>
    </section>
  )
}

export default sectionZero
