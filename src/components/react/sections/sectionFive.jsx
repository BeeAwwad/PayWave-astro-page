import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"

function sectionFive() {
  const [activeItem, setActiveItem] = useState("")

  const handleAccordionClick = (itemValue) => {
    setActiveItem((prevItem) => (prevItem === itemValue ? "" : itemValue))
  }

  return (
    <section className="font-poppins my-16 mx-5 md:mx-16 xl:mx-48">
      <h2 className="mb-4 text-4xl font-semibold text-center max-w-[600px] mx-auto">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="rounded-md p-3"
          open={activeItem === "item-1"}
        >
          <AccordionTrigger
            className="hover:no-underline text-lg"
            onClick={() => handleAccordionClick("item-1")}
          >
            What is Paywave?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="rounded-md p-3"
          value="item-2"
          open={activeItem === "item-2"}
        >
          <AccordionTrigger
            className="hover:no-underline text-lg"
            onClick={() => handleAccordionClick("item-2")}
          >
            Who is Paywave?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. It's built with CSS variables so you can easily customize the
            styles.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="rounded-md p-3"
          value="item-3"
          open={activeItem === "item-3"}
        >
          <AccordionTrigger
            className="hover:no-underline text-lg"
            onClick={() => handleAccordionClick("item-3")}
          >
            When is Paywave?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. It's licensed under the MIT license.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="rounded-md p-3"
          value="item-4"
          open={activeItem === "item-4"}
        >
          <AccordionTrigger
            className="hover:no-underline text-lg"
            onClick={() => handleAccordionClick("item-4")}
          >
            Why is Paywave?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Yes. The project is open to contributions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default sectionFive
