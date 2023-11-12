import Accordian from './accordian'

export default function PortfolioContent({ portfolioData }) {
  return (
    <div className="mx-auto max-w-7xl items-center p-6 lg:px-8">
      <div className="font-headings text-4xl font-semibold my-16 text-center 2xl:text-start">
        Raja's Portfolio
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center 2xl:justify-start">
        {portfolioData.slice(0, 10).reverse().map(item => {
          return (
            <div key={item.pID}>
              <Accordian item={item} />
            </div>
          )
        })}
      </div>
    </div>
  )
}