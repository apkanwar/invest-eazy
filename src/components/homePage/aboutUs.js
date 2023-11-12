
export default function AboutUs() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto flex flex-col max-w-7xl justify-center text-center lg:flex-row lg:px-8">
                <div className="flex flex-col justify-center m-4 lg:p-6 lg:w-[40%] lg:text-start">
                    <h3 className="text-eazy-main-100 font-headings mb-5 font-medium text-2xl">About Us</h3>
                    <h2 className="font-headings mb-7 font-semibold text-4xl">What we're doing for you</h2>

                    <p className="text-eazy-grey font-dText text-xl">
                        The actions we take on our platform differentiate us and create our identity.
                        Learn more about how we impact your growth.
                    </p>
                </div>
                <div className="flex flex-wrap lg:float-right lg:w-[75%] lg:p-6">
                    <div className="flex flex-col flex-wrap w-full justify-center">
                        <div className="flex flex-col items-center rounded-2xl mb-2 p-8 lg:flex-row lg:items-start hover:shadow-[0_25px_65px_0px_rgba(0,0,0,0.1)]">
                            <div className="w-16 h-16 bg-eazy-main-100 rounded-2xl"></div>
                            <div className="flex flex-col flex-wrap lg:ml-4 text-center lg:text-start">
                                <h3 className="font-headings text-2xl pt-4">Private and Secure Process</h3>
                                <p className="mt-4 font-dText text-eazy-grey">
                                    We make security a priority to make sure you won't have to worry about privacy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col flex-wrap w-full justify-center">
                        <div className="flex flex-col items-center rounded-2xl mb-2 p-8 lg:flex-row lg:items-start hover:shadow-[0_25px_65px_0px_rgba(0,0,0,0.1)]">
                            <div className="w-16 h-16 bg-eazy-main-100 rounded-2xl"></div>
                            <div className="flex flex-col flex-wrap ml-4 text-center lg:text-start">
                                <h3 className="font-headings text-2xl pt-4">Private and Secure Process</h3>
                                <p className="mt-4 font-dText text-eazy-grey">
                                    We make security a priority to make sure you won't have to worry about privacy.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col flex-wrap w-full justify-center">
                        <div className="flex flex-col items-center rounded-2xl mb-2 p-8 lg:flex-row lg:items-start hover:shadow-[0_25px_65px_0px_rgba(0,0,0,0.1)]">
                            <div className="w-16 h-16 bg-eazy-main-100 rounded-2xl"></div>
                            <div className="flex flex-col flex-wrap ml-4 text-center lg:text-start">
                                <h3 className="font-headings text-2xl pt-4">Private and Secure Process</h3>
                                <p className="mt-4 font-dText text-eazy-grey">
                                    We make security a priority to make sure you won't have to worry about privacy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}