
export default function HowItWorks() {
    return (
        <section className="mx-auto flex flex-col max-w-7xl justify-center text-center pt-28 lg:px-8">
            <div className="mx-4">
                <h2 className="font-headings text-4xl font-semibold mb-8">Investing Made Eazy</h2>
                <p className="font-dText text-eazy-grey text-2xl">
                    We make investing easy. We can help you get started with fractional investing within minutes.
                </p>
            </div>

            <div className="grid grid-cols-1 m-4 md:grid-cols-2 md:mx-24 md:my-16">
                <div className="flex flex-col justify-start text-center p-6 hover:shadow-[0_25px_65px_0px_rgba(0,0,0,0.1)]">
                    <div className="w-24 h-24 m-auto bg-eazy-main-100 my-4 rounded-xl"></div>
                    <h3 className="font-headings text-2xl my-4">Property Indentification</h3>
                    <p className=" font-dText font-normal text-eazy-grey my-4">
                        Our team finds the best properties on and off the market for our members to buy exclusively.
                    </p>
                </div>
                <div className="flex flex-col justify-start text-center p-6 hover:shadow-[0_25px_65px_0px_rgba(0,0,0,0.1)]">
                    <div className="w-24 h-24 m-auto bg-eazy-main-100 my-4 rounded-xl"></div>
                    <h3 className="font-headings text-2xl my-4">Online Action</h3>
                    <p className=" font-dText font-normal text-eazy-grey my-4">
                        The property is listed after being vetted, allowing you to invest for as little as $1
                    </p>
                </div>
                <div className="flex flex-col justify-start text-center p-6 hover:shadow-[0_25px_65px_0px_rgba(0,0,0,0.1)]">
                    <div className="w-24 h-24 m-auto bg-eazy-main-100 my-4 rounded-xl"></div>
                    <h3 className="font-headings text-2xl my-4">Property Management</h3>
                    <p className=" font-dText font-normal text-eazy-grey my-4">
                        We manage the property on your behalf so you can let your money work for you.
                    </p>
                </div>
                <div className="flex flex-col justify-start text-center p-6 hover:shadow-[0_25px_65px_0px_rgba(0,0,0,0.1)]">
                    <div className="w-24 h-24 m-auto bg-eazy-main-100 my-4 rounded-xl"></div>
                    <h3 className="font-headings text-2xl my-4">Profit</h3>
                    <p className=" font-dText font-normal text-eazy-grey my-4">
                        When the work is done, you recieve monthly dividends and at the exit gain equity gains.
                    </p>
                </div>
            </div>
        </section>
    )
}