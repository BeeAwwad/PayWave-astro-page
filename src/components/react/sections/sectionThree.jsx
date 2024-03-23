import SubHeader from "./subHeader"

function sectionThree() {
  const subHeaderContent = [
    { header: "End-to-end security" },
    {
      paragraph:
        "We protect your money and data with the leading edge internet security protocols",
    },
  ]
  return (
    <>
      <SubHeader
        header={subHeaderContent[0].header}
        paragraph={subHeaderContent[1].paragraph}
      >
        <img
          src="/images/section/section-3.svg"
          alt="padlock-svg"
          className="w-8"
        />
      </SubHeader>
    </>
  )
}

export default sectionThree
